import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  description: string;
  price: number;
}

export function DestinationCard({
  name,
  country,
  image,
  rating,
  description,
  price,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <h3 className="text-card font-display text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-1 text-card/90 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {country}
            </div>
          </div>
          <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <p className="text-lg font-semibold text-primary">${price}</p>
          </div>
          <Button variant="ocean" size="sm" asChild>
            <Link to="/destinations">View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
