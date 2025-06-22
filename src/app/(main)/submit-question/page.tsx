
import type { Metadata } from 'next';
import SubmitClientPage from './submit-client';

export const metadata: Metadata = {
  title: 'Submit a Question | CPP41419 Q&A',
  description: 'Have a question about the CPP41419 Certificate IV in Real Estate Practice? Submit it here to get an expert answer.',
  keywords: ['submit question', 'ask a question', 'real estate faq', 'cpp41419 help'],
};

export default function SubmitQuestionPage() {
  return <SubmitClientPage />;
}
