'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { anton, mono } from '@/commonComponents/fonts';
import './ContactForm.css';

type ContactFormData = {
  fullName: string;
  email: string;
  subject: string;
  orderNumber: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'sent';

const initialForm: ContactFormData = {
  fullName: '',
  email: '',
  subject: '',
  orderNumber: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  function handleChange(field: keyof ContactFormData) {
    return (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('submitting');

    // TODO: wire this up to your actual contact/email endpoint.
    await new Promise((resolve) =>
      setTimeout(resolve, 600)
    );

    setStatus('sent');
    setForm(initialForm);
  }

  return (
    <div className="contact-form-wrapper">
      <h2 className={`${anton.className} contact-form-title`}>
        DON&apos;T BE SHY.
        <br className="contact-mobile-break" /> HIT US UP AND WE&apos;LL GET BACK TO YOU!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <div className="contact-form-row">
          <input
            type="text"
            required
            placeholder="Full name"
            value={form.fullName}
            onChange={handleChange('fullName')}
            className={`${mono.className} contact-form-field`}
          />

          <input
            type="email"
            required
            placeholder="Email address"
            value={form.email}
            onChange={handleChange('email')}
            className={`${mono.className} contact-form-field`}
          />
        </div>

        <div className="contact-form-row">
          <input
            type="text"
            required
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange('subject')}
            className={`${mono.className} contact-form-field`}
          />

          <input
            type="text"
            placeholder="Order number ( optional )"
            value={form.orderNumber}
            onChange={handleChange('orderNumber')}
            className={`${mono.className} contact-form-field`}
          />
        </div>

        <textarea
          required
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          className={`${mono.className} contact-form-field contact-form-textarea`}
        />

        <div className="contact-submit-wrapper">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`${anton.className} contact-submit-button`}
          >
            {status === 'submitting'
              ? 'SENDING...'
              : status === 'sent'
                ? 'SENT!'
                : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
}