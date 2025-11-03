import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { CheckCircle, Info, AlertTriangle, TrendingUp, Building, DollarSign, Users, Target, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Multi-Discipline Real Estate Careers | Sales + Property Management Opportunities',
  description: 'Discover career opportunities combining sales and property management in real estate. Learn about dual-role licensing, income diversification, and multi-discipline career pathways across Australia.',
  keywords: ['dual role real estate', 'sales and property management', 'multi discipline real estate career', 'combined real estate roles', 'property management and sales license', 'real estate career diversification'],
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

export default function MultiDisciplineCareersPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Career Pathways', href: '/career-pathways' },
          { label: 'Multi-Discipline Careers' }
        ]} 
      />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <TrendingUp className="mr-3 h-8 w-8 text-primary" />
          Multi-Discipline Real Estate Careers
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Maximize your career potential by combining sales and property management expertise
        </p>
      </header>

      <div className="grid gap-8">
        <SpecialBlock type="success" title="CPP41419 Covers Both Disciplines">
          The CPP41419 Certificate IV in Property Services (Real Estate) includes units covering both sales and property management. 
          This means graduates can pursue careers in either or both disciplines, depending on state licensing requirements.
        </SpecialBlock>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Income Diversification Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Multiple Revenue Streams</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Sales Commissions:</strong> 2-3% of property sale values</li>
                  <li><strong>Property Management:</strong> 7-10% ongoing management fees</li>
                  <li><strong>Leasing Fees:</strong> 1-2 weeks rent for new tenancies</li>
                  <li><strong>Maintenance Coordination:</strong> Additional service fees</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Market Stability</h4>
                <p className="text-sm">
                  Property management provides consistent monthly income while sales offer higher 
                  but more variable commissions. Combined, they create a more stable income profile.
                </p>
              </div>

              <SpecialBlock type="tip" title="Cash Flow Balance">
                Property management fees provide steady cash flow during slower sales periods, 
                while successful sales boost overall annual income significantly.
              </SpecialBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Career Advantages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Broader Client Relationships</h4>
                    <p className="text-sm text-muted-foreground">Build deeper, longer-term client relationships through ongoing property management services</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Market Knowledge</h4>
                    <p className="text-sm text-muted-foreground">Property management provides ongoing market insights that enhance sales performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Career Flexibility</h4>
                    <p className="text-sm text-muted-foreground">Ability to focus on either discipline based on market conditions or personal preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Business Opportunities</h4>
                    <p className="text-sm text-muted-foreground">Multi-discipline expertise opens doors to agency ownership and team leadership</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              State-by-State Dual-Role Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-semibold">State</th>
                    <th className="text-left py-3 px-4 font-semibold">Dual Role Allowed</th>
                    <th className="text-left py-3 px-4 font-semibold">License Requirements</th>
                    <th className="text-left py-3 px-4 font-semibold">Notes</th>
                    <th className="text-left py-3 px-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">NSW</td>
                    <td className="py-3 px-4">
                      <Badge variant="default" className="bg-green-600">Yes</Badge>
                    </td>
                    <td className="py-3 px-4">Single license covers both</td>
                    <td className="py-3 px-4 text-sm">Most common dual-role state</td>
                    <td className="py-3 px-4">
                      <Link href="/states/nsw" className="text-primary hover:underline text-sm">
                        NSW Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">VIC</td>
                    <td className="py-3 px-4">
                      <Badge variant="default" className="bg-green-600">Yes</Badge>
                    </td>
                    <td className="py-3 px-4">Separate endorsements available</td>
                    <td className="py-3 px-4 text-sm">Can add property management to sales license</td>
                    <td className="py-3 px-4">
                      <Link href="/states/vic" className="text-primary hover:underline text-sm">
                        VIC Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">QLD</td>
                    <td className="py-3 px-4">
                      <Badge variant="default" className="bg-green-600">Yes</Badge>
                    </td>
                    <td className="py-3 px-4">Single license with appropriate qualifications</td>
                    <td className="py-3 px-4 text-sm">Form 6 appointments may be required</td>
                    <td className="py-3 px-4">
                      <Link href="/states/qld" className="text-primary hover:underline text-sm">
                        QLD Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">SA</td>
                    <td className="py-3 px-4">
                      <Badge variant="default" className="bg-green-600">Yes</Badge>
                    </td>
                    <td className="py-3 px-4">Single license covers both disciplines</td>
                    <td className="py-3 px-4 text-sm">Excellent dual-role opportunities</td>
                    <td className="py-3 px-4">
                      <Link href="https://answers.cpp41419.com/questions/state-licensing-requirements/can-i-work-in-both-sales-and-property-management-with-the-initial-registration-in-sa" 
                            className="text-primary hover:underline text-sm">
                        SA Details
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">WA</td>
                    <td className="py-3 px-4">
                      <Badge variant="secondary">Limited</Badge>
                    </td>
                    <td className="py-3 px-4">Separate licenses may be required</td>
                    <td className="py-3 px-4 text-sm">Check specific regulatory requirements</td>
                    <td className="py-3 px-4">
                      <Link href="/states/wa" className="text-primary hover:underline text-sm">
                        WA Guide
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">TAS</td>
                    <td className="py-3 px-4">
                      <Badge variant="default" className="bg-green-600">Yes</Badge>
                    </td>
                    <td className="py-3 px-4">Single license with endorsements</td>
                    <td className="py-3 px-4 text-sm">Small market, dual roles common</td>
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
                <Briefcase className="mr-2 h-5 w-5" />
                Career Development Pathways
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Entry Level (0-2 years)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Focus on one discipline initially</li>
                    <li>Build foundational skills and client base</li>
                    <li>Learn systems and processes</li>
                    <li>Develop market knowledge</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-950/20 dark:to-yellow-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Experienced (2-5 years)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Expand into second discipline</li>
                    <li>Cross-referral opportunities</li>
                    <li>Build comprehensive service offering</li>
                    <li>Develop specialized expertise</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Senior (5+ years)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Team leadership and mentoring</li>
                    <li>Business ownership opportunities</li>
                    <li>Strategic market positioning</li>
                    <li>Industry thought leadership</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Skills & Competencies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Sales-Focused Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Negotiation</Badge>
                    <Badge variant="outline">Market Analysis</Badge>
                    <Badge variant="outline">Client Prospecting</Badge>
                    <Badge variant="outline">Presentation Skills</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">Property Management Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Tenancy Law</Badge>
                    <Badge variant="outline">Maintenance Coordination</Badge>
                    <Badge variant="outline">Financial Management</Badge>
                    <Badge variant="outline">Conflict Resolution</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">Cross-Discipline Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Communication</Badge>
                    <Badge variant="outline">Time Management</Badge>
                    <Badge variant="outline">Technology Proficiency</Badge>
                    <Badge variant="outline">Relationship Building</Badge>
                  </div>
                </div>

                <SpecialBlock type="tip" title="Skill Development Strategy">
                  Focus on developing strong foundational skills in your primary area before 
                  expanding. Cross-discipline competency develops naturally through experience.
                </SpecialBlock>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Business Model Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Full-Service Agency</h4>
                <p className="text-sm mb-3">
                  Offer both sales and property management services under one roof. 
                  Maximizes client lifetime value and referral opportunities.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Higher client retention</li>
                  <li>Cross-service referrals</li>
                  <li>Diversified income streams</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Specialized Teams</h4>
                <p className="text-sm mb-3">
                  Build separate but coordinated teams for sales and property management 
                  while maintaining oversight and referral systems.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Specialized expertise</li>
                  <li>Scalable operations</li>
                  <li>Quality focus</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Personal Brand</h4>
                <p className="text-sm mb-3">
                  Develop a personal brand around multi-discipline expertise, 
                  becoming the go-to agent for comprehensive property services.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Market differentiation</li>
                  <li>Premium positioning</li>
                  <li>Thought leadership</li>
                </ul>
              </div>
            </div>

            <SpecialBlock type="success" title="Success Strategies">
              The most successful multi-discipline agents focus on systems, technology, and team building 
              to manage increased complexity while maintaining service quality across both areas.
            </SpecialBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-5 w-5" />
              Getting Started in Multi-Discipline Careers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Step 1: Complete CPP41419</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Ensure your CPP41419 includes both sales and property management units. 
                  Most standard courses cover both, but verify with your RTO.
                </p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/compare">
                    Compare CPP41419 Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Step 2: Choose Your Entry Point</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Start with either sales or property management, then expand once you've 
                  built confidence and systems in your primary area.
                </p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/career-pathways/role-definitions">
                    Explore Role Definitions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border-t pt-4 mt-6">
              <h4 className="font-semibold mb-3">State-Specific Considerations</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                <Link href="/states/sa" 
                      className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h5 className="font-medium text-sm">South Australia</h5>
                  <p className="text-xs text-muted-foreground">Excellent dual-role opportunities</p>
                </Link>
                <Link href="/states/nsw" 
                      className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h5 className="font-medium text-sm">New South Wales</h5>
                  <p className="text-xs text-muted-foreground">Single license covers both</p>
                </Link>
                <Link href="/states/vic" 
                      className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h5 className="font-medium text-sm">Victoria</h5>
                  <p className="text-xs text-muted-foreground">Separate endorsements available</p>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Ready to Diversify Your Real Estate Career?
          </h3>
          <p className="mb-4">
            Get personalized guidance on building a multi-discipline real estate career that 
            maximizes income potential and provides career stability.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/submit-question">
                Ask About Multi-Discipline Careers
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/questions/state-licensing-requirements">
                Browse State Requirements
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/career-pathways">
                Explore All Career Pathways
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}