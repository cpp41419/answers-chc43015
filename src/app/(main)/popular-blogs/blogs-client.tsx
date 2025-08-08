
'use client'; // This page now needs client-side state for filtering

import { useState, useMemo, useEffect } from 'react';
import './blog-animations.css';
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

// Category color mapping function
const getCategoryColors = (category: string) => {
  const colorMap: { [key: string]: { gradient: string; accent: string; text: string } } = {
    'guides': {
      gradient: 'bg-gradient-to-br from-blue-500/90 via-blue-600/80 to-indigo-700/90',
      accent: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
      text: 'text-blue-50'
    },
    'licensing': {
      gradient: 'bg-gradient-to-br from-emerald-500/90 via-green-600/80 to-teal-700/90',
      accent: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
      text: 'text-green-50'
    },
    'rto-reviews': {
      gradient: 'bg-gradient-to-br from-purple-500/90 via-violet-600/80 to-indigo-700/90',
      accent: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
      text: 'text-purple-50'
    },
    'student-advice': {
      gradient: 'bg-gradient-to-br from-amber-500/90 via-orange-600/80 to-red-600/90',
      accent: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200',
      text: 'text-amber-50'
    },
    'default': {
      gradient: 'bg-gradient-to-br from-slate-500/90 via-gray-600/80 to-zinc-700/90',
      accent: 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200',
      text: 'text-gray-50'
    }
  };
  return colorMap[category] || colorMap['default'];
};

const BlogPostCard: React.FC<BlogPost> = ({ title, description, href, category, imageUrl, imageHint }) => {
  const colors = getCategoryColors(category);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Card className="blog-card flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full group hover:scale-[1.02]">
      <div className="relative h-48 w-full overflow-hidden">
        {!imageLoaded && <div className="blog-loading absolute inset-0 z-10" />}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`blog-image object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          data-ai-hint={imageHint}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Gradient overlay */}
        <div className={`gradient-overlay absolute inset-0 ${colors.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300 ${imageLoaded ? 'z-20' : 'z-30'}`} />
        
        {/* Category badge on image */}
        <div className="absolute top-3 left-3">
          <span className={`category-badge text-xs px-3 py-1.5 rounded-full font-medium ${colors.accent} shadow-lg backdrop-blur-sm`}>
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </span>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className={`font-bold text-lg leading-tight ${colors.text} line-clamp-2 group-hover:text-white transition-colors duration-300`}>
            {title}
          </h3>
        </div>
      </div>
    <CardContent className="flex-grow p-4">
      <CardDescription className="text-sm line-clamp-3 leading-relaxed text-muted-foreground">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center p-4 pt-0">
      <Button asChild variant="outline" size="sm" className={`group hover:scale-105 transition-all duration-200 border-2 ${colors.accent.replace('bg-', 'hover:bg-').replace('text-', 'hover:text-')} hover:border-transparent`}>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
  );
};

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
      
      <header className="pb-8 border-b border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 rounded-xl -mx-4 -my-4" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-blue-500/10 rounded-full blur-2xl" />
        
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground flex items-center">
            <div className="mr-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <Rss className="h-8 w-8 text-white" />
            </div>
            <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Popular Real Estate Blogs & Articles
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Stay updated with the latest insights, trends, and expert advice from the real estate world. 
            <span className="text-primary font-medium">Discover actionable knowledge</span> to advance your property career.
          </p>
        </div>
      </header>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        articles={initialBlogPosts}
      />

      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogPostCard {...post} />
            </div>
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
