import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CategoryBar } from '@/components/CategoryBar';
import { products } from '@/data/products';
import { useNavigate } from 'react-router-dom';
import { Star, Shield, Truck, Award } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground">
            Aurevia
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-2xl mx-auto">
            Where Royalty Meets Elegance
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Discover our exclusive collection of handcrafted luxury accessories, designed for those who appreciate timeless beauty.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/shop')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-semibold"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Category Bar */}
      <CategoryBar />

      {/* Features */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Finest materials' },
              { icon: Shield, title: 'Secure Payment', desc: '100% safe checkout' },
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $200' },
              { icon: Star, title: 'Expert Craft', desc: 'Handmade with love' },
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Collections</h2>
            <p className="text-muted-foreground">Curated pieces for the discerning collector</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Queen's Choice",
                desc: 'Regal pieces fit for royalty',
                image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
              },
              {
                title: 'Crown Jewels',
                desc: 'Our most exquisite collection',
                image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600',
              },
              {
                title: 'Timeless Gold',
                desc: 'Classic elegance that endures',
                image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600',
              },
            ].map((collection, i) => (
              <div
                key={i}
                className="group relative h-80 rounded-lg overflow-hidden cursor-pointer hover-lift"
                onClick={() => navigate('/shop')}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-primary-foreground/90">{collection.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Best Sellers</h2>
            <p className="text-muted-foreground">Customer favorites that define luxury</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh designs for the modern connoisseur</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => navigate('/shop')} variant="outline" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
            <p className="text-primary-foreground/80">Trusted by thousands of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Isabella Martinez',
                text: 'Absolutely stunning pieces! The craftsmanship is impeccable and every detail shows true luxury.',
                rating: 5,
              },
              {
                name: 'Sophia Chen',
                text: 'Aurevia has become my go-to for special occasions. Their jewelry makes me feel like royalty.',
                rating: 5,
              },
              {
                name: 'Emma Thompson',
                text: 'Exceptional quality and elegant designs. Worth every penny for these timeless treasures.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-primary-foreground/10 p-6 rounded-lg">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Join Our Royal Circle</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe for exclusive offers, new arrivals, and royal updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border gold-border focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
