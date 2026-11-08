import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<{ id: string; timestamp: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please provide your name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please enter a subject line.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Your message must be at least 10 characters long.');
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server rejected the submission. Please try again.');
      }

      setStatus('success');
      setReceipt({ id: data.receiptId, timestamp: data.timestamp });

      // Trigger celebratory confetti
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#ffffff'],
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Network error occurred while connecting to server.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    setStatus('idle');
    setReceipt(null);
    setErrorMessage(null);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0284c7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
          <span>06</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Initiate Dialogue</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          LET'S CREATE <br className="hidden sm:inline" />
          <span className="text-zinc-500">SOMETHING MEANINGFUL.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
          Have an idea, project or collaboration in mind? Let's connect. Direct inquiries route directly to Karan Dhanraj's inbox.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info & Verified Channels */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/70 space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Direct Contact Channels
            </h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Available for full-time AI operator roles, full stack engineering engagements, and select consulting contracts.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-900 bg-zinc-900/40 hover:bg-zinc-900 hover:border-[#38bdf8]/40 transition-colors cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-[#38bdf8] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Primary Email
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 group-hover:text-[#38bdf8] transition-colors break-all">
                    {PROFILE_DATA.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-900 bg-zinc-900/40">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Current Location
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-200 font-medium">
                    {PROFILE_DATA.location} · Remote Worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-zinc-900">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                Verified Profiles
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
                </a>

                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Actual Validated Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {status === 'success' && receipt ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Message Dispatched!
                </h3>
                <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out. Your transmission was recorded with verified receipt ID and delivered to Karan Dhanraj.
                </p>
              </div>

              {/* Verified Audit Receipt */}
              <div className="p-4 rounded-xl border border-zinc-850 bg-[#090c14] font-mono text-xs text-left max-w-md mx-auto space-y-2">
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">RECEIPT ID:</span>
                  <span className="text-[#38bdf8] font-bold">{receipt.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">TIMESTAMP:</span>
                  <span className="text-zinc-400">{new Date(receipt.timestamp).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">STATUS:</span>
                  <span className="text-emerald-400 font-semibold">Confirmed on Server</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                Send Another Transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error feedback banner */}
              {status === 'error' && errorMessage && (
                <div className="p-3.5 rounded-xl border border-rose-900/60 bg-rose-950/30 flex items-start gap-3 text-rose-300 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Bot Honeypot (Hidden) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Full Name <span className="text-[#38bdf8]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Sterling"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Email Address <span className="text-[#38bdf8]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Subject Line <span className="text-[#38bdf8]">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / AI agent architecture"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Message Details <span className="text-[#38bdf8]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a brief overview of your timeline, objectives, or role..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#38bdf8] text-[#050505] font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
