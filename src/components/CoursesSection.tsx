import { motion } from "framer-motion";

const courses = [
  {
    badge: "CYBERBEZPIECZEŃSTWO",
    badgeColor: "#FA521A",
    badgeTextColor: "#FA521A",
    glowColor: "rgba(250, 82, 26, 0.4)",
    borderColor: "#FA521A",
    title: "Cyberbezpieczeństwo w erze AI",
    description: "Minimum wymagań + praktyczne procedury + higiena danych w zespole.",
    instructor: "Jan Kowalski",
    role: "cyberbezpieczeństwo",
    initials: "JK",
  },
  {
    badge: "AI & AUTOMATYZACJA",
    badgeColor: "#00FFFC",
    badgeTextColor: "#00FFFC",
    glowColor: "rgba(0, 255, 252, 0.4)",
    borderColor: "#00FFFC",
    title: "Voiceboty dla firm",
    description: "Obsługa zapytań 24/7, kwalifikacja leadów i automatyczne follow-upy.",
    instructor: "Anna Nowak",
    role: "AI & automatyzacje",
    initials: "AN",
  },
  {
    badge: "MARKETING",
    badgeColor: "#52C41A",
    badgeTextColor: "#52C41A",
    glowColor: "rgba(82, 196, 26, 0.4)",
    borderColor: "#52C41A",
    title: "Jak generować leady w 2026 roku",
    description: "AI + automatyzacje + proces sprzedaży: od wejścia do zamknięcia.",
    instructor: "Piotr Wiśniewski",
    role: "marketing & sprzedaż",
    initials: "PW",
  },
  {
    badge: "AI & CONTENT",
    badgeColor: "#722ED1",
    badgeTextColor: "#722ED1",
    glowColor: "rgba(114, 46, 209, 0.4)",
    borderColor: "#722ED1",
    title: "AI w marketingu i content",
    description: "Treści, reklamy, scenariusze, newslettery — szybciej i spójnie.",
    instructor: "Magdalena Kowalczyk",
    role: "content marketing",
    initials: "MK",
  },
  {
    badge: "SPRZEDAŻ",
    badgeColor: "#1890FF",
    badgeTextColor: "#1890FF",
    glowColor: "rgba(24, 144, 255, 0.4)",
    borderColor: "#1890FF",
    title: "AI w sprzedaży i obsłudze klienta",
    description: "Skrypty rozmów, pipeline, follow-up, notatki i automaty.",
    instructor: "Tomasz Lewandowski",
    role: "sprzedaż",
    initials: "TL",
  },
  {
    badge: "AUTOMATYZACJE",
    badgeColor: "#FF7A00",
    badgeTextColor: "#FF7A00",
    glowColor: "rgba(255, 122, 0, 0.4)",
    borderColor: "#FF7A00",
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-[#1a1a1a] rounded-2xl p-10 flex flex-col justify-between cursor-pointer"
              style={{
                minHeight: "320px",
                border: "2px solid transparent",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${course.glowColor}`,
                borderColor: course.borderColor,
              }}
            >
              {/* Top row: Badge + Photo */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "transparent",
                    border: `2px solid ${course.badgeColor}`,
                    color: course.badgeTextColor,
                  }}
                >
                  {course.badge}
                </span>

                {/* Instructor photo placeholder */}
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                  style={{
                    background: `linear-gradient(135deg, ${course.badgeColor}33, ${course.badgeColor}66)`,
                    border: `2px solid ${course.badgeColor}55`,
                  }}
                >
                  <span className="text-white text-lg font-bold">{course.initials}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Kurs</p>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{course.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{course.description}</p>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${course.badgeColor}33` }}
                >
                  <span style={{ color: course.badgeColor }} className="text-xs font-semibold">
                    {course.initials}
                  </span>
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
