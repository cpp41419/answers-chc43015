# CHC43015 Answers - Deployment Guide

## Project Overview
CHC43015 Answers is a Next.js 15 application providing comprehensive Q&A for the Certificate IV in Ageing Support qualification in Australia.

**Repository:** https://github.com/cpp41419/answers-chc43015
**Deployment:** Firebase App Hosting
**Domain:** answers.chc43015.com
**Environment:** Production

## Pre-Deployment Requirements

### 1. Firebase Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init hosting
```

### 2. Environment Variables
Create `.env.local` and `.env.production`:
```env
NEXT_PUBLIC_BASE_URL=https://answers.chc43015.com
```

### 3. Domain Configuration
Ensure you have:
- Domain registered: `answers.chc43015.com`
- DNS access to configure DNS records
- SSL certificate (Firebase handles this automatically)

## Deployment Steps

### Step 1: Build the Project
```bash
npm install
npm run build
```

### Step 2: Deploy to Firebase
```bash
firebase deploy --only hosting
```

### Step 3: Configure DNS
Update your domain DNS records to point to Firebase:
```
CNAME: answers.chc43015.com → c.storage.googleapis.com
```

Or use the Firebase-provided DNS configuration.

### Step 4: Verify Deployment
```bash
# Check Firebase hosting status
firebase hosting:channel:list

# Visit the domain
https://answers.chc43015.com
```

## Post-Deployment

### 1. Submit Sitemap to Google Search Console
- Go to https://search.google.com/search-console
- Add property for `answers.chc43015.com`
- Submit sitemap: `https://answers.chc43015.com/sitemap.xml`

### 2. Add Schema Markup Validation
- Use Google Rich Results Test: https://search.google.com/test/rich-results
- Test URL: `https://answers.chc43015.com`
- Verify FAQ and Organization schemas

### 3. Monitor Performance
- Firebase Console: https://console.firebase.google.com
- Monitor Real-time Database (if used)
- Check Analytics

## Application Features

### Content
- **40 Q&A Pairs** covering CHC43015 Certificate IV in Ageing Support
- **8 Categories:**
  - Course Basics & Enrollment
  - Study Options & Duration
  - Costs & Payment
  - State Licensing Requirements
  - Assessment & Completion
  - Career & Employment
  - Provider Selection
  - Technical Requirements
  - Advanced Questions

### SEO
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Comprehensive schema markup (Organization, EducationalProgram, FAQPage)
- OG meta tags on all pages

### Technology Stack
- **Framework:** Next.js 15 with App Router
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS
- **Database:** Firebase (optional, currently not used)
- **AI Integration:** Google Genkit (configured but optional)
- **Deployment:** Firebase App Hosting

## File Structure
```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── data/               # Q&A database and categories
│   ├── lib/                # Utilities
│   ├── types/              # TypeScript types
│   └── ai/                 # AI flows (Genkit)
├── public/                 # Static assets
├── apphosting.yaml         # Firebase App Hosting config
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## Troubleshooting

### Build Failures
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for missing environment variables

### Deployment Issues
- Verify Firebase credentials: `firebase projects:list`
- Check app hosting status: `firebase hosting:channel:list`
- Review deployment logs: `firebase functions:log`

### Domain Issues
- Verify DNS records are configured correctly
- Wait 24-48 hours for DNS propagation
- Check Firebase console for domain configuration

## Scaling Configuration

Edit `apphosting.yaml` to adjust:
```yaml
runConfig:
  maxInstances: 1  # Increase for higher traffic
```

## Support
For issues or questions:
1. Check Firebase documentation: https://firebase.google.com/docs/hosting
2. Check Next.js documentation: https://nextjs.org/docs
3. Review GitHub repository: https://github.com/cpp41419/answers-chc43015

---
**Last Updated:** 2025-11-04
**Status:** Ready for Deployment
