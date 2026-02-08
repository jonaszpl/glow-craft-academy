import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube, Linkedin, Music, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Music, label: "Spotify", href: "#" },
  { icon: BookOpen, label: "Blog", href: "#" },
];

const footerLinks = [
  {
    title: "Szkolenia",
    links: ["AI w biznesie", "Marketing", "Sprzedaż", "Automatyzacje"],
  },
  {
    title: "Firma",
    links: ["O nas", "Kontakt", "Kariera", "Partnerzy"],
  },
  {
    title: "Zasoby",
    links: ["Blog", "Podcast", "Webinary", "Case Studies"],
  },
  {
    title: "Pomoc",
    links: ["FAQ", "Polityka prywatności", "Regulamin", "Reklamacje"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-card/50 border-t border-white/5">
      {/* Newsletter section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Dowiedz się więcej
              </h3>
              <p className="text-muted-foreground">
                Zapisz się do newslettera i otrzymuj najnowsze informacje o szkoleniach, 
                promocjach i darmowych materiałach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Twój email"
                className="input-glass flex-1"
              />
              <Button variant="hero" size="lg">
                Zapisz się
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold">Szkolenia</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Rozwijaj kompetencje przyszłości z liderami branży AI, marketingu i sprzedaży.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-y border-white/5 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">UE</div>
            <div className="text-xs text-muted-foreground">Dofinansowanie</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">ISO</div>
            <div className="text-xs text-muted-foreground">Certyfikat</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">PARP</div>
            <div className="text-xs text-muted-foreground">Partner</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">BUR</div>
            <div className="text-xs text-muted-foreground">Rejestr</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 AI Szkolenia. Wszelkie prawa zastrzeżone.</p>
          <p className="text-gradient font-semibold">THE MARTELL METHOD</p>
        </div>
      </div>
    </footer>
  );
};
