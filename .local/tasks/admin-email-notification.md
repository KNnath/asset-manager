# Admin Email Notification on Apply Submission

## What & Why
Send an internal notification email to the WRM admin whenever a user submits the /apply form. This ensures no lead goes unnoticed and allows for fast follow-up.

## Done looks like
- Every successful form submission on /apply triggers an email to whiskeydev@whiskeyrivermedia.com
- The email contains all submitted fields: name, company, website, monthly revenue, primary goal, services interested, business description, and referral source
- Email is cleanly formatted and easy to scan
- A RESEND_API_KEY secret is stored securely in environment variables
- If email sending fails, the form submission still succeeds (non-blocking)

## Out of scope
- Confirmation email to the applicant (future work)
- CRM integration
- Slack notifications

## Tasks
1. **Install Resend and configure the API key** — Install the `resend` npm package and store the API key as a RESEND_API_KEY environment secret. Set admin recipient as ADMIN_EMAIL env var defaulting to whiskeydev@whiskeyrivermedia.com.

2. **Add email notification to the application submission endpoint** — After a successful application is saved to the database, call Resend to fire a notification email to the admin. The email should be HTML-formatted with all form fields clearly laid out. Wrap in try/catch so a failed email never blocks the API response.

## Relevant files
- `server/routes.ts:88-94`
- `client/src/pages/Apply.tsx`
