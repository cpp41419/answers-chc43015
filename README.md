# CHC43015 Answers - Aged Care Training Q&A Platform

![Status](https://img.shields.io/badge/status-production-ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)

A comprehensive Q&A platform for the **CHC43015 Certificate IV in Ageing Support** qualification in Australia. Built with Next.js, it provides in-depth answers covering course enrollment, study options, costs, state requirements, and career pathways in aged care.

**Live Site:** https://answers.chc43015.com
**Repository:** https://github.com/cpp41419/answers-chc43015

## Features

### 📚 Comprehensive Q&A Database
- **40+ Questions** covering all aspects of CHC43015 training
- **8 Categories** including enrollment, costs, state requirements, and career pathways
- **Aged Care Specific** - Person-centered care, dementia care, quality standards

### 🔍 SEO Optimized
- Dynamic sitemap generation
- Structured data (Schema.org markup)
- Organization, EducationalProgram, and FAQPage schemas
- Responsive design for all devices

### ⚡ Performance
- Built with Next.js 15 App Router
- Optimized static site generation
- Firebase deployment ready

## Quick Start

```bash
# Install dependencies
npm install

# Set environment
echo "NEXT_PUBLIC_BASE_URL=https://answers.chc43015.com" > .env.local

# Run development server
npm run dev
```

Visit http://localhost:3000

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Firebase deployment instructions.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── data/            # Q&A database
├── lib/             # Utilities
└── types/           # TypeScript types
```

## Technology Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Firebase Hosting

## Q&A Categories

1. **Course Basics & Enrollment** - Understanding CHC43015 and prerequisites
2. **Study Options & Duration** - Duration, delivery modes, practical placements
3. **Costs & Payment** - Fees, government funding, payment options
4. **State Licensing Requirements** - NSW, VIC, QLD, WA specific requirements
5. **Assessment & Completion** - Competency-based assessment and RPL
6. **Career & Employment** - Job roles, salaries, career progression
7. **Provider Selection** - Choosing RTOs, quality indicators
8. **Technical Requirements** - Technology needs, First Aid, health checks

## External Resources

Real, contextual links to:
- ASQA Provider Registry
- Aged Care Quality Standards
- National Disability Insurance Scheme

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run typecheck # Type checking
npm run lint     # Linting
```

---

**Status:** Production Ready
**Last Updated:** 2025-11-04
**Domain:** https://answers.chc43015.com
