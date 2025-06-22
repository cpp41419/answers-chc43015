
import { getQuestionBySlug, getQuestionsByCategory } from '@/data/questions';
import { categories }  from '@/data/categories';
import { QuestionDisplay } from '@/components/qa/QuestionDisplay';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateFollowUpQuestions, GenerateFollowUpQuestionsInput } from '@/ai/flows/generate-follow-up-questions';
import { QuestionSchema } from '@/components/core/QuestionSchema';
import { QuestionListItem } from '@/components/qa/QuestionListItem';
import { getAllQuestions } from '@/data/questions';

// This component handles rendering for both category pages and question detail pages.
// e.g., /questions/some-category
// e.g., /questions/some-category/some-question-slug

interface DynamicQuestionPageProps {
  params: { slug: string[] };
}

export async function generateMetadata({ params }: DynamicQuestionPageProps): Promise<Metadata> {
  const { slug } = params;

  if (slug.length === 1) { // This is a Category page
    const categorySlug = slug[0];
    const category = categories.find(c => c.slug === categorySlug);
    const title = category ? `${category.name} | CPP41419 Q&A` : 'Category | CPP41419 Q&A';
    const description = category ? `Questions and answers related to ${category.name} for CPP41419.` : 'Browse questions by category.';
    return { title, description };
  }

  if (slug.length === 2) { // This is a Question page
    const questionSlug = slug[1];
    const question = getQuestionBySlug(questionSlug);
    const title = question ? `${question.question.substring(0, 60)}... | CPP41419 Q&A` : 'Question | CPP41419 Q&A';
    const description = question ? question.answer.substring(0, 150) + '...' : 'View question and answer details for CPP41419.';
    const keywords = question ? question.keywords.join(', ') : 'real estate question, cpp41419 details';
    return { title, description, keywords };
  }

  return { title: 'Not Found | CPP41419 Q&A' };
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  // Generate paths for all category pages
  for (const category of categories) {
    paths.push({
      slug: [category.slug],
    });
  }

  // Generate paths for all question pages using slugs
  const allQuestionsWithSlugs = getAllQuestions();
  for (const question of allQuestionsWithSlugs) {
    const category = categories.find(c => c.name === question.category);
    if (category) {
        paths.push({
          slug: [category.slug, question.slug],
        });
    }
  }
  
  return paths;
}

async function getFollowUpQuestions(questionText: string, answerText: string) {
  try {
    const input: GenerateFollowUpQuestionsInput = { question: questionText, answer: answerText };
    const result = await generateFollowUpQuestions(input);
    return result.followUpQuestions;
  } catch (error) {
    console.error("Error generating follow-up questions:", error);
    return [];
  }
}

export default async function DynamicQuestionPage({ params }: DynamicQuestionPageProps) {
  const { slug } = params;

  // Render Category Page Content
  if (slug.length === 1) {
    const categorySlug = slug[0];
    const category = categories.find(c => c.slug === categorySlug);
    const questionsForCategory = category ? getQuestionsByCategory(categorySlug) : [];

    if (!category) {
      return (
        <div className="text-center py-10">
          <Alert variant="destructive" className="max-w-md mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Category Not Found</AlertTitle>
            <AlertDescription>
              The category you are looking for does not exist.
            </AlertDescription>
          </Alert>
          <Button asChild className="mt-6">
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: "All Questions", href: "/questions"}, { label: category.name }]} />
        <header className="pb-4 border-b">
          <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
          {category.description && (
            <p className="mt-2 text-muted-foreground">{category.description}</p>
          )}
        </header>

        {questionsForCategory.length === 0 ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No Questions Yet</AlertTitle>
            <AlertDescription>
              There are no questions available in this category at the moment. Please check back later or explore other categories.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="space-y-4">
            {questionsForCategory.map((question) => (
              <QuestionListItem key={question.id} question={question} categorySlug={categorySlug} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Render Question Page Content
  if (slug.length === 2) {
    const categorySlug = slug[0];
    const questionSlug = slug[1];
    const question = getQuestionBySlug(questionSlug);
    const category = categories.find(c => c.slug === categorySlug);

    if (!question || !category) {
      return (
        <div className="text-center py-10">
          <Alert variant="destructive" className="max-w-md mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Content Not Found</AlertTitle>
            <AlertDescription>
              The question or category you are looking for does not exist or the URL is incorrect.
            </AlertDescription>
          </Alert>
          <Button asChild className="mt-6">
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      );
    }

    const followUpQuestionsList = await getFollowUpQuestions(question.question, question.answer);

    return (
      <>
        <QuestionSchema question={question} />
        <div className="space-y-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' }, 
              { label: "All Questions", href: "/questions"},
              { label: category.name, href: `/questions/${category.slug}` },
              { label: question.question.length > 50 ? question.question.substring(0, 50) + '...' : question.question }
            ]} 
          />
          <QuestionDisplay question={question} />

          {followUpQuestionsList && followUpQuestionsList.length > 0 && (
            <Card className="mt-8 bg-muted/50 border-border rounded-xl shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center font-semibold text-foreground">
                  <Sparkles className="h-5 w-5 mr-2.5 text-primary" />
                  Further Questions You Might Have
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-foreground/90">
                  {followUpQuestionsList.map((fq, index) => (
                    <li key={index} className="hover:text-primary transition-colors cursor-pointer">
                      {fq}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href={`/questions/${category.slug}`}>Back to {category.name}</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  // Fallback for slugs with incorrect length
  return (
    <div className="text-center py-10">
      <Alert variant="destructive" className="max-w-md mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Invalid URL</AlertTitle>
        <AlertDescription>
          The address you've entered is not valid.
        </AlertDescription>
      </Alert>
      <Button asChild className="mt-6">
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  );
}
