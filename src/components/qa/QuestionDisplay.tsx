
import type { FAQQuestion } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Tag, MapPin, Briefcase } from 'lucide-react';
import { format } from 'date-fns';
import { StarRating } from '@/components/core/StarRating';

interface QuestionDisplayProps {
  question: FAQQuestion;
}

export function QuestionDisplay({ question }: QuestionDisplayProps) {
  return (
    <Card className="shadow-xl rounded-xl"> {/* Increased shadow and rounding */}
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground">{question.question}</CardTitle>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3"> {/* Increased pt */}
          {question.last_updated && (
             <CardDescription className="flex items-center text-xs text-muted-foreground">
               <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
               Last updated: {format(new Date(question.last_updated), "MMMM d, yyyy")}
             </CardDescription>
          )}
          {question.averageRating !== undefined && question.averageRating > 0 && (
            <StarRating 
              rating={question.averageRating} 
              ratingCount={question.ratingCount}
              size={4} 
              className="text-xs sm:ml-auto" 
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/90 leading-relaxed text-base py-6">
        {question.answer.split('\n').map((paragraph, index) => (
          paragraph.trim() && <p key={index}>{paragraph}</p>
        ))}
      </CardContent>
      {(question.keywords && question.keywords.length > 0 || question.state_specific || question.provider_specific) && (
        <CardFooter className="flex flex-wrap gap-x-2 gap-y-3 pt-6 border-t">
          {question.keywords && question.keywords.map(keyword => (
            <Badge key={keyword} variant="secondary" className="text-xs rounded-full px-3 py-1"> {/* More rounded badges */}
              <Tag className="h-3 w-3 mr-1.5" /> {keyword}
            </Badge>
          ))}
          {question.state_specific && (
            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-300 rounded-full px-3 py-1">
              <MapPin className="h-3 w-3 mr-1.5" /> State: {question.state_specific}
            </Badge>
          )}
           {question.provider_specific && (
            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-300 rounded-full px-3 py-1">
               <Briefcase className="h-3 w-3 mr-1.5" /> Provider Specific
            </Badge>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
