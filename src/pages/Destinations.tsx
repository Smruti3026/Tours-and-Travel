import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const allDestinations = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop",
    rating: 4.9,
    description: "Iconic white-washed buildings perched on dramatic cliffs overlooking the azure Aegean Sea.",
    price: 1299,
  },
  {
    id: "2",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    rating: 4.8,
    description: "Tropical paradise with ancient temples, lush rice terraces, and pristine beaches.",
    price: 899,
  },
  {
    id: "3",
    name: "Maldives",
    country: "South Asia",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop",
    rating: 4.9,
    description: "Crystal-clear waters, overwater villas, and vibrant coral reefs await you.",
    price: 2499,
  },
  {
    id: "4",
    name: "Swiss Alps",
    country: "Switzerland",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop",
    rating: 4.7,
    description: "Majestic mountain peaks, charming villages, and world-class skiing adventures.",
    price: 1599,
  },
  {
    id: "5",
    name: "Machu Picchu",
    country: "Peru",
    region: "South America",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&auto=format&fit=crop",
    rating: 4.9,
    description: "Ancient Incan citadel set high in the Andes Mountains, a wonder of the world.",
    price: 1899,
  },
  {
    id: "6",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    rating: 4.8,
    description: "Where ancient tradition meets cutting-edge technology in perfect harmony.",
    price: 1399,
  },
  {
    id: "7",
    name: "Safari Kenya",
    country: "Kenya",
    region: "Africa",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&auto=format&fit=crop",
    rating: 4.9,
    description: "Witness the majestic wildlife of the African savanna up close.",
    price: 2199,
  },
  {
    id: "8",
    name: "Grand Canyon",
    country: "USA",
    region: "North America",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&auto=format&fit=crop",
    rating: 4.7,
    description: "One of nature's most spectacular creations carved over millions of years.",
    price: 799,
  },
];

const regions = ["All", "Asia", "Europe", "Africa", "North America", "South America"];

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredDestinations = useMemo(() => {
    return allDestinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === "All" || dest.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Explore Destinations
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover breathtaking locations around the world, from tropical paradises
              to mountain retreats.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-6 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-sm z-30">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className="shrink-0"
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No destinations found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <h3 className="text-card font-display text-xl font-semibold">
                          {destination.name}
                        </h3>
                        <div className="flex items-center gap-1 text-card/90 text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          {destination.country}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <p className="text-lg font-semibold text-primary">${destination.price}</p>
                      </div>
                      <Button variant="ocean" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
