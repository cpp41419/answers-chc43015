import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { CheckCircle, Info, AlertTriangle, Clock, DollarSign, Award, Building, UserCheck, GraduationCap, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LicensingFlowchart from '@/components/flowchart/LicensingFlowchart';

export const metadata: Metadata = {
  title: 'South Australia Real Estate Licensing Requirements | CPP41419 Guide',
  description: 'Complete guide to becoming a real estate agent in South Australia. Learn about CPP41419 requirements, licensing pathways, dual-role permissions for sales and property management.',
  keywords: ['South Australia real estate license', 'SA real estate agent', 'CPP41419 South Australia', 'real estate registration SA', 'property management SA', 'dual role real estate SA', 'CBS SA licensing'],
};

interface SpecialBlockProps {
  type: 'info' | 'tip' | 'warning' | 'important' | 'check' | 'note' | 'success';
  title?: string;
  children: React.ReactNode;
}

const SpecialBlock: React.FC<SpecialBlockProps> = ({ type, title, children }) => {
  let IconComponent: React.ElementType = Info;
  let alertVariant: "default" | "destructive" = "default";
  let effectiveTitle = title || type.charAt(0).toUpperCase() + type.slice(1);

  switch (type) {
    case 'info': IconComponent = Info; break;
    case 'tip': IconComponent = CheckCircle; break; 
    case 'warning': IconComponent = AlertTriangle; break; 
    case 'important': IconComponent = AlertTriangle; break;
    case 'check': IconComponent = CheckCircle; break;
    case 'note': IconComponent = Info; break;
    case 'success': IconComponent = CheckCircle; break;
    default: IconComponent = Info;
  }

  return (
    <Alert variant={alertVariant} className="my-4">
      <IconComponent className="h-4 w-4" />
      <AlertTitle>{effectiveTitle}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default function SouthAustraliaLicensingPage() {
  const saLicensingSteps = [
    {
      id: 'education',
      title: 'Complete CPP41419',
      description: 'Enroll in and complete the Certificate IV in Property Services (Real Estate) from a registered training organization.',
      duration: '6-12 months',
      requirements: [
        'Choose an ASQA-registered RTO',
        'Complete 12 core units covering sales and property management',
        'Pass all assessments and practical components',
        'Receive your qualification certificate'
      ],
      nextSteps: ['application']
    },
    {
      id: 'application',
      title: 'Apply for License',
      description: 'Submit your licensing application to Consumer and Business Services (CBS) with required documentation.',
      duration: '4-6 weeks processing',
      requirements: [
        'Complete CBS licensing application form',
        'Provide CPP41419 qualification certificate',
        'Submit police clearance certificate',
        'Pay application fee (~$200)',
        'Complete fit and proper person assessment'
      ],
      nextSteps: ['license']
    },
    {
      id: 'license',
      title: 'Receive License & Start Career',
      description: 'Receive your real estate license and begin your career in sales and/or property management.',
      duration: 'Immediate upon approval',
      requirements: [
        'License approved by CBS',
        'Find employment or start your own agency',
        'Complete annual CPD requirements (12 hours)',
        'Maintain professional standards and compliance'
      ],
      nextSteps: []
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'States', href: '/states' },
          { label: 'South Australia' }
        ]} 
      />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <Building className="mr-3 h-8 w-8 text-primary" />
          South Australia Real Estate Licensing
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Complete guide to real estate licensing requirements and pathways in South Australia
        </p>
      </header>

      <div className="grid gap-8">
        <SpecialBlock type="important" title="Key Regulatory Body">
          Real estate activities in South Australia are regulated by Consumer and Business Services (CBS). 
          All agents must be licensed through CBS and comply with the Land and Business (Sale and Conveyancing) Act 1994.
        </SpecialBlock>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" />
              CPP41419 Requirements in SA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              To become a licensed real estate agent in South Australia, you must complete the 
              CPP41419 Certificate IV in Property Services (Real Estate) from a registered training organization (RTO).
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Course Duration & Format</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Duration: 6-12 months depending on study mode</li>
                <li>Available: Online, face-to-face, or blended learning</li>
                <li>Assessment: Written assignments, practical assessments, and examinations</li>
                <li>Units: 12 core units covering sales, property management, and legal requirements</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="mr-2 h-5 w-5" />
              Licensing Pathways in SA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Sales Agent License</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>CPP41419 Certificate IV completion</li>
                    <li>Police clearance certificate</li>
                    <li>Fit and proper person assessment</li>
                    <li>Application fee: ~$200</li>
                  </ul>
                  <p><strong>Permissions:</strong> Residential and commercial sales, auctions, business broking</p>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Property Management License</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>CPP41419 Certificate IV completion</li>
                    <li>Police clearance certificate</li>
                    <li>Fit and proper person assessment</li>
                    <li>Application fee: ~$200</li>
                  </ul>
                  <p><strong>Permissions:</strong> Residential and commercial property management, rental inspections</p>
                </div>
              </div>
            </div>

            <SpecialBlock type="success" title="Dual-Role Advantage in SA">
              <strong>Yes, you can work in both sales and property management</strong> with your initial license in South Australia. 
              The CPP41419 qualification covers both areas, and CBS allows agents to operate in multiple disciplines 
              under a single license. This provides career flexibility and increased income opportunities.
              <br/><br/>
              <Link href="https://answers.cpp41419.com/questions/state-licensing-requirements/can-i-work-in-both-sales-and-property-management-with-the-initial-registration-in-sa" 
                    className="text-primary hover:underline font-medium">
                Learn more about dual-role permissions in SA →
              </Link>
            </SpecialBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Interactive Licensing Pathway
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LicensingFlowchart 
              state="South Australia" 
              steps={saLicensingSteps}
              title="SA Real Estate Licensing Journey"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Continuing Professional Development (CPD)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Annual CPD Requirements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-primary mb-2">Real Estate Sales Agents</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>12 hours per year minimum</li>
                    <li>Must include consumer protection topics</li>
                    <li>Professional development activities</li>
                    <li>Due: Before license renewal date</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">Property Managers</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>12 hours per year minimum</li>
                    <li>Focus on tenancy law updates</li>
                    <li>Property management practices</li>
                    <li>Due: Before license renewal date</li>
                  </ul>
                </div>
              </div>
            </div>

            <SpecialBlock type="tip" title="CPD Compliance Tips">
              Keep detailed records of all CPD activities, including certificates and attendance records. 
              CBS may audit your CPD compliance during license renewals. Online courses, industry seminars, 
              and professional association events all count toward your annual requirement.
            </SpecialBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Costs & Fees in SA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">License Type</th>
                    <th className="text-left py-2 pr-4">Application Fee</th>
                    <th className="text-left py-2 pr-4">Annual Renewal</th>
                    <th className="text-left py-2">Additional Costs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">Sales Agent</td>
                    <td className="py-2 pr-4">~$200</td>
                    <td className="py-2 pr-4">~$150</td>
                    <td className="py-2">Police check (~$50)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">Property Manager</td>
                    <td className="py-2 pr-4">~$200</td>
                    <td className="py-2 pr-4">~$150</td>
                    <td className="py-2">Police check (~$50)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <SpecialBlock type="note" title="Course Investment">
              CPP41419 course fees in SA typically range from $1,500-$4,000 depending on the RTO and delivery method. 
              Government funding may be available for eligible students through Skills SA.
            </SpecialBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Career Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              South Australia's real estate market offers diverse career opportunities across metropolitan Adelaide 
              and regional areas including the Barossa Valley, Adelaide Hills, and Riverland regions.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Residential Sales</h4>
                <p className="text-sm">Average commission: 2-3% of sale price. Strong market in Adelaide's growth corridors.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Property Management</h4>
                <p className="text-sm">Management fees: 7-10% of rental income. Growing rental market across SA.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Commercial Real Estate</h4>
                <p className="text-sm">Industrial and retail opportunities. Higher transaction values and commissions.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild>
                <Link href="/career-pathways/role-definitions">
                  View Role Definitions →
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/career-pathways/multi-discipline">
                  Multi-Discipline Careers →
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Helpful Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Official Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.sa.gov.au/topics/housing/buying-and-selling-property/real-estate-agents" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      CBS Real Estate Licensing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.legislation.sa.gov.au/lz?path=/c/a/land%20and%20business%20(sale%20and%20conveyancing)%20act%201994" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      Land and Business Act 1994
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Professional Development</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.reisa.com/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      Real Estate Institute of SA (REISA)
                    </a>
                  </li>
                  <li>
                    <Link href="/compliance/cpd-requirements" className="text-primary hover:underline">
                      CPD Requirements Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Ready to Start Your SA Real Estate Career?
          </h3>
          <p className="mb-4">
            Get personalized guidance on your licensing pathway and find the right CPP41419 provider for your needs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/compare">
                Compare CPP41419 Providers
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/submit-question">
                Ask a Specific Question
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}