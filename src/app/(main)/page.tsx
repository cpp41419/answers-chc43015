
import type { Metadata } from 'next';
import HomeClient from './home.client';

export const metadata: Metadata = {
  title: 'ANSWERS - Your Independent Aged Care Course Authority',
  description: "Australia's only independent platform protecting students from poor training decisions. Get matched with verified providers through our anonymous evaluation system.",
  keywords: ['aged care course', 'chc43015', 'rto comparison', 'student protection', 'find a course'],
};

export default function HomePage() {
  return <HomeClient />;
}
