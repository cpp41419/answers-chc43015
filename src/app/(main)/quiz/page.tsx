
import type { Metadata } from 'next';
import QuizClientPage from './quiz-client';

export const metadata: Metadata = {
  title: 'Find Your Perfect CPP41419 Provider - Quiz | CPP41419 Q&A',
  description: 'Our 2-minute quiz matches you with the best Registered Training Organisation (RTO) for your specific needs in Australia. Get started now.',
  keywords: ['rto quiz', 'find a provider', 'course matcher', 'real estate school', 'cpp41419 quiz'],
};

export default function QuizPage() {
  return <QuizClientPage />;
}
