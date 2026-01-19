import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary-foreground/20">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold">Wanderlust</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting unforgettable journeys and authentic travel experiences since 2010. Let us take you places you've only dreamed of.
            </p>
            <div className="flex gap-3">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Youtube} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/destinations">Destinations</FooterLink>
              <FooterLink to="/packages">Tour Packages</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              <FooterLink to="/destinations">Santorini, Greece</FooterLink>
              <FooterLink to="/destinations">Bali, Indonesia</FooterLink>
              <FooterLink to="/destinations">Maldives</FooterLink>
              <FooterLink to="/destinations">Swiss Alps</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                123 Travel Street, Adventure City, AC 12345
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 shrink-0" />
                hello@wanderlust.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Wanderlust Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <a
      href="#"
      className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
