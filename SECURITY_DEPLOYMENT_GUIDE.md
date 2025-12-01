# Security & Deployment Guide

## 🔒 Security First Approach

This project implements multiple layers of security to protect sensitive information:

### Protected Files

**Files that are NEVER committed:**
- `.env.local` - Local development environment variables
- `.env.production.local` - Production environment variables
- Any file containing API keys, secrets, or credentials

**How it works:**
- `.gitignore` explicitly lists all sensitive file patterns
- Setup documentation files (CONTACT_FORM_SIMPLE_SETUP.md, etc.) are only local
- These files are protected from accidental commits

### Reference File

**`.env.example`** - Shows required variables WITHOUT actual values
- Safe to commit and share
- Developers copy this to `.env.local` and fill in their own values
- Never contains real credentials

## 📋 Setup for Deployment

### Before First Deployment

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your values:**
   ```
   NEXTAUTH_URL=http://localhost:3000  # Change to your domain
   NEXTAUTH_SECRET=<generate-new>
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=your-app-password
   COMPANY_EMAIL=info@company.com
   GOOGLE_CLIENT_ID=your-id
   GOOGLE_CLIENT_SECRET=your-secret
   ```

3. **Generate NEXTAUTH_SECRET:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

## 🚀 Vercel Deployment (Recommended for Next.js)

### Step 1: Push to GitHub
```bash
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Next.js" framework

### Step 3: Set Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:

1. **NEXTAUTH_URL**
   - Value: `https://yourdomain.com` (your production domain)
   - Apply to: Production

2. **NEXTAUTH_SECRET**
   - Value: Generate using: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
   - Apply to: All (Development, Preview, Production)

3. **GMAIL_USER**
   - Value: your-gmail@gmail.com
   - Apply to: Production only (for security)

4. **GMAIL_PASSWORD**
   - Value: Your Gmail app-specific password (NOT your regular password)
   - Apply to: Production only
   - Note: [How to generate Gmail app password](https://support.google.com/accounts/answer/185833)

5. **COMPANY_EMAIL**
   - Value: info@yourcompany.com
   - Apply to: All

6. **GOOGLE_CLIENT_ID**
   - Value: From Google OAuth Console
   - Apply to: All

7. **GOOGLE_CLIENT_SECRET**
   - Value: From Google OAuth Console
   - Apply to: Production only

### Step 4: Configure OAuth Callback URL
In Google Cloud Console → OAuth 2.0 Credentials:
- Add `https://yourdomain.com/api/auth/callback/google`

### Step 5: Deploy
- Vercel auto-deploys on push to main
- Check deployment status in Vercel Dashboard

## ✅ Verification Checklist

Before pushing to production:

- [ ] `.env.local` is in `.gitignore`
- [ ] No sensitive files appear in git status
- [ ] `npm run build` completes without errors
- [ ] All environment variables are set in Vercel
- [ ] OAuth redirect URI matches your domain exactly
- [ ] Gmail account has app-specific password enabled
- [ ] NEXTAUTH_SECRET is long and random
- [ ] NEXTAUTH_URL matches your production domain
- [ ] Contact form works in staging/preview deployment

## 🔐 Best Practices

### Never Do:
- ❌ Commit `.env.local` or any `.env` file
- ❌ Use your main Google/Gmail password (use app-specific passwords)
- ❌ Put API keys in code comments
- ❌ Share credentials in messages/email
- ❌ Deploy without setting all environment variables

### Always Do:
- ✅ Use `.env.example` as a template
- ✅ Generate unique NEXTAUTH_SECRET per environment
- ✅ Rotate secrets periodically
- ✅ Use environment variables for all sensitive data
- ✅ Review `.gitignore` before committing
- ✅ Test forms in preview deployment before production
- ✅ Check email is properly configured before going live

## 📧 Email Configuration

### Gmail with App Password
1. Enable 2-Factor Authentication on your Google account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows Computer" (or your device)
4. Google generates a 16-character password
5. Use this password in `GMAIL_PASSWORD` environment variable

### Alternative Email Services
If not using Gmail, update the transporter in `app/api/contact/route.ts`:
```javascript
const transporter = nodemailer.createTransport({
  service: 'your-service', // SendGrid, AWS SES, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## 🧪 Testing Before Production

### Local Testing
```bash
# Build and test locally
npm run build
npm start

# Visit http://localhost:3000/contact and test the form
```

### Vercel Preview Deployment
- Every pull request automatically deploys to a preview URL
- Test all features before merging to main
- This ensures production deploy is successful

## 📞 Support

For questions about:
- **Vercel deployment**: [vercel.com/docs](https://vercel.com/docs)
- **NextAuth.js**: [next-auth.js.org](https://next-auth.js.org)
- **Gmail app passwords**: [support.google.com/accounts/answer/185833](https://support.google.com/accounts/answer/185833)
- **Next.js environment variables**: [nextjs.org/docs/basic-features/environment-variables](https://nextjs.org/docs/basic-features/environment-variables)
