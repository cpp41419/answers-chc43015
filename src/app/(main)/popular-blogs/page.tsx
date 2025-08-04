
import type { Metadata } from 'next';
import PopularBlogsClientPage from './blogs-client';

export const metadata: Metadata = {
  title: 'CPP41419 Blogs & Articles | Real Estate Training Resources',
  description: 'Comprehensive guides and articles about CPP41419 training, RTO selection, licensing requirements, and real estate career advice.',
  keywords: ['CPP41419 blog', 'real estate training', 'RTO comparison', 'licensing guide', 'career advice', 'property services'],
};

export default function PopularBlogsPage() {
  return <PopularBlogsClientPage />;
}
