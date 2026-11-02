'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: '',
    budget: '',
    purpose: 'Buy',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Build a WhatsApp message from the form and open the chat.
    const lines = [
      'Hello, I would like a property consultation.',
      '',
      `Name: ${formState.fullName}`,
      `Phone: ${formState.phone}`,
      `Email: ${formState.email}`,
      `Property Interest: ${formState.interest}`,
      `Budget: ${formState.budget}`,
      `Purpose: ${formState.purpose}`,
      `Message: ${formState.message}`,
    ];
    const url = `https://wa.me/919945726707?text=${encodeURIComponent(lines.join('\n'))}`;
    const chat = window.open(url, '_blank');

    // Keep the entered details if the popup was blocked, so the lead isn't lost.
    if (!chat) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  const inputClass = "text-base sm:text-sm rounded-3xl border border-black/10 bg-white px-4 py-3 text-[#1A1A18] outline-none transition focus:border-[#D4AF37] placeholder:text-[#ABABAA]";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card border border-black/[0.08] p-8 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-[#4A4A40]">
          Full Name
          <input required name="fullName" value={formState.fullName} onChange={handleChange} className={inputClass} placeholder="Aarav Menon" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#4A4A40]">
          Phone Number
          <input required type="tel" name="phone" value={formState.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#4A4A40]">
          Email
          <input type="email" name="email" value={formState.email} onChange={handleChange} className={inputClass} placeholder="name@example.com" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#4A4A40]">
          Property Interest
          <input name="interest" value={formState.interest} onChange={handleChange} className={inputClass} placeholder="Villas, Investments, Commercial" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#4A4A40]">
          Budget
          <input name="budget" value={formState.budget} onChange={handleChange} className={inputClass} placeholder="₹ 4 Cr - ₹ 20 Cr" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#4A4A40]">
          Buy / Sell / Invest
          <select name="purpose" value={formState.purpose} onChange={handleChange} className={inputClass}>
            <option>Buy</option>
            <option>Sell</option>
            <option>Invest</option>
          </select>
        </label>
      </div>
      <label className="mt-4 flex flex-col gap-2 text-sm text-[#4A4A40]">
        Message
        <textarea name="message" value={formState.message} onChange={handleChange} rows={5} className={inputClass} placeholder="Tell us about your ideal property or investment goal" />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#c2992d]"
        >
          Send on WhatsApp
        </button>
        <span className="text-xs uppercase tracking-[0.3em] text-[#625E56]">Instant response via WhatsApp</span>
      </div>
      {status === 'success' && (
        <div className="mt-4 rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-4 text-sm text-[#7A6010]">
          Opening WhatsApp… please press send in the chat to reach our advisory team.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 rounded-3xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          Your browser blocked WhatsApp from opening. Please allow pop-ups and try again, or call us on{' '}
          <a href="tel:+919945726707" className="font-semibold underline">+91 99457 26707</a>.
        </div>
      )}
    </motion.form>
  );
}
