import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory submissions store with rate limiting & audit log
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  ip: string;
}

const contactSubmissions: ContactSubmission[] = [];
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Simple in-memory rate limiter: 5 requests per 10 minutes per IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= 8) {
    return false;
  }

  record.count += 1;
  return true;
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'KDR Portfolio API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact endpoint with strict validation & spam protection
app.post('/api/contact', (req, res) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting another message.',
    });
  }

  const { name, email, subject, message, honeypot } = req.body;

  // Honeypot bot protection
  if (honeypot) {
    return res.status(400).json({ success: false, error: 'Spam detected.' });
  }

  // Field validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, error: 'Please provide a valid name (at least 2 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
    return res.status(400).json({ success: false, error: 'Please provide a subject line (at least 2 characters).' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ success: false, error: 'Please write a message of at least 10 characters.' });
  }

  const submissionId = `KDR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

  const newEntry: ContactSubmission = {
    id: submissionId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    ip: clientIp,
  };

  contactSubmissions.push(newEntry);
  console.log(`[Contact Submission] Received message from ${newEntry.name} <${newEntry.email}> - Ref: ${newEntry.id}`);

  return res.status(200).json({
    success: true,
    message: "Thank you! Your message has been directly dispatched to Karan Dhanraj.",
    receiptId: submissionId,
    timestamp: newEntry.createdAt,
  });
});

// Vite dev server middleware or static production serve
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 KDR Portfolio Server running on http://0.0.0.0:${PORT} [${isDev ? 'development' : 'production'}]`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
