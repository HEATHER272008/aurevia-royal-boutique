import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const CategoryBar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      navigate('/shop');
    } else {
      navigate(`/shop?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <div className="border-y bg-card/50">
      <div className="container py-4">
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => handleCategoryClick(category)}
              className="whitespace-nowrap hover:text-accent transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
