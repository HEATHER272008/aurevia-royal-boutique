import { Crown, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Isabella Rousseau',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Alexander Chen',
      role: 'Master Jeweler',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Sophia Martinez',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      name: 'James Thompson',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    },
  ];

  const values = [
    {
      icon: Crown,
      title: 'Royal Heritage',
      description: 'Drawing inspiration from centuries of royal elegance and timeless design.',
    },
    {
      icon: Award,
      title: 'Master Craftsmanship',
      description: 'Every piece is handcrafted by skilled artisans with decades of experience.',
    },
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We pour our hearts into creating jewelry that tells your unique story.',
    },
    {
      icon: Users,
      title: 'Client Excellence',
      description: 'Your satisfaction and delight are at the heart of everything we do.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container text-center max-w-3xl">
          <h1 className="text-5xl font-display font-bold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Aurevia was born from a vision to create jewelry that embodies the grace, elegance, and timeless beauty of royalty. Each piece in our collection is a testament to exceptional craftsmanship and artistic passion.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Where Royalty Meets Elegance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Aurevia, we believe that luxury should be both attainable and extraordinary. Our mission is to craft jewelry that makes every wearer feel like royalty, celebrating life's precious moments with pieces that last generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2018, we've grown from a small atelier to a renowned name in luxury accessories, serving discerning clients who appreciate the finer things in life.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden gold-border">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-xl">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">The passionate artisans behind Aurevia</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-lg gold-border aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-4">Have Questions?</h2>
          <p className="text-primary-foreground/80 mb-8">
            We'd love to hear from you. Reach out to our team for any inquiries about our collections, custom designs, or collaboration opportunities.
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
