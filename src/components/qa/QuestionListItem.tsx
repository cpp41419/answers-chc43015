
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight, FileQuestion } from 'lucide-react';
import type { FAQQuestion } from '@/types';

interface QuestionListItemProps {
  question: FAQQuestion & { slug: string };
  categorySlug: string;
}

export function QuestionListItem({ question, categorySlug }: QuestionListItemProps) {
  return (
    <Link href={`/questions/${categorySlug}/${question.slug}`} className="group block">
      <Card className="bg-card text-card-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-lg hover:shadow-lg ease-in-out">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <div className="flex items-start gap-3">
            <span className="p-2 bg-secondary text-secondary-foreground group-hover:bg-primary-foreground group-hover:text-primary rounded-md mt-1 transition-colors duration-300">
                <FileQuestion className="h-5 w-5"/>
            </span>
            <div>
              <CardTitle className="text-base font-medium leading-snug">{question.question}</CardTitle>
              {question.keywords && question.keywords.length > 0 && (
                <CardDescription className="mt-1.5 text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-300">
                  Keywords: {question.keywords.slice(0, 3).join(', ')}{question.keywords.length > 3 ? '...' : ''}
                </CardDescription>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300 shrink-0 ml-4" />
        </CardHeader>
      </Card>
    </Link>
  );
}
