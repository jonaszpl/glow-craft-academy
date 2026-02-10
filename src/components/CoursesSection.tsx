import { motion } from "framer-motion";
import { User } from "lucide-react";

const courses = [
  {
    badge: "CYBERBEZPIECZEŃSTWO",
    badgeColor: "bg-primary",
    title: "Cyberbezpieczeństwo w erze AI",
    description: "Minimum wymagań + praktyczne procedury + higiena danych w zespole.",
    instructor: "Jan Kowalski",
    role: "cyberbezpieczeństwo",
    initials: "JK",
  },
  {
    badge: "AI & AUTOMATYZACJA",
    badgeColor: "bg-secondary text-secondary-foreground",
    title: "Voiceboty dla firm",
    description: "Obsługa zapytań 24/7, kwalifikacja leadów i automatyczne follow-upy.",
    instructor: "Anna Nowak",
    role: "AI & automatyzacje",
    initials: "AN",
  },
  {
    badge: "MARKETING",
    badgeColor: "bg-[#52C41A]",
    title: "Jak generować leady w 2026 roku",
    description: "AI + automatyzacje + proces sprzedaży: od wejścia do zamknięcia.",
    instructor: "Piotr Wiśniewski",
    role: "marketing & sprzedaż",
    initials: "PW",
  },
  {
    badge: "AI & CONTENT",
    badgeColor: "bg-[#722ED1]",
    title: "AI w marketingu i content",
    description: "Treści, reklamy, scenariusze, newslettery — szybciej i spójnie.",
    instructor: "Magdalena Kowalczyk",
    role: "content marketing",
    initials: "MK",
  },
  {
    badge: "SPRZEDAŻ",
    badgeColor: "bg-[#1890FF]",
    title: "AI w sprzedaży i obsłudze klienta",
    description: "Skrypty rozmów, pipeline, follow-up, notatki i automaty.",
    instructor: "Tomasz Lewandowski",
    role: "sprzedaż",
    initials: "TL",
  },
  {
    badge: "AUTOMATYZACJE",
    badgeColor: "bg-[#FF7A00]",
    title: "Automatyzacje (Make / CRM / Workspace)",
    description: "Łączymy narzędzia w jeden system, który oszczędza czas i błędy.",
    instructor: "Karolina Zielińska",
    role: "automatyzacje",
    initials: "KZ",
  },
];

export const CoursesSection = () => {
  return (
    <section id="kursy" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
            Wybierz program, a&nbsp;my sprawdzimy dofinansowanie pod Twoją firmę
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kliknij program → wypełnij formularz → dostaniesz jasny status i&nbsp;następny krok.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-[#1a1a1a] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              {/* Badge */}
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${course.badgeColor}`}>
                  {course.badge}
                </span>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Kurs</p>
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{course.description}</p>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">{course.initials}</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Ten program prowadzi: <span className="text-gray-300">{course.instructor}</span> / {course.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
