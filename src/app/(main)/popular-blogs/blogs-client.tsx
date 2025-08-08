
'use client'; // This page now needs client-side state for filtering

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { ArrowRight, Rss } from 'lucide-react';
import { CategoryFilter } from '@/components/filters/CategoryFilter'; // Import the filter

interface BlogPost {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string; // e.g., 'guides', 'digital-trends'
  imageUrl: string;
  imageHint: string;
}

const BlogPostCard: React.FC<BlogPost> = ({ title, description, href, category, imageUrl, imageHint }) => (
  <Card className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
    <div className="relative h-48 w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        data-ai-hint={imageHint}
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">{category}</span>
      <Button asChild variant="outline" size="sm" className="group">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const initialBlogPosts: BlogPost[] = [
  {
    id: 'cpp-blog-1',
    title: "CPP41419 Course Overview & Requirements",
    description: "Complete guide to the Certificate IV in Property Services (Real Estate) qualification, including units, duration, and career outcomes.",
    href: "https://www.cpp41419.com.au/blog/course-overview-requirements",
    category: "guides",
    imageUrl: "https://cpp41419.com.au/images/course-overview.jpg",
    imageHint: "real estate course materials"
  },
  {
    id: 'cpp-blog-2',
    title: "State-by-State Licensing Requirements",
    description: "Understanding real estate licensing requirements across all Australian states and territories, including fees and timeframes.",
    href: "https://www.cpp41419.com.au/blog/state-licensing-requirements",
    category: "licensing",
    imageUrl: "https://cpp41419.com.au/images/licensing-map.jpg",
    imageHint: "map of Australia with licensing info"
  },
  {
    id: 'cpp-blog-3',
    title: "RTO Comparison: Finding the Right Training Provider",
    description: "Independent analysis of major RTOs offering CPP41419, comparing costs, delivery methods, support, and student outcomes.",
    href: "https://www.cpp41419.com.au/blog/rto-comparison-guide",
    category: "rto-reviews",
    imageUrl: "https://cpp41419.com.au/images/rto-comparison.jpg",
    imageHint: "comparison chart of training providers"
  },
  {
    id: 'cpp-blog-4',
    title: "Recognition of Prior Learning (RPL) Guide",
    description: "How to leverage your existing experience to fast-track your CPP41419 qualification through RPL assessment.",
    href: "https://www.cpp41419.com.au/blog/rpl-assessment-guide",
    category: "student-advice",
    imageUrl: "https://cpp41419.com.au/images/rpl-process.jpg",
    imageHint: "professional reviewing documents"
  },
  {
    id: 'cpp-blog-5',
    title: "Real Estate Career Pathways After CPP41419",
    description: "Explore diverse career opportunities in real estate, from sales agent to property management, commercial, and specialized roles.",
    href: "https://www.cpp41419.com.au/blog/career-pathways-real-estate",
    category: "student-advice",
    imageUrl: "https://cpp41419.com.au/images/career-paths.jpg",
    imageHint: "real estate professionals at work"
  },
  {
    id: 'cpp-blog-6',
    title: "Online vs Face-to-Face Learning: What Works Best",
    description: "Comparing delivery methods for CPP41419 training, including pros and cons of online, classroom, and blended learning approaches.",
    href: "https://www.cpp41419.com.au/blog/online-vs-classroom-learning",
    category: "guides",
    imageUrl: "https://cpp41419.com.au/images/learning-methods.jpg",
    imageHint: "student using laptop and classroom setting"
  },
  {
    id: 'cpp-blog-7',
    title: "Understanding Course Costs and Payment Options",
    description: "Breakdown of CPP41419 fees across different providers, hidden costs to watch for, and available payment plans and funding options.",
    href: "https://www.cpp41419.com.au/blog/course-costs-payment-options",
    category: "guides",
    imageUrl: "https://cpp41419.com.au/images/costs-payment.jpg",
    imageHint: "calculator and financial documents"
  },
  {
    id: 'cpp-blog-8',
    title: "Common Mistakes When Starting Real Estate Training",
    description: "Learn from others' experiences - avoid these common pitfalls when choosing your CPP41419 provider and planning your study.",
    href: "https://www.cpp41419.com.au/blog/common-training-mistakes",
    category: "student-advice",
    imageUrl: "https://cpp41419.com.au/images/avoid-mistakes.jpg",
    imageHint: "warning signs and checklist"
  },
  {
    id: 'cpp-blog-9',
    title: "Industry Updates: Changes Affecting Real Estate Agents",
    description: "Stay informed about recent regulatory changes, market trends, and industry developments impacting real estate professionals.",
    href: "https://www.cpp41419.com.au/blog/industry-updates-changes",
    category: "licensing",
    imageUrl: "https://cpp41419.com.au/images/industry-news.jpg",
    imageHint: "newspaper and legal documents"
  }
];

export default function PopularBlogsClientPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBlogPosts = useMemo(() => {
    return initialBlogPosts.filter(post => {
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
      const searchTermMatch = searchTerm === '' || 
                              post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              post.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchTermMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Popular Blogs' }]} />
      
      <header className="pb-6 border-b border-border">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <Rss className="mr-3 h-8 w-8 text-primary" /> Popular Real Estate Blogs & Articles
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Stay updated with the latest insights, trends, and advice from the real estate world.
        </p>
      </header>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        articles={initialBlogPosts}
      />

      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
          <Button variant="link" onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }} className="mt-4">
            Clear Filters
          </Button>
        </div>
      )}

      <Card className="mt-8 bg-muted/50 border-border rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl flex items-center font-semibold text-foreground">
            Contribute to Our Blog
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2 text-sm text-foreground/90 space-y-2">
          <p>Have an interesting article or insight you'd like to share? We are always looking for fresh perspectives on the real estate industry, especially related to CPP41419 and career development.</p>
          <Button variant="secondary" asChild>
            <Link href="https://cpp41419.com.au/contact" target="_blank" rel="noopener noreferrer">
              Submit Your Article Idea
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
