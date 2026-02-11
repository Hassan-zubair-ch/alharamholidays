# Vercel environment variables

Add these in **Vercel** → your project → **Settings** → **Environment Variables**.

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key from [resend.com/api-keys](https://resend.com/api-keys) | Yes (for contact form) |
| `CONTACT_EMAIL` | Email where form submissions are sent (default: info@alharamtravel.uk) | No |
| `FROM_EMAIL` | Verified sender email in Resend (default: onboarding@resend.dev) | No |

## Resend setup

1. Sign up at [resend.com](https://resend.com).
2. Create an API key and add it as `RESEND_API_KEY` in Vercel.
3. Emails will be sent **to** `info@alharamtravel.uk` (or `CONTACT_EMAIL`).
4. By default, the "from" address is `onboarding@resend.dev`. To use your own domain (e.g. `noreply@alharamtravel.uk`), verify the domain in Resend and set `FROM_EMAIL`.

## Deploy

- Connect the repo to Vercel and deploy. No extra build settings needed.
- Ensure **Node.js** version is 18.x or 20.x (Vercel default is fine).
