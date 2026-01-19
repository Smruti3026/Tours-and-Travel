import { motion } from "framer-motion";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredDestinations = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop",
    rating: 4.9,
    description: "Iconic white-washed buildings perched on dramatic cliffs overlooking the azure Aegean Sea.",
    price: 1299,
  },
  {
    id: "2",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    rating: 4.8,
    description: "Tropical paradise with ancient temples, lush rice terraces, and pristine beaches.",
    price: 899,
  },
  {
    id: "3",
    name: "Maldives",
    country: "South Asia",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop",
    rating: 4.9,
    description: "Crystal-clear waters, overwater villas, and vibrant coral reefs await you.",
    price: 2499,
  },
  {
    id: "4",
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop",
    rating: 4.7,
    description: "Majestic mountain peaks, charming villages, and world-class skiing adventures.",
    price: 1599,
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Explore the World
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Featured Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of breathtaking destinations that promise
            unforgettable experiences and lasting memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/destinations">
              View All Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
