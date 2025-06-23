import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { questions } from '@/data/questions';
import { QuestionDisplay } from '@/components/qa/QuestionDisplay';
import { QuestionListItem } from '@/components/qa/QuestionListItem';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { FaqSchema } from '@/components/core/FaqSchema';

interface QuestionPageProps {
  params: {
    categorySlug: string;
    questionId: string;
  };
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const category = questions.find((cat) => cat.slug === params.categorySlug);

  if (!category) {
    notFound();
  }

  const question = category.questions.find(
    (q) => q.id === params.questionId
  );

  if (!question) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Questions', href: '/questions' },
    { name: category.name, href: `/questions/${category.slug}` },
    { name: question.title, href: `/questions/${category.slug}/${question.id}` },
  ];

  // Find previous and next questions within the same category
  const questionIndex = category.questions.findIndex(
    (q) => q.id === params.questionId
  );
  const previousQuestion = questionIndex > 0 ? category.questions[questionIndex - 1] : null;
  const nextQuestion = questionIndex < category.questions.length - 1 ? category.questions[questionIndex + 1] : null;


  return (
    <div className="container mx-auto py-8 p-4"> {/* Added p-4 here */}
      <Breadcrumbs items={breadcrumbs} />

      <FaqSchema question={question.title} answer={question.answer} />

      <h1 className="text-3xl font-bold mb-4">{question.title}</h1>

      <QuestionDisplay answer={question.answer} />

      <div className="mt-8 flex justify-between">
        {previousQuestion ? (
          <Button asChild>
            <Link href={`/questions/${category.slug}/${previousQuestion.id}`}>
              Previous Question
            </Link>
          </Button>
        ) : (
          <div></div> // Empty div to maintain spacing if no previous button
        )}
        {nextQuestion ? (
          <Button asChild>
            <Link href={`/questions/${category.slug}/${nextQuestion.id}`}>
              Next Question
            </Link>
          </Button>
        ) : (
          <div></div> // Empty div to maintain spacing if no next button
        )}
      </div>

      {/* You might want to add related questions or other content here */}
      {/* Example of listing other questions in the same category: */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">More from {category.name}</h2>
        <ul>
          {category.questions.map((q) => (
            <li key={q.id}>
              <QuestionListItem question={q} categorySlug={category.slug} />
            </li>
          ))}
        </ul>
      </div> */}
    </div>

    {/* Related Questions Section */} {/* Fixed syntax error by removing curly braces */}
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Related Questions</h2>
      {/* Container for related questions tiles - using a simple flex layout for now */}
      <div className="flex flex-wrap -mx-2">
        {/* TODO: Add logic here to fetch and map related questions */}
        {/*
          Example of a related question tile structure:
          <Link href={`/questions/${relatedCategory.slug}/${relatedQuestion.id}`} className="block w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="border p-4 rounded-md hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{relatedQuestion.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{relatedQuestion.answer}</p> // Optional: Show snippet of answer
            </div>
          </Link>
        */}
      </div>
    </section>
  );
}

// Optional: Add generateStaticParams to pre-render pages
export async function generateStaticParams() {
  const paths = questions.flatMap(category =>
    category.questions.map(question => ({
      categorySlug: category.slug,
      questionId: question.id,
    }))
  );

  return paths;
}