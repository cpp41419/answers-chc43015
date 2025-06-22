'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react'; // Using Rocket as per HTML example

export function Fab() {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-40 animate-bounce hover:animate-none"
      aria-label="Start Assessment"
    >
      <Link href="/quiz">
        <Rocket className="h-7 w-7" />
      </Link>
    </Button>
  );
}
