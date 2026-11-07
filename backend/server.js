import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const {
  RESEND_API_KEY,
  CONTACT_TO_EMAIL,
  CONTACT_FROM_EMAIL = "onboarding@resend.dev",
  FRONTEND_ORIGIN = "http://localhost:5173",
  PORT = 4000,
} = process.env;

if (!RESEND_API_KEY) {
  console.warn(
    "[backend] RESEND_API_KEY is not set. Copy backend/.env.example to backend/.env and fill it in."
  );
}
if (!CONTACT_TO_EMAIL) {
  console.warn(
    "[backend] CONTACT_TO_EMAIL is not set. Contact form emails have nowhere to go."
  );
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const app = express();

// Allow the configured FRONTEND_ORIGIN, plus any localhost port — Vite
// picks a different port automatically when 5173 is already taken, so
// pinning to one exact port breaks local dev as soon as that happens.
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (origin === FRONTEND_ORIGIN) return callback(null, true);
      if (/^http:\/\/localhost:\d+$/.test(origin)) return callback(null, true);
      callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required." });
  }

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return res.status(500).json({
      error: "Contact form is not configured on the server yet.",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: `AKA Design Center Website <${CONTACT_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[backend] Resend error:", error);
      return res.status(502).json({ error: "Could not send the message." });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error("[backend] Unexpected error sending email:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`[backend] Listening on http://localhost:${PORT}`);
});
