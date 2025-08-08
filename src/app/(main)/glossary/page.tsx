'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { BookOpen, Search, Info, MapPin, Building, User, Award, FileText, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

// Metadata handled by parent layout or separate metadata file

interface GlossaryTerm {
  term: string;
  definition: string;
  states: string[];
  category: 'licensing' | 'roles' | 'compliance' | 'education' | 'processes';
  relatedLinks?: { text: string; href: string }[];
  synonyms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Agent's Representative",
    definition: "An entry-level real estate role in Victoria that allows individuals to show properties and provide information to prospective buyers under direct supervision. Cannot negotiate prices or conduct auctions independently.",
    states: ['VIC'],
    category: 'roles',
    relatedLinks: [
      { text: "What can an Agent's Representative do?", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-is-an-agents-representative-in-victoria-and-what-can-they-do" },
      { text: "Can Agent's Reps conduct auctions?", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/can-i-conduct-an-auction-as-an-agents-representative-in-vic" }
    ]
  },
  {
    term: "ASQA",
    definition: "Australian Skills Quality Authority - the national regulator for vocational education and training (VET) including CPP41419 qualifications. Sets standards for training quality and compliance.",
    states: ['National'],
    category: 'compliance',
    relatedLinks: [
      { text: "ASQA Standard 1.4 and CPD", href: "/compliance/cpd-requirements" }
    ]
  },
  {
    term: "CBS",
    definition: "Consumer and Business Services - South Australia's regulatory body for real estate licensing and compliance.",
    states: ['SA'],
    category: 'compliance',
    synonyms: ['Consumer and Business Services SA']
  },
  {
    term: "Class 1 Agent (NSW)",
    definition: "The highest level of real estate licensing in NSW, allowing independent practice, business ownership, and supervision of other agents. Requires CPP41419 plus additional experience or qualifications.",
    states: ['NSW'],
    category: 'roles',
    relatedLinks: [
      { text: "Class 1 Agent CPD Requirements", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-annual-cpd-requirements-for-a-class-1-agent-in-nsw" }
    ]
  },
  {
    term: "Class 2 Agent (NSW)",
    definition: "A supervised real estate agent license in NSW that allows most transaction activities under Class 1 agent supervision. Entry-level license for new graduates of CPP41419.",
    states: ['NSW'],
    category: 'roles',
    relatedLinks: [
      { text: "Class 2 Agent CPD Requirements", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-specific-cpd-requirements-for-a-class-2-agent-in-nsw" },
      { text: "How to upgrade from Assistant Agent to Class 2", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/how-do-i-upgrade-from-an-assistant-agent-to-a-class-2-agent-in-nsw" }
    ]
  },
  {
    term: "CPD",
    definition: "Continuing Professional Development - mandatory ongoing education requirements for licensed real estate agents to maintain their license. Hours and focus areas vary by state.",
    states: ['All'],
    category: 'compliance',
    relatedLinks: [
      { text: "Complete CPD Requirements Guide", href: "/compliance/cpd-requirements" }
    ],
    synonyms: ['Continuing Professional Development', 'Professional Development']
  },
  {
    term: "CPP41419",
    definition: "Certificate IV in Property Services (Real Estate) - the nationally recognized qualification required to obtain a real estate agent license in Australia. Covers sales, property management, and legal requirements.",
    states: ['National'],
    category: 'education',
    relatedLinks: [
      { text: "Complete CPP41419 Guide", href: "/guide" },
      { text: "Compare CPP41419 Providers", href: "/compare" }
    ],
    synonyms: ['Certificate IV in Property Services', 'Cert IV Real Estate']
  },
  {
    term: "Fair Trading NSW",
    definition: "NSW Fair Trading - the regulatory body responsible for real estate licensing and compliance in New South Wales.",
    states: ['NSW'],
    category: 'compliance'
  },
  {
    term: "Form 6 Appointment",
    definition: "A specific appointment process in Queensland for property management activities. Required for certain property management functions and rental collection activities.",
    states: ['QLD'],
    category: 'processes',
    relatedLinks: [
      { text: "What is a Form 6 Appointment?", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-is-a-form-6-appointment-in-queensland" }
    ]
  },
  {
    term: "Full Real Estate License",
    definition: "The highest level of real estate authorization allowing independent practice, business ownership, and supervision of other agents. Terminology and requirements vary by state.",
    states: ['QLD', 'VIC', 'WA', 'TAS', 'NT', 'ACT'],
    category: 'licensing',
    synonyms: ['Full License', 'Independent License', 'Principal License']
  },
  {
    term: "Material Facts",
    definition: "Significant information about a property that could influence a buyer's decision. Agents have legal obligations to disclose material facts. Requirements vary by state jurisdiction.",
    states: ['All'],
    category: 'processes',
    relatedLinks: [
      { text: "How to disclose material facts in NSW", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/how-do-i-disclose-material-facts-about-a-property-in-nsw" }
    ]
  },
  {
    term: "OFT",
    definition: "Office of Fair Trading - Queensland's regulatory body for real estate licensing and consumer protection in property transactions.",
    states: ['QLD'],
    category: 'compliance',
    synonyms: ['Office of Fair Trading QLD']
  },
  {
    term: "Real Estate License",
    definition: "Legal authorization to conduct real estate activities including sales, property management, or specialized services. Requires CPP41419 qualification and state-specific application process.",
    states: ['All'],
    category: 'licensing',
    synonyms: ['Agent License', 'Real Estate Authorization']
  },
  {
    term: "Registration Certificate",
    definition: "Entry-level authorization in Queensland and other states that allows supervised real estate activities. Holder must work under a fully licensed agent.",
    states: ['QLD', 'SA'],
    category: 'licensing',
    relatedLinks: [
      { text: "Registration vs Full License in QLD", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/whats-the-difference-between-a-registration-certificate-and-a-full-licence-in-qld" },
      { text: "Can I work in both sales and property management with registration in SA?", href: "https://answers.cpp41419.com.au/questions/state-licensing-requirements/can-i-work-in-both-sales-and-property-management-with-the-initial-registration-in-sa" }
    ],
    synonyms: ['Registration', 'Agent Registration']
  },
  {
    term: "RPL",
    definition: "Recognition of Prior Learning - assessment process that allows experienced individuals to gain CPP41419 qualification based on existing skills and knowledge rather than completing full coursework.",
    states: ['National'],
    category: 'education',
    synonyms: ['Recognition of Prior Learning', 'Skills Recognition']
  },
  {
    term: "RTO",
    definition: "Registered Training Organization - accredited institutions authorized to deliver CPP41419 and other vocational qualifications. Must meet ASQA standards for quality and compliance.",
    states: ['National'],
    category: 'education',
    relatedLinks: [
      { text: "Compare CPP41419 RTOs", href: "/compare" }
    ],
    synonyms: ['Registered Training Organization', 'Training Provider']
  },
  {
    term: "Triennial License",
    definition: "A licensing system where agents must renew their authorization every three years rather than annually. Used in Western Australia and some other jurisdictions.",
    states: ['WA'],
    category: 'licensing',
    synonyms: ['Three-year License', '3-year License']
  },
  {
    term: "VBA",
    definition: "Victorian Building Authority - regulatory body in Victoria responsible for building and some property-related licensing and compliance matters.",
    states: ['VIC'],
    category: 'compliance'
  }
];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (term.synonyms?.some(synonym => synonym.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'licensing', label: 'Licensing' },
    { value: 'roles', label: 'Agent Roles' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'education', label: 'Education' },
    { value: 'processes', label: 'Processes' }
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Glossary' }
        ]} 
      />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <BookOpen className="mr-3 h-8 w-8 text-primary" />
          Real Estate Licensing Glossary
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Understanding terminology and definitions across Australian real estate licensing
        </p>
      </header>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Search & Filter Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search terms and definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="md:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredTerms.length} of {glossaryTerms.length} terms
            </div>
          </CardContent>
        </Card>

        {filteredTerms.length > 0 ? (
          <div className="space-y-4">
            {filteredTerms.map((term, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{term.term}</span>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="capitalize">
                          {term.category.replace('-', ' ')}
                        </Badge>
                        {term.states.includes('National') ? (
                          <Badge variant="default">National</Badge>
                        ) : (
                          term.states.map(state => (
                            <Badge key={state} variant="secondary" className="text-xs">
                              {state}
                            </Badge>
                          ))
                        )}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">{term.definition}</p>
                  
                  {term.synonyms && term.synonyms.length > 0 && (
                    <div className="text-sm text-muted-foreground">
                      <strong>Also known as:</strong> {term.synonyms.join(', ')}
                    </div>
                  )}
                  
                  {term.relatedLinks && term.relatedLinks.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm flex items-center">
                        <Info className="mr-1 h-4 w-4" />
                        Related Resources
                      </h4>
                      <ul className="space-y-1">
                        {term.relatedLinks.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link 
                              href={link.href} 
                              className="text-primary hover:underline text-sm"
                              target={link.href.startsWith('http') ? '_blank' : undefined}
                              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              → {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No terms found matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="mt-4"
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <MapPin className="mr-2 h-5 w-5" />
                State-Specific Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Real estate terminology varies significantly between states. Use our state guides for detailed local requirements.
              </p>
              <div className="space-y-2">
                <Link href="/states/nsw" className="block text-primary hover:underline text-sm">NSW Terms & Definitions</Link>
                <Link href="/states/vic" className="block text-primary hover:underline text-sm">Victoria Terms & Definitions</Link>
                <Link href="/states/qld" className="block text-primary hover:underline text-sm">Queensland Terms & Definitions</Link>
                <Link href="/states/sa" className="block text-primary hover:underline text-sm">South Australia Terms & Definitions</Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <User className="mr-2 h-5 w-5" />
                Role Definitions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Understanding different agent types and their responsibilities across Australia.
              </p>
              <Link href="/career-pathways/role-definitions" className="block text-primary hover:underline text-sm">
                Complete Role Definitions Guide →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="mr-2 h-5 w-5" />
                Compliance Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                CPD requirements, ASQA standards, and regulatory compliance terminology.
              </p>
              <Link href="/compliance/cpd-requirements" className="block text-primary hover:underline text-sm">
                CPD Requirements Guide →
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Key className="mr-2 h-5 w-5" />
            Can't Find a Term?
          </h3>
          <p className="mb-4">
            If you can't find a specific term or need clarification on real estate licensing terminology, 
            ask our community for detailed explanations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/submit-question">
                Ask About Terminology
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/questions/state-licensing-requirements">
                Browse Related Questions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}