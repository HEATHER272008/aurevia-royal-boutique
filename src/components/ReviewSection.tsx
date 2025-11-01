import { Star, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

interface ReviewSectionProps {
  productRating: number;
  reviewCount: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    date: 'January 15, 2025',
    comment: 'Absolutely stunning! The craftsmanship is exceptional and it arrived beautifully packaged. I wear it every day and receive compliments constantly.',
    helpful: 12,
  },
  {
    id: '2',
    author: 'Emily R.',
    rating: 5,
    date: 'January 10, 2025',
    comment: 'This piece exceeded my expectations. The quality is outstanding and it feels truly luxurious. Perfect for special occasions.',
    helpful: 8,
  },
  {
    id: '3',
    author: 'Jessica L.',
    rating: 4,
    date: 'January 5, 2025',
    comment: 'Beautiful design and great quality. Only giving 4 stars because delivery took a bit longer than expected, but the product itself is perfect.',
    helpful: 5,
  },
];

export const ReviewSection = ({ productRating, reviewCount }: ReviewSectionProps) => {
  const ratingDistribution = [
    { stars: 5, count: Math.floor(reviewCount * 0.7), percentage: 70 },
    { stars: 4, count: Math.floor(reviewCount * 0.2), percentage: 20 },
    { stars: 3, count: Math.floor(reviewCount * 0.05), percentage: 5 },
    { stars: 2, count: Math.floor(reviewCount * 0.03), percentage: 3 },
    { stars: 1, count: Math.floor(reviewCount * 0.02), percentage: 2 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold mb-6">Customer Reviews</h2>
        
        {/* Rating Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Overall Rating */}
          <Card className="gold-border">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">
                  {productRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < productRating
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on {reviewCount} reviews</p>
              </div>
            </CardContent>
          </Card>

          {/* Rating Distribution */}
          <Card className="gold-border">
            <CardContent className="p-6">
              <div className="space-y-3">
                {ratingDistribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm font-medium">{dist.stars}</span>
                      <Star className="h-4 w-4 fill-accent text-accent" />
                    </div>
                    <Progress value={dist.percentage} className="flex-1" />
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {dist.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-semibold mb-4">Recent Reviews</h3>
        {mockReviews.map((review) => (
          <Card key={review.id} className="gold-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{review.author}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{review.comment}</p>
              <Button variant="ghost" size="sm" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                Helpful ({review.helpful})
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};
