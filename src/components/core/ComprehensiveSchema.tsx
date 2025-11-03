import type { FAQQuestion } from '@/types';

interface SchemaProps {
  questions?: FAQQuestion[];
  pageType?: 'homepage' | 'category' | 'question' | 'guide' | 'blog';
  title?: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  canonicalUrl?: string;
}

const cleanAnswerText = (text: string): string => {
  let cleanedText = text;
  cleanedText = cleanedText.replace(/```mermaid[\s\S]*?```/g, '');
  cleanedText = cleanedText.replace(/```/g, '');
  cleanedText = cleanedText.replace(/> \[![\w\s]+\]/g, '');
  cleanedText = cleanedText.replace(/\^\[\d+\]/g, '');
  cleanedText = cleanedText.replace(/[#*_`>|┌├└─→]/g, '');
  cleanedText = cleanedText.replace(/\\n/g, ' ');
  cleanedText = cleanedText.replace(/\s\s+/g, ' ').trim();
  return cleanedText;
};

export function ComprehensiveSchema({
  questions = [],
  pageType = 'homepage',
  title = 'CHC43015 Q&A - Aged Care Training Guide',
  description = 'Complete guide to CHC43015 Certificate IV in Ageing Support with answers, training providers, and career requirements.',
  breadcrumbs = [],
  canonicalUrl = 'https://answers.chc43015.com'
}: SchemaProps) {
  
  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://answers.chc43015.com/#organization",
    "name": "CHC43015 Aged Care Training Platform",
    "alternateName": "CHC43015",
    "url": "https://answers.chc43015.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://answers.chc43015.com/logo.png",
      "width": 300,
      "height": 100
    },
    "description": "Australia's independent platform for CHC43015 Certificate IV in Ageing Support training, provider comparison, and career guidance.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": "Educational Services",
    "knowsAbout": [
      "Aged Care Training",
      "CHC43015 Certificate",
      "RTO Comparison",
      "Aged Care Licensing",
      "Aged Care Services Education"
    ]
  };

  // Educational Program Schema
  const educationalProgramSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": "https://answers.chc43015.com/#program",
    "name": "CHC43015 Certificate IV in Ageing Support",
    "alternateName": [
      "CHC43015",
      "Certificate IV in Ageing Support",
      "Aged Care Worker Course"
    ],
    "description": "Nationally recognized qualification for aged care workers in Australia, covering person-centered care, dignity, rights, health and safety, and aged care standards.",
    "provider": {
      "@type": "Organization",
      "name": "Various RTOs across Australia"
    },
    "occupationalCategory": {
      "@type": "CategoryCode",
      "codeValue": "4223",
      "codingSystem": "ANZSCO",
      "name": "Aged Care Worker"
    },
    "occupationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Australian Skills Quality Authority",
        "url": "https://www.asqa.gov.au"
      }
    },
    "timeToComplete": "P6M",
    "typicalCreditsRequired": 12,
    "programType": "VocationalTraining",
    "educationalLevel": "Certificate IV",
    "applicationDeadline": "Open enrollment",
    "applicationStartDate": "Year-round",
    "offers": {
      "@type": "Offer",
      "category": "Educational Course",
      "priceRange": "$2000-$5000 AUD"
    },
    "hasCourse": [
      {
        "@type": "Course",
        "name": "CHCDFV001 - Work with people with dementia",
        "description": "Dementia care and person-centered support"
      },
      {
        "@type": "Course",
        "name": "CHCPAL001 - Provide palliative care",
        "description": "Palliative care and end-of-life support"
      }
    ]
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl,
    "url": canonicalUrl,
    "name": title,
    "description": description,
    "inLanguage": "en-AU",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://answers.chc43015.com/#website",
      "name": "CHC43015 Answers",
      "url": "https://answers.chc43015.com",
      "publisher": {
        "@id": "https://answers.chc43015.com/#organization"
      }
    },
    "about": {
      "@id": "https://answers.chc43015.com/#program"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://answers.chc43015.com/og-image.jpg"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@id": "https://answers.chc43015.com/#organization"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // FAQ Schema with high-value questions
  const faqSchema = questions.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // Include existing questions
      ...questions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": cleanAnswerText(q.answer),
          "dateCreated": q.last_updated,
          "author": {
            "@id": "https://answers.chc43015.com/#organization"
          }
        }
      })),
      // Add high-value SEO questions
      {
        "@type": "Question",
        "name": "How long does CHC43015 take to complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CHC43015 typically takes 6-12 months to complete, depending on study mode. Full-time students can finish in 6-9 months, while part-time study usually takes 9-12 months. Online courses offer flexible pacing.",
          "author": {
            "@id": "https://answers.chc43015.com/#organization"
          }
        }
      },
      {
        "@type": "Question",
        "name": "What jobs can I get with CHC43015 certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CHC43015 qualifies you for roles including Aged Care Worker, Residential Care Worker, Community Support Worker, Disability Support Worker, and Aged Care Coordinator. Average salary ranges from $48,000-$65,000+ depending on experience and location.",
          "author": {
            "@id": "https://answers.chc43015.com/#organization"
          }
        }
      },
      {
        "@type": "Question",
        "name": "How much does CHC43015 course cost in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CHC43015 course fees range from $2,000 to $5,000 across different RTOs. Factors affecting cost include delivery method (online vs face-to-face), support level, and included materials. Government funding may be available for eligible students.",
          "author": {
            "@id": "https://answers.chc43015.com/#organization"
          }
        }
      }
    ]
  } : null;

  // Combined JSON-LD Schema
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      educationalProgramSchema,
      webPageSchema,
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema, null, 0) }}
    />
  );
}