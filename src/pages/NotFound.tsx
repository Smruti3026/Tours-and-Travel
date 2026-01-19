import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent mb-6">
          <Compass className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
          Lost in Paradise?
        </h2>
        <p className="text-muted-foreground mb-8">
          Looks like this destination doesn't exist. Don't worry, we'll help you find your way back to amazing adventures.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="accent" asChild>
            <Link to="/">
              <Home className="w-4 h-4" />
              Back Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/destinations">
              <Compass className="w-4 h-4" />
              Explore
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
