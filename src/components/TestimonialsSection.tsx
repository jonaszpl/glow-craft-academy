import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalczyk",
    role: "Marketing Manager",
    company: "Tech Solutions",
    content: "Dzięki szkoleniu z AI w marketingu podwoiłam efektywność mojego zespołu. Automatyzacje, których się nauczyłam, oszczędzają nam 20 godzin tygodniowo.",
    rating: 5,
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    name: "Michał Nowicki",
    role: "Sales Director",
    company: "Growth Agency",
    content: "Kurs Social Selling zmienił moje podejście do sprzedaży. LinkedIn stał się moim głównym źródłem leadów - 300% wzrost konwersji!",
    rating: 5,
    bgColor: "bg-secondary/10",
  },
  {
    id: 3,
    name: "Karolina Wiśniewska",
    role: "Founder",
    company: "KW Consulting",
    content: "Jako przedsiębiorca szukałam sposobu na skalowanie biznesu. Automatyzacje z Make i n8n pozwoliły mi obsłużyć 3x więcej klientów.",
    rating: 5,
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    name: "Tomasz Kaczmarek",
    role: "HR Manager",
    company: "Enterprise Corp",
    content: "Szkolenie HR w erze AI otworzyło mi oczy na możliwości automatyzacji rekrutacji. Czas zatrudnienia skrócił się o 40%.",
    rating: 5,
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 5,
    name: "Ewa Mazur",
    role: "Content Creator",
    company: "Creative Studio",
    content: "ChatGPT i narzędzia AI całkowicie zmieniły mój workflow. Tworzę teraz content 5x szybciej, zachowując wysoką jakość.",
    rating: 5,
    bgColor: "bg-amber-500/10",
  },
  {
    id: 6,
    name: "Piotr Lewandowski",
    role: "E-commerce Owner",
    company: "ShopMax",
    content: "Dzięki szkoleniu z automatyzacji e-commerce mój sklep działa praktycznie sam. Obsługa klienta, fulfillment - wszystko zautomatyzowane!",
    rating: 5,
    bgColor: "bg-rose-500/10",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="opinie" className="section-padding relative bg-card/30">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Historie <span className="text-gradient">sukcesów</span> 🎉
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Poznaj opinie absolwentów naszych kursów i ich drogi do sukcesu
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 ${testimonial.bgColor} backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-white/20" />
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
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
