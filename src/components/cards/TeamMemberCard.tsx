import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function TeamMemberCard({ name, role, image, bio }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 text-center"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-left">
          <h3 className="text-card font-display text-lg font-semibold">{name}</h3>
          <p className="text-card/80 text-sm">{role}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-muted-foreground text-sm">{bio}</p>
      </div>
    </motion.div>
  );
}
