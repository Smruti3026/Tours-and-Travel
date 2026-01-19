import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Award, Users, Globe, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    bio: "20+ years in luxury travel, passionate about creating transformative journeys that connect people with cultures.",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    bio: "Former airline executive bringing operational excellence and seamless travel logistics to every trip.",
  },
  {
    name: "Maria Santos",
    role: "Travel Experience Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    bio: "Crafts unique itineraries that blend adventure, culture, and relaxation perfectly.",
  },
  {
    name: "James Wilson",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    bio: "Dedicated to ensuring every traveler has an exceptional experience from booking to return.",
  },
];

const stats = [
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Users, value: "50,000+", label: "Happy Travelers" },
  { icon: Award, value: "150+", label: "Awards Won" },
  { icon: Heart, value: "15+", label: "Years Experience" },
];

export default function About() {
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
              About Wanderlust
            </h1>
            <p className="text-lg text-muted-foreground">
              We've been crafting unforgettable travel experiences since 2010,
              turning dream destinations into cherished memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                A Passion for Exploration
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010 by a group of passionate travelers, Wanderlust began
                  with a simple mission: to create travel experiences that go beyond
                  the ordinary. We believed that travel should transform, inspire, and
                  connect people with the world in meaningful ways.
                </p>
                <p>
                  What started as a small team operating from a tiny office has grown
                  into a global travel company serving over 50,000 travelers annually.
                  But our core values remain unchanged – authenticity, sustainability,
                  and putting our travelers first.
                </p>
                <p>
                  Today, we partner with local communities, support sustainable tourism
                  initiatives, and continue to craft journeys that create lasting
                  memories while respecting the places we visit.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop"
                  alt="Travel adventure"
                  className="rounded-2xl shadow-card w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&auto=format&fit=crop"
                  alt="Cultural experience"
                  className="rounded-2xl shadow-card w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&auto=format&fit=crop"
                  alt="Adventure travel"
                  className="rounded-2xl shadow-card w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop"
                  alt="Nature exploration"
                  className="rounded-2xl shadow-card w-full h-48 object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              Travel Experts at Your Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of travel enthusiasts brings decades of combined
              experience to create your perfect journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </Layout>
  );
}
