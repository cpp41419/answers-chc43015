
import type { Metadata } from 'next';
import PopularBlogsClientPage from './blogs-client';

export const metadata: Metadata = {
  title: 'Popular Real Estate Blogs & Articles | CPP41419 Q&A',
  description: 'Stay updated with the latest insights, trends, and advice from the real estate world.',
  keywords: ['real estate blog', 'proptech', 'agent advice', 'licensing updates', 'rto reviews'],
};

export default function PopularBlogsPage() {
  return <PopularBlogsClientPage />;
}
