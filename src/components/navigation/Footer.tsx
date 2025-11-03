
import Link from 'next/link';
import { AppLogo } from '@/components/core/AppLogo';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Site Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Provider Quiz', href: '/quiz' },
        { name: 'Comprehensive Guide', href: '/guide' },
        { name: 'Regional Guide', href: '/regional-guide' },
        { name: 'Popular Blogs', href: '/popular-blogs' },
        { name: 'Data Insights', href: '/data-insights' },
        { name: 'Submit a Question', href: '/submit-question' },
        { name: 'All Questions', href: '/questions' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'ASQA Provider Registry', href: 'https://regulator.asqa.gov.au' },
        { name: 'Australian Aged Care Quality Standards', href: 'https://www.aacqa.gov.au/providers/aged-care-quality-standards' },
        { name: 'National Disability Insurance Scheme', href: 'https://www.ndis.gov.au' },
      ],
    },
    {
      title: 'Question Categories',
      links: [
        { name: 'Course Basics', href: '/questions/course-basics-enrollment' },
        { name: 'Study Options', href: '/questions/study-options-duration' },
        { name: 'Licensing', href: '/questions/state-licensing-requirements' },
        { name: 'Career', href: '/questions/career-employment' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <AppLogo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Your independent guide to the CHC43015 Certificate IV in Ageing Support—across Australia.
            </p>
             <Button variant="outline" size="sm" className="w-full mt-6 rounded-full max-w-xs" asChild>
                <a href="https://firebase.google.com/docs/app-hosting" target="_blank" rel="noopener noreferrer">
                    Powered by Firebase <ExternalLink className="ml-2 h-3 w-3" />
                </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-semibold text-foreground">{section.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition hover:text-primary hover:underline"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} CHC43015 Q&A. All rights reserved. Information provided is general guidance only.
          </p>
        </div>
      </div>
    </footer>
  );
}
