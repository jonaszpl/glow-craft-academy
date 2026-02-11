import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marta Kowalska",
    role: "Head of Sales",
    company: "TechFlow",
    content: "W końcu mamy proces, a nie 'taski w głowie'. Po 2 tygodniach mniej chaosu i szybszy follow-up.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafał Nowicki",
    role: "Marketing Director",
    company: "Growth Lab",
    content: "AI w praktyce — wyszliśmy z gotowymi szablonami i automatyzacjami. Zespół to wdrożył następnego dnia.",
    rating: 5,
  },
  {
    id: 3,
    name: "Katarzyna Zielińska",
    role: "CEO",
    company: "SmartOps",
    content: "Dotacje ogarnięte prosto: wiedzieliśmy co poprawić, a komunikacja była konkretna.",
    rating: 5,
  },
  {
    id: 4,
    name: "Tomasz Kaczmarek",
    role: "HR Manager",
    company: "Enterprise Corp",
    content: "Szkolenie HR w erze AI otworzyło mi oczy na możliwości automatyzacji rekrutacji. Czas zatrudnienia skrócił się o 40%.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ewa Mazur",
    role: "Content Creator",
    company: "Creative Studio",
    content: "ChatGPT i narzędzia AI całkowicie zmieniły mój workflow. Tworzę teraz content 5x szybciej, zachowując wysoką jakość.",
    rating: 5,
  },
  {
    id: 6,
    name: "Piotr Lewandowski",
    role: "E-commerce Owner",
    company: "ShopMax",
    content: "Dzięki szkoleniu z automatyzacji e-commerce mój sklep działa praktycznie sam. Obsługa klienta, fulfillment - wszystko zautomatyzowane!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="opinie" className="section-padding relative bg-card/30">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-base mb-3">
            Bez teorii dla teorii. Liczy się to, co działa po szkoleniu.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            To słyszeliśmy po <span className="text-primary">programach</span> 🎉
          </h2>
        </motion.div>

        {/* Desktop: all 6 in grid, Mobile: only first 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 ${
                index >= 3 ? "hidden md:block" : ""
              }`}
            >
              <div className="mb-4">
                <Quote className="w-10 h-10 text-white/20" />
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
