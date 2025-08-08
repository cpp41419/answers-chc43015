import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { CheckCircle, Info, AlertTriangle, User, Users, Building, Award, Briefcase, Key, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Real Estate Role Definitions | Agent Types & Responsibilities Across Australia',
  description: 'Complete guide to real estate agent role definitions across Australia. Understand the differences between Agent Representatives, Class 1/2 Agents, Registration vs License, and role-specific permissions.',
  keywords: ['real estate agent types', 'agent representative definition', 'class 1 agent vs class 2', 'real estate registration vs license', 'agent role responsibilities', 'property management roles', 'real estate career levels'],
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

export default function RoleDefinitionsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Career Pathways', href: '/career-pathways' },
          { label: 'Role Definitions' }
        ]} 
      />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <Users className="mr-3 h-8 w-8 text-primary" />
          Real Estate Role Definitions
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Understanding agent types, licensing levels, and role-specific responsibilities across Australia
        </p>
      </header>

      <div className="grid gap-8">
        <SpecialBlock type="info" title="Role Terminology Varies by State">
          Real estate role definitions and terminology differ significantly across Australian states. 
          What's called an "Agent's Representative" in Victoria might be equivalent to a "Class 2 Agent" in NSW 
          or "Registration Certificate" in Queensland. This guide clarifies these differences.
        </SpecialBlock>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Victoria: Agent's Representative
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Entry Level</Badge>
                <Badge variant="outline">Victoria Only</Badge>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Conduct property inspections and show properties</li>
                  <li>Provide information to prospective buyers</li>
                  <li>Assist in property marketing activities</li>
                  <li>Collect applications and basic property inquiries</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Limitations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cannot negotiate prices or terms</li>
                  <li>Cannot sign contracts or agreements</li>
                  <li>Cannot conduct auctions independently</li>
                  <li>Must work under direct supervision</li>
                </ul>
              </div>

              <SpecialBlock type="note">
                <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-is-an-agents-representative-in-victoria-and-what-can-they-do" 
                      className="text-primary hover:underline font-medium">
                  Learn more about Agent's Representative roles and permissions →
                </Link>
              </SpecialBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5" />
                NSW: Class 1 vs Class 2 Agents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">Class 1 Agent</h4>
                    <Badge variant="default">Full License</Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Independent practice and business ownership</li>
                    <li>Hire and supervise other agents</li>
                    <li>Complete autonomy in all real estate activities</li>
                    <li>Can conduct auctions and negotiate independently</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>CPD:</strong> 12 hours annually | 
                    <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-annual-cpd-requirements-for-a-class-1-agent-in-nsw" 
                          className="text-primary hover:underline ml-1">
                      Details →
                    </Link>
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">Class 2 Agent</h4>
                    <Badge variant="secondary">Supervised License</Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Must work under Class 1 agent supervision</li>
                    <li>Can negotiate and conduct most transactions</li>
                    <li>Cannot operate independently or own agency</li>
                    <li>Pathway to Class 1 after experience requirements</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>CPD:</strong> 12 hours annually | 
                    <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-specific-cpd-requirements-for-a-class-2-agent-in-nsw" 
                          className="text-primary hover:underline ml-1">
                      Details →
                    </Link>
                  </p>
                </div>
              </div>

              <SpecialBlock type="tip">
                <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/how-do-i-upgrade-from-an-assistant-agent-to-a-class-2-agent-in-nsw" 
                      className="text-primary hover:underline font-medium">
                  Learn how to upgrade from Assistant Agent to Class 2 →
                </Link>
              </SpecialBlock>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-5 w-5" />
              Queensland: Registration vs Full License
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Registration Certificate</h4>
                    <Badge variant="outline">Entry Level</Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Work under licensed agent supervision</li>
                    <li>Conduct property inspections and marketing</li>
                    <li>Assist with sales and property management</li>
                    <li>Cannot operate independently</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Full Real Estate License</h4>
                    <Badge variant="default">Independent Practice</Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Independent practice and agency ownership</li>
                    <li>Supervise registered agents</li>
                    <li>Complete transaction authority</li>
                    <li>Business development and management</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <SpecialBlock type="info" title="Form 6 Appointments">
                  In Queensland, agents must understand Form 6 appointment processes for property management. 
                  This is a unique QLD requirement that affects role responsibilities.
                  <br/><br/>
                  <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-is-a-form-6-appointment-in-queensland" 
                        className="text-primary hover:underline font-medium">
                    Learn about Form 6 appointments →
                  </Link>
                </SpecialBlock>

                <SpecialBlock type="note">
                  <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/whats-the-difference-between-a-registration-certificate-and-a-full-licence-in-qld" 
                        className="text-primary hover:underline font-medium">
                    Detailed comparison: Registration vs Full License in QLD →
                  </Link>
                </SpecialBlock>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Role-Specific Activity Matrix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-semibold">Activity</th>
                    <th className="text-center py-3 px-4 font-semibold">VIC Agent's Rep</th>
                    <th className="text-center py-3 px-4 font-semibold">NSW Class 2</th>
                    <th className="text-center py-3 px-4 font-semibold">NSW Class 1</th>
                    <th className="text-center py-3 px-4 font-semibold">QLD Registration</th>
                    <th className="text-center py-3 px-4 font-semibold">QLD Full License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">Property Inspections</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">Price Negotiation</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅*</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅*</td>
                    <td className="py-3 px-4 text-center">✅</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">Conduct Auctions</td>
                    <td className="py-3 px-4 text-center">❌**</td>
                    <td className="py-3 px-4 text-center">✅*</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅*</td>
                    <td className="py-3 px-4 text-center">✅</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">Sign Contracts</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅*</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅*</td>
                    <td className="py-3 px-4 text-center">✅</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">Business Ownership</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">Supervise Others</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p>* Under supervision or with appropriate approval</p>
              <p>** Special case: 
                <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/can-i-conduct-an-auction-as-an-agents-representative-in-vic" 
                      className="text-primary hover:underline ml-1">
                  Can Agent's Representatives conduct auctions in Victoria? →
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              Property Management Roles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Property management roles often have different requirements and terminology from sales roles, 
              even within the same licensing framework.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Property Manager</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Tenant relationship management</li>
                  <li>Property inspections and maintenance coordination</li>
                  <li>Rental collection and financial management</li>
                  <li>Lease agreement administration</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Often requires same base qualification as sales (CPP41419) but with different specialization units.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Specialist Property Roles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Commercial property specialist</li>
                  <li>Business broking agent</li>
                  <li>Strata management specialist</li>
                  <li>Rural and livestock agent</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  May require additional qualifications beyond CPP41419 depending on specialization.
                </p>
              </div>
            </div>

            <SpecialBlock type="success" title="Multi-Discipline Opportunities">
              Many states allow agents to work across sales and property management with a single qualification. 
              This creates valuable career flexibility and income diversification opportunities.
              <br/><br/>
              <Link href="/career-pathways/multi-discipline" className="text-primary hover:underline font-medium">
                Explore multi-discipline career pathways →
              </Link>
            </SpecialBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              Career Progression Pathways
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Typical Career Progression</h4>
              <div className="flex items-center space-x-2 text-sm overflow-x-auto pb-2">
                <Badge variant="outline">CPP41419 Graduate</Badge>
                <span>→</span>
                <Badge variant="secondary">Entry Level Role</Badge>
                <span>→</span>
                <Badge variant="default">Supervised Agent</Badge>
                <span>→</span>
                <Badge className="bg-green-600">Independent Agent</Badge>
                <span>→</span>
                <Badge className="bg-purple-600">Agency Principal</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2">6 months - 2 years</h4>
                <p className="text-sm">Build experience, learn systems, develop client relationships</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2">2 - 5 years</h4>
                <p className="text-sm">Achieve independent practice, consider specialization areas</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2">5+ years</h4>
                <p className="text-sm">Business ownership, team leadership, industry expertise</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Need Role-Specific Guidance?
          </h3>
          <p className="mb-4">
            Get personalized advice about role requirements, career progression, and licensing pathways for your situation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/submit-question">
                Ask About Specific Roles
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/career-pathways">
                Explore Career Pathways
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/glossary">
                View Licensing Glossary
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}