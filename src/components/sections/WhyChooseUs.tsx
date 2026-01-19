import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, Award, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with 24/7 support and comprehensive travel insurance.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Free cancellation up to 48 hours before your trip with full refund guarantee.",
  },
  {
    icon: HeartHandshake,
    title: "Local Experts",
    description: "Authentic experiences curated by local guides who know every hidden gem.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll match it and give you an extra 10% off.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance wherever you are in the world.",
  },
  {
    icon: Globe,
    title: "Sustainable Travel",
    description: "Eco-friendly practices and support for local communities.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Why Travel With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Your Journey, Our Expertise
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            With over 15 years of experience, we've crafted the perfect formula for
            unforgettable travel experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/20 text-accent mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
