
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { CategoryCard } from '@/components/qa/CategoryCard';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Question Categories | CPP41419 Q&A',
  description: 'Browse all frequently asked questions about the CPP41419 Certificate IV in Real Estate Practice, organized by category.',
  keywords: ['all questions', 'faq index', 'master faq list', 'cpp41419 questions', 'real estate course faq'],
};

export default function AllQuestionsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'All Questions' }]} />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <BookOpen className="mr-3 h-8 w-8 text-primary" /> All Question Categories
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Select a category to see all related questions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
