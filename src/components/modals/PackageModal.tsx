import { X, Clock, MapPin, Users, Calendar, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  package_: {
    id: string;
    title: string;
    destination: string;
    duration: string;
    groupSize: string;
    price: number;
    originalPrice?: number;
    image: string;
    highlights: string[];
    description?: string;
    included?: string[];
    itinerary?: string[];
  } | null;
}

export function PackageModal({ isOpen, onClose, package_: pkg }: PackageModalProps) {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-card rounded-2xl shadow-elevated z-50 overflow-hidden flex flex-col"
          >
            {/* Header with image */}
            <div className="relative h-48 md:h-64 shrink-0">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-card">
                  {pkg.title}
                </h2>
                <div className="flex items-center gap-1 text-card/90 text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  {pkg.destination}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4">
                    <InfoBadge icon={Clock} label={pkg.duration} />
                    <InfoBadge icon={Users} label={pkg.groupSize} />
                    <InfoBadge icon={Calendar} label="Available Year Round" />
                    <div className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      4.9 (128 reviews)
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">
                      {pkg.description ||
                        "Experience an unforgettable journey through breathtaking landscapes, rich culture, and authentic local experiences. This carefully curated package includes everything you need for the perfect getaway."}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-3">Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-forest shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-3">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(pkg.included || [
                        "Accommodation (4-star hotels)",
                        "Daily breakfast",
                        "Airport transfers",
                        "Professional guide",
                        "All entrance fees",
                        "Travel insurance",
                      ]).map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Card */}
                <div className="md:col-span-1">
                  <div className="sticky top-4 bg-secondary/50 rounded-2xl p-6">
                    <div className="mb-4">
                      {pkg.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${pkg.originalPrice}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                        <span className="text-muted-foreground">/person</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Group Size</span>
                        <span className="font-medium">{pkg.groupSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Availability</span>
                        <span className="font-medium text-forest">Available</span>
                      </div>
                    </div>

                    <Button variant="accent" size="lg" className="w-full mb-3">
                      Book Now
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function InfoBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm bg-muted px-3 py-1.5 rounded-full">
      <Icon className="w-4 h-4 text-primary" />
      <span>{label}</span>
    </div>
  );
}
