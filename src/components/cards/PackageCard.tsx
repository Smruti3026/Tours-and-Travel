import { motion } from "framer-motion";
import { Clock, MapPin, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  image: string;
  highlights: string[];
  onViewDetails: () => void;
}

export function PackageCard({
  title,
  destination,
  duration,
  groupSize,
  price,
  originalPrice,
  image,
  highlights,
  onViewDetails,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col lg:flex-row"
    >
      <div className="relative lg:w-80 h-56 lg:h-auto overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {originalPrice && (
          <div className="absolute top-4 left-4 bg-gradient-sunset text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-display text-xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            {destination}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            {duration}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            {groupSize}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.slice(0, 3).map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-xs text-forest bg-forest/10 px-2 py-1 rounded-full"
            >
              <Check className="w-3 h-3" />
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <div>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                ${originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-sm text-muted-foreground">/person</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onViewDetails}>
              Details
            </Button>
            <Button variant="accent" size="sm">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
