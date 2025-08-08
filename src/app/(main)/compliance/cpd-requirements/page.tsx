import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { CheckCircle, Info, AlertTriangle, Clock, Award, BookOpen, FileCheck, Users, MapPin, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'CPD Requirements for Real Estate Agents | Continuing Professional Development Guide',
  description: 'Complete guide to Continuing Professional Development (CPD) requirements for real estate agents across Australia. Learn about state-specific CPD obligations, ASQA standards, and compliance tips.',
  keywords: ['CPD requirements real estate', 'continuing professional development', 'real estate agent CPD', 'ASQA CPD standards', 'real estate license renewal', 'professional development hours', 'CPD compliance audit'],
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

export default function CPDRequirementsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Compliance', href: '/compliance' },
          { label: 'CPD Requirements' }
        ]} 
      />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <Award className="mr-3 h-8 w-8 text-primary" />
          CPD Requirements for Real Estate Agents
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Complete guide to Continuing Professional Development obligations across Australia
        </p>
      </header>

      <div className="grid gap-8">
        <SpecialBlock type="important" title="ASQA Standards Alignment">
          CPD requirements for real estate agents align with ASQA Standard 1.4 - Training and Assessment Strategy. 
          This ensures ongoing competency maintenance and industry knowledge updates post-qualification.
          <br/><br/>
          <Link href="/compliance/asqa-standard-1-4" className="text-primary hover:underline font-medium">
            Learn more about ASQA Standard 1.4 →
          </Link>
        </SpecialBlock>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              State-by-State CPD Matrix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-semibold">State</th>
                    <th className="text-left py-3 px-4 font-semibold">Annual Hours</th>
                    <th className="text-left py-3 px-4 font-semibold">License Class</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Focus Areas</th>
                    <th className="text-left py-3 px-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">NSW</td>
                    <td className="py-3 px-4">12 hours</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="mr-1">Class 1</Badge>
                      <Badge variant="outline">Class 2</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">Consumer protection, legislation updates</td>
                    <td className="py-3 px-4">
                      <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-annual-cpd-requirements-for-a-class-1-agent-in-nsw" 
                            className="text-primary hover:underline text-sm">
                        Class 1 Details
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">VIC</td>
                    <td className="py-3 px-4">10 hours</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="mr-1">Agent's Rep</Badge>
                      <Badge variant="outline">Full License</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">Ethics, consumer affairs, industry practice</td>
                    <td className="py-3 px-4">
                      <Link href="/states/vic" className="text-primary hover:underline text-sm">
                        VIC Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">QLD</td>
                    <td className="py-3 px-4">10 hours</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="mr-1">Registration</Badge>
                      <Badge variant="outline">License</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">Property law, industry standards</td>
                    <td className="py-3 px-4">
                      <Link href="/states/qld" className="text-primary hover:underline text-sm">
                        QLD Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">SA</td>
                    <td className="py-3 px-4">12 hours</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="mr-1">Sales</Badge>
                      <Badge variant="outline">Prop Mgmt</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">Consumer protection, tenancy law</td>
                    <td className="py-3 px-4">
                      <Link href="/states/sa" className="text-primary hover:underline text-sm">
                        SA Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">WA</td>
                    <td className="py-3 px-4">15 hours</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="mr-1">Sales Rep</Badge>
                      <Badge variant="outline">Triennial</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">Consumer protection, industry updates</td>
                    <td className="py-3 px-4">
                      <Link href="/states/wa" className="text-primary hover:underline text-sm">
                        WA Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">TAS</td>
                    <td className="py-3 px-4">10 hours</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">All Licenses</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">Property law, consumer protection</td>
                    <td className="py-3 px-4">
                      <Link href="/states/tas" className="text-primary hover:underline text-sm">
                        TAS Guide
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Core CPD Focus Areas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Legislative Updates</h4>
                  <p className="text-sm">Changes to property law, consumer protection regulations, and industry standards.</p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Ethics & Consumer Protection</h4>
                  <p className="text-sm">Professional conduct standards, consumer rights, and dispute resolution processes.</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Industry Best Practices</h4>
                  <p className="text-sm">Market trends, technology adoption, and professional development strategies.</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Specialization Areas</h4>
                  <p className="text-sm">Commercial property, property management, auction conduct, or business broking.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                CPD Planning & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SpecialBlock type="tip" title="Annual Planning Strategy">
                Plan your CPD activities at the beginning of each license period. Mix different formats 
                (online courses, seminars, conferences) to maximize learning outcomes.
              </SpecialBlock>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Compliance Checklist</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Complete required hours before renewal deadline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Keep certificates and attendance records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Ensure activities are industry-relevant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Submit CPD declaration with license renewal</span>
                  </li>
                </ul>
              </div>

              <SpecialBlock type="warning" title="Audit Preparedness">
                Regulatory bodies may audit your CPD compliance. Maintain detailed records including 
                dates, providers, topics covered, and learning outcomes achieved.
              </SpecialBlock>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Acceptable CPD Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Formal Learning</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Industry conferences and seminars</li>
                  <li>• Professional development workshops</li>
                  <li>• Online training courses</li>
                  <li>• University/TAFE short courses</li>
                  <li>• Professional association events</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-3">Self-Directed Learning</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Industry publication reading</li>
                  <li>• Research and case studies</li>
                  <li>• Online webinars</li>
                  <li>• Podcast learning programs</li>
                  <li>• Peer discussion groups</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-3">Professional Activities</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Mentoring junior agents</li>
                  <li>• Speaking at industry events</li>
                  <li>• Committee participation</li>
                  <li>• Industry volunteer work</li>
                  <li>• Writing industry articles</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileCheck className="mr-2 h-5 w-5" />
              State-Specific Deep Dives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-4">
              Each state has unique CPD requirements and focus areas. Click below for detailed state-specific guidance:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">NSW CPD Requirements</h4>
                  <p className="text-sm text-muted-foreground mb-3">Class 1 and Class 2 agent obligations</p>
                  <div className="space-y-2">
                    <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-annual-cpd-requirements-for-a-class-1-agent-in-nsw" 
                          className="block text-primary hover:underline text-sm">
                      → Class 1 Agent CPD Details
                    </Link>
                    <Link href="https://answers.cpp41419.com.au/questions/state-licensing-requirements/what-are-the-specific-cpd-requirements-for-a-class-2-agent-in-nsw" 
                          className="block text-primary hover:underline text-sm">
                      → Class 2 Agent CPD Details
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Victoria CPD Requirements</h4>
                  <p className="text-sm text-muted-foreground mb-3">Agent's representative and full license</p>
                  <Link href="/states/vic" className="block text-primary hover:underline text-sm">
                    → Victoria Licensing Guide
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">SA CPD Requirements</h4>
                  <p className="text-sm text-muted-foreground mb-3">Sales and property management focus</p>
                  <Link href="/states/sa" className="block text-primary hover:underline text-sm">
                    → South Australia Guide
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Need CPD Guidance?
          </h3>
          <p className="mb-4">
            Get personalized advice on meeting your CPD obligations and maintaining professional competency.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/submit-question">
                Ask About CPD Requirements
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/questions/state-licensing-requirements">
                Browse State-Specific Questions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}