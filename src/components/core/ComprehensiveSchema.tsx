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
  title = 'CPP41419 Q&A - Real Estate Training Guide',
  description = 'Complete guide to CPP41419 Certificate IV in Real Estate Practice with answers, training providers, and licensing requirements.',
  breadcrumbs = [],
  canonicalUrl = 'https://answers.cpp41419.com.au'
}: SchemaProps) {
  
  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cpp41419.com.au/#organization",
    "name": "CPP41419 Real Estate Training Platform",
    "alternateName": "CPP41419",
    "url": "https://cpp41419.com.au",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cpp41419.com.au/logo.png",
      "width": 300,
      "height": 100
    },
    "description": "Australia's independent platform for CPP41419 Certificate IV in Real Estate Practice training, provider comparison, and career guidance.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": "Educational Services",
    "knowsAbout": [
      "Real Estate Training",
      "CPP41419 Certificate",
      "RTO Comparison",
      "Real Estate Licensing",
      "Property Services Education"
    ]
  };

  // Educational Program Schema
  const educationalProgramSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": "https://cpp41419.com.au/#program",
    "name": "CPP41419 Certificate IV in Property Services (Real Estate Practice)",
    "alternateName": [
      "CPP41419",
      "Certificate IV in Real Estate Practice",
      "Real Estate Agent Course"
    ],
    "description": "Nationally recognized qualification required to become a licensed real estate agent in Australia, covering property sales, leasing, trust accounts, and compliance.",
    "provider": {
      "@type": "Organization",
      "name": "Various RTOs across Australia",
      "url": "https://cpp41419.com.au/providers"
    },
    "occupationalCategory": {
      "@type": "CategoryCode",
      "codeValue": "6221",
      "codingSystem": "ANZSCO",
      "name": "Real Estate Sales Agent"
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
    "timeToComplete": "P3M",
    "typicalCreditsRequired": 11,
    "programType": "VocationalTraining",
    "educationalLevel": "Certificate IV",
    "applicationDeadline": "Open enrollment",
    "applicationStartDate": "Year-round",
    "offers": {
      "@type": "Offer",
      "category": "Educational Course",
      "priceRange": "$1500-$4000 AUD"
    },
    "hasCourse": [
      {
        "@type": "Course",
        "name": "CPPDSM4007A - Identify legal and ethical requirements of property management to complete agency work",
        "description": "Legal compliance and ethical practice in real estate"
      },
      {
        "@type": "Course", 
        "name": "CPPDSM4008A - Identify legal and ethical requirements to work with trust money",
        "description": "Trust account management and compliance"
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
      "@id": "https://answers.cpp41419.com.au/#website",
      "name": "CPP41419 Answers",
      "url": "https://answers.cpp41419.com.au",
      "publisher": {
        "@id": "https://cpp41419.com.au/#organization"
      }
    },
    "about": {
      "@id": "https://cpp41419.com.au/#program"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://answers.cpp41419.com.au/og-image.jpg"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@id": "https://cpp41419.com.au/#organization"
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
            "@id": "https://cpp41419.com.au/#organization"
          }
        }
      })),
      // Add high-value SEO questions
      {
        "@type": "Question",
        "name": "How long does CPP41419 take to complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPP41419 typically takes 3-6 months to complete, depending on study mode. Full-time students can finish in 3 months, while part-time study usually takes 4-6 months. Online courses offer flexible pacing.",
          "author": {
            "@id": "https://cpp41419.com.au/#organization"
          }
        }
      },
      {
        "@type": "Question", 
        "name": "Can I get CPP41419 answers and study materials for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While some general information is available online, official CPP41419 study materials and assessment answers must be obtained through registered training organizations (RTOs). Free resources include government unit outlines and sample questions.",
          "author": {
            "@id": "https://cpp41419.com.au/#organization"
          }
        }
      },
      {
        "@type": "Question",
        "name": "What jobs can I get with CPP41419 certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPP41419 qualifies you for roles including Real Estate Sales Agent, Property Manager, Leasing Consultant, Real Estate Assistant, Buyers Agent, and Commercial Property Specialist. Average salary ranges from $45,000-$80,000+ depending on experience and location.",
          "author": {
            "@id": "https://cpp41419.com.au/#organization"
          }
        }
      },
      {
        "@type": "Question",
        "name": "How much does CPP41419 course cost in Australia?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "CPP41419 course fees range from $1,500 to $4,000 across different RTOs. Factors affecting cost include delivery method (online vs face-to-face), support level, and included materials. Government funding may be available for eligible students.",
          "author": {
            "@id": "https://cpp41419.com.au/#organization"
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