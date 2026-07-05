import type { APIRoute } from 'astro';
import settings from '../../content/singletons/settings.json';

export const prerender = false;

const REQUIRED = ['name', 'email', 'phone', 'voicemail', 'payment', 'reason'] as const;
const MAX_LEN = 300;

const clean = (v: FormDataEntryValue | null) =>
  typeof v === 'string' ? v.trim().slice(0, MAX_LEN) : '';

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect('/contact?error=1', 303);
  }

  // Honeypot: bots fill the hidden field; pretend success.
  if (clean(form.get('company'))) return redirect('/thank-you', 303);

  const values = Object.fromEntries(
    ['name', 'email', 'phone', 'voicemail', 'payment', 'reason', 'referral'].map((k) => [
      k,
      clean(form.get(k)),
    ])
  );

  const missing = REQUIRED.some((k) => !values[k]);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
  if (missing || !emailOk) return redirect('/contact?error=1', 303);

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL || settings.email;
  const from = import.meta.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Okay to leave voicemail: ${values.voicemail}`,
    `Payment: ${values.payment}`,
    `Reason: ${values.reason}`,
    `Heard about the practice via: ${values.referral || '(not answered)'}`,
    '',
    `Submitted from the website contact form on ${new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
    })} (Eastern).`,
  ].join('\n');

  if (!apiKey) {
    // Local/dev fallback so the flow can be tested without credentials.
    console.log('[contact form] RESEND_API_KEY not set. Submission:\n' + lines);
    return redirect('/thank-you', 303);
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Morning Light Website <${from}>`,
        to: [to],
        reply_to: values.email,
        subject: `New client inquiry — ${values.name}`,
        text: lines,
      }),
    });
    if (!res.ok) {
      console.error('[contact form] Resend error', res.status, await res.text());
      return redirect('/contact?error=1', 303);
    }
  } catch (err) {
    console.error('[contact form] Resend request failed', err);
    return redirect('/contact?error=1', 303);
  }

  return redirect('/thank-you', 303);
};
