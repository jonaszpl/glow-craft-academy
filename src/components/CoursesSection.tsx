import { motion } from "framer-motion";

const courses = [
  {
    badge: "CYBERBEZPIECZEŃSTWO",
    badgeColor: "#FA521A",
    glowColor: "rgba(250, 82, 26, 0.4)",
    borderColor: "#FA521A",
    title: "Cyberbezpieczeństwo w erze AI",
    description: "Minimum wymagań + praktyczne procedury + higiena danych w zespole.",
  },
  {
    badge: "AI & AUTOMATYZACJA",
    badgeColor: "#00FFFC",
    glowColor: "rgba(0, 255, 252, 0.4)",
    borderColor: "#00FFFC",
    title: "Voiceboty dla firm",
    description: "Obsługa zapytań 24/7, kwalifikacja leadów i automatyczne follow-upy.",
  },
  {
    badge: "MARKETING",
    badgeColor: "#52C41A",
    glowColor: "rgba(82, 196, 26, 0.4)",
    borderColor: "#52C41A",
    title: "Jak generować leady w 2026 roku",
    description: "AI + automatyzacje + proces sprzedaży: od wejścia do zamknięcia.",
  },
  {
    badge: "AI & CONTENT",
    badgeColor: "#722ED1",
    glowColor: "rgba(114, 46, 209, 0.4)",
    borderColor: "#722ED1",
    title: "AI w marketingu i content",
    description: "Treści, reklamy, scenariusze, newslettery — szybciej i spójnie.",
  },
  {
    badge: "SPRZEDAŻ",
    badgeColor: "#1890FF",
    glowColor: "rgba(24, 144, 255, 0.4)",
    borderColor: "#1890FF",
    title: "AI w sprzedaży i obsłudze klienta",
    description: "Skrypty rozmów, pipeline, follow-up, notatki i automaty.",
  },
  {
    badge: "AUTOMATYZACJE",
    badgeColor: "#FF7A00",
    glowColor: "rgba(255, 122, 0, 0.4)",
    borderColor: "#FF7A00",
    title: "Automatyzacje (Make / CRM / Workspace)",
    description: "Łączymy narzędzia w jeden system, który oszczędza czas i błędy.",
  },
];

const scrollToForm = () => {
  const form = document.getElementById("hero-form");
  if (form) form.scrollIntoView({ behavior: "smooth", block: "center" });
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 md:px-0">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-[#1a1a1a] rounded-2xl p-10 flex flex-col justify-between cursor-pointer w-full max-w-[400px] mx-auto"
              style={{
                minHeight: "300px",
                border: "2px solid transparent",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${course.glowColor}`,
                borderColor: course.borderColor,
              }}
              onClick={scrollToForm}
            >
              {/* Badge */}
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "transparent",
                    border: `2px solid ${course.badgeColor}`,
                    color: course.badgeColor,
                  }}
                >
                  {course.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Kurs</p>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{course.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{course.description}</p>
              </div>

              {/* Pricing */}
              <div className="pt-5 mt-5 border-t border-white/10">
                <p className="text-gray-500 text-sm line-through mb-1">3 690 zł</p>
                <p className="text-lg font-bold" style={{ color: course.badgeColor }}>
                  Cena po dofinansowaniu: <span className="text-white text-xl">738 zł</span>
                </p>
                <p className="text-gray-500 text-xs mt-1">za uczestnika</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
