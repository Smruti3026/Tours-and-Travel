import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PackageCard } from "@/components/cards/PackageCard";
import { PackageModal } from "@/components/modals/PackageModal";
import { Button } from "@/components/ui/button";

const allPackages = [
  {
    id: "1",
    title: "Greek Island Hopping Adventure",
    destination: "Santorini, Mykonos & Athens, Greece",
    duration: "10 Days / 9 Nights",
    groupSize: "Max 15 people",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop",
    highlights: ["Island hopping", "Wine tasting", "Sunset cruise", "Ancient ruins", "Local cuisine", "Beach time"],
    popularity: 98,
  },
  {
    id: "2",
    title: "Bali Wellness Retreat",
    destination: "Ubud & Seminyak, Bali, Indonesia",
    duration: "8 Days / 7 Nights",
    groupSize: "Max 12 people",
    price: 1799,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    highlights: ["Yoga sessions", "Temple visits", "Rice terrace trek", "Spa treatments", "Cooking class", "Waterfall visit"],
    popularity: 95,
  },
  {
    id: "3",
    title: "Maldives Luxury Escape",
    destination: "Malé Atoll, Maldives",
    duration: "6 Days / 5 Nights",
    groupSize: "Private tour",
    price: 4999,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop",
    highlights: ["Overwater villa", "Snorkeling", "Sunset dolphin cruise", "Private dining", "Spa package", "Water sports"],
    popularity: 92,
  },
  {
    id: "4",
    title: "Swiss Alps Winter Wonderland",
    destination: "Zermatt & Interlaken, Switzerland",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 10 people",
    price: 3299,
    originalPrice: 3799,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop",
    highlights: ["Skiing/Snowboarding", "Matterhorn views", "Chocolate tasting", "Fondue dinner", "Glacier express", "Mountain hiking"],
    popularity: 89,
  },
  {
    id: "5",
    title: "Machu Picchu Explorer",
    destination: "Cusco & Sacred Valley, Peru",
    duration: "9 Days / 8 Nights",
    groupSize: "Max 14 people",
    price: 2899,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&auto=format&fit=crop",
    highlights: ["Inca Trail trek", "Machu Picchu", "Rainbow Mountain", "Local communities", "Peruvian cuisine", "Historical sites"],
    popularity: 94,
  },
  {
    id: "6",
    title: "Japan Cultural Immersion",
    destination: "Tokyo, Kyoto & Osaka, Japan",
    duration: "12 Days / 11 Nights",
    groupSize: "Max 16 people",
    price: 3799,
    originalPrice: 4299,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    highlights: ["Temple stays", "Tea ceremony", "Bullet train", "Geisha district", "Sushi making", "Cherry blossoms"],
    popularity: 97,
  },
];

type SortOption = "price-low" | "price-high" | "duration" | "popularity";

export default function Packages() {
  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [selectedPackage, setSelectedPackage] = useState<typeof allPackages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedPackages = useMemo(() => {
    return [...allPackages].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
        case "popularity":
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });
  }, [sortBy]);

  const handleViewDetails = (pkg: typeof allPackages[0]) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

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
              Tour Packages
            </h1>
            <p className="text-lg text-muted-foreground">
              Carefully crafted travel experiences designed to create unforgettable memories.
              All-inclusive packages with expert guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sort Options */}
      <section className="py-6 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-sm z-30">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <ArrowUpDown className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-sm text-muted-foreground shrink-0">Sort by:</span>
            {[
              { value: "popularity", label: "Most Popular" },
              { value: "price-low", label: "Price: Low to High" },
              { value: "price-high", label: "Price: High to Low" },
              { value: "duration", label: "Duration" },
            ].map((option) => (
              <Button
                key={option.value}
                variant={sortBy === option.value ? "default" : "secondary"}
                size="sm"
                onClick={() => setSortBy(option.value as SortOption)}
                className="shrink-0"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages List */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-6">
            {sortedPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PackageCard {...pkg} onViewDetails={() => handleViewDetails(pkg)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Modal */}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        package_={selectedPackage}
      />
    </Layout>
  );
}
