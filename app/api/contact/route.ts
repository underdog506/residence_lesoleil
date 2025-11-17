import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Lazy initialization to avoid build-time errors when env vars aren't set
let resend: Resend | null = null;
const getResendClient = () => {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};

const receptionEmail = "residencelesoleil365@gmail.com";

// Production domain - ensure this domain is verified in your Resend dashboard
// Go to: https://resend.com/domains to verify residencelesoleil.ca
const fromEmail = "Résidence Le Soleil <noreply@residencelesoleil.ca>";

// Rate limiting: 5 submissions per 15 minutes per IP
// For production, set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in .env.local
let ratelimit: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    analytics: true,
  });
}

// Simple in-memory rate limiting fallback for development
const submissionTracker = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    // Rate limiting check
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";

    if (ratelimit) {
      // Using Upstash Redis rate limiting
      const { success } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { error: "Trop de demandes. Veuillez réessayer dans quelques minutes." },
          { status: 429 }
        );
      }
    } else {
      // Fallback in-memory rate limiting for development
      const now = Date.now();
      const submissions = submissionTracker.get(ip) || [];
      const recentSubmissions = submissions.filter(time => now - time < 15 * 60 * 1000);

      if (recentSubmissions.length >= 5) {
        return NextResponse.json(
          { error: "Trop de demandes. Veuillez réessayer dans quelques minutes." },
          { status: 429 }
        );
      }

      submissionTracker.set(ip, [...recentSubmissions, now]);
    }

    const body = await req.json();
    const { nom, prenom, email, telephone, date, heure, message, website, formStartTime } = body;

    // Honeypot validation - if website field is filled, it's likely spam
    if (website && website.trim() !== "") {
      // Return success to avoid revealing spam detection
      return NextResponse.json({
        success: true,
        message: "Votre demande a été envoyée avec succès",
      });
    }

    // Timestamp validation - reject suspiciously fast submissions (< 2 seconds)
    if (formStartTime && (startTime - formStartTime < 2000)) {
      return NextResponse.json(
        { error: "Veuillez prendre le temps de remplir le formulaire." },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!nom || !prenom || !email || !telephone || !date || !heure) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString("fr-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Admin notification email template - Dark theme matching website
    const adminEmailBody = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #cbd5e1; background-color: #0f172a; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background: linear-gradient(to right, #f59e0b, #d97706); color: #0f172a; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #0f172a; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #334155; border-top: none; }
          .field { margin-bottom: 15px; padding: 12px; background: #1e293b; border-left: 4px solid #f59e0b; border-radius: 4px; }
          .field strong { color: #f1f5f9; display: inline-block; min-width: 120px; }
          .field a { color: #fbbf24; text-decoration: none; }
          .message-box { background: #1e293b; padding: 15px; border-radius: 4px; margin-top: 15px; border: 1px solid #334155; }
          .footer { text-align: center; margin-top: 20px; color: #94a3b8; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Nouvelle Demande de Visite</h1>
          </div>
          <div class="content">
            <div class="field">
              <strong>Nom complet:</strong> <span style="color: #fbbf24;">${prenom} ${nom}</span>
            </div>
            <div class="field">
              <strong>Courriel:</strong> <a href="mailto:${email}">${email}</a>
            </div>
            <div class="field">
              <strong>Téléphone:</strong> <a href="tel:${telephone.replace(/\D/g, "")}">${telephone}</a>
            </div>
            <div class="field">
              <strong>Date souhaitée:</strong> <span style="color: #fbbf24;">${formattedDate}</span>
            </div>
            <div class="field">
              <strong>Heure souhaitée:</strong> <span style="color: #fbbf24;">${heure}</span>
            </div>
            ${message ? `
            <div class="message-box">
              <strong style="color: #f1f5f9;">Message:</strong>
              <p style="margin: 10px 0 0 0; color: #cbd5e1;">${message}</p>
            </div>
            ` : ""}
            <div class="footer">
              <p>Cette demande a été soumise via le formulaire de réservation sur residencesoleil.ca</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // User confirmation email template - Dark theme matching website
    const userEmailBody = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #cbd5e1; background-color: #0f172a; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background: linear-gradient(to right, #f59e0b, #d97706); color: #0f172a; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #0f172a; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #334155; border-top: none; }
          .info-box { background: #1e293b; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #f59e0b; }
          .info-box h3 { margin-top: 0; color: #fbbf24; font-size: 18px; }
          .info-box p { color: #cbd5e1; margin: 8px 0; }
          .info-box strong { color: #f1f5f9; }
          .button { display: inline-block; background: linear-gradient(to right, #f59e0b, #d97706); color: #0f172a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 15px 0; }
          .footer { text-align: center; margin-top: 20px; color: #94a3b8; font-size: 14px; }
          ul { color: #cbd5e1; line-height: 1.8; }
          p { color: #cbd5e1; }
          strong { color: #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Confirmation de Votre Demande</h1>
          </div>
          <div class="content">
            <p>Bonjour ${prenom} ${nom},</p>
            <p>Merci d'avoir choisi <strong>Résidence Le Soleil</strong>. Nous avons bien reçu votre demande de visite.</p>

            <div class="info-box">
              <h3>Détails de votre demande:</h3>
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Heure:</strong> ${heure}</p>
              ${message ? `<p><strong>Votre message:</strong> ${message}</p>` : ""}
            </div>

            <p><strong>Prochaines étapes:</strong></p>
            <ul>
              <li>Notre équipe examinera votre demande sous peu</li>
              <li>Nous vous contacterons dans les 24 heures pour confirmer votre rendez-vous</li>
              <li>Si vous avez des questions urgentes, n'hésitez pas à nous appeler</li>
            </ul>

            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:8197440672" class="button">Appelez-nous: 819-744-0672</a>
            </div>

            <p style="color: #94a3b8; font-size: 14px; margin-top: 30px;">
              <strong style="color: #f1f5f9;">Adresse:</strong><br>
              365 Rue Jean-Baptiste-Routhier<br>
              Gatineau, QC J8M 0B2
            </p>

            <div class="footer">
              <p>Au plaisir de vous accueillir bientôt!</p>
              <p style="margin-top: 15px;"><strong>L'équipe de Résidence Le Soleil</strong></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Get Resend client and check if API key is configured
    const resendClient = getResendClient();
    if (!resendClient) {
      console.error("Resend API key is not configured");
      return NextResponse.json(
        { error: "Service de messagerie non configuré. Veuillez contacter directement au 819-744-0672." },
        { status: 500 }
      );
    }

    // Send notification to admin
    const adminEmail = await resendClient.emails.send({
      from: fromEmail,
      to: [receptionEmail],
      subject: `Nouvelle demande de visite - ${prenom} ${nom}`,
      html: adminEmailBody,
      reply_to: email,
    });

    if (adminEmail.error) {
      console.error("Error sending admin email:", adminEmail.error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
        { status: 500 }
      );
    }

    // Send confirmation to user
    const userEmail = await resendClient.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Confirmation de votre demande de visite - Résidence Le Soleil",
      html: userEmailBody,
    });

    if (userEmail.error) {
      console.error("Error sending user confirmation:", userEmail.error);
      // Don't fail the request if user confirmation fails
      // Admin still got the notification
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a été envoyée avec succès",
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
