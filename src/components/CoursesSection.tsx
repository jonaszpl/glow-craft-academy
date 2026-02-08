import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Users } from "lucide-react";

const categories = [
  { id: "wszystko", label: "Wszystko" },
  { id: "ai", label: "AI" },
  { id: "sprzedaz", label: "Sprzedaż" },
  { id: "marketing", label: "Marketing" },
  { id: "firmy", label: "Dla firm" },
];

const courses = [
  {
    id: 1,
    title: "HR Managers w erze AI",
    category: ["wszystko", "ai", "firmy"],
    tag: "BUSINESS MANAGER",
    tagColor: "bg-primary/20 text-primary",
    instructor: "Anna Kowalska",
    duration: "40h",
    students: 234,
    rating: 4.9,
    popular: true,
  },
  {
    id: 2,
    title: "Inteligentny Biznes z AI",
    category: ["wszystko", "ai", "firmy"],
    tag: "TECH",
    tagColor: "bg-secondary/20 text-secondary",
    instructor: "Michał Nowak",
    duration: "60h",
    students: 456,
    rating: 5.0,
    popular: true,
  },
  {
    id: 3,
    title: "Analytics od A do Z",
    category: ["wszystko", "marketing"],
    tag: "ANALYST",
    tagColor: "bg-purple-500/20 text-purple-400",
    instructor: "Karolina Wiśniewska",
    duration: "35h",
    students: 189,
    rating: 4.8,
    popular: false,
  },
  {
    id: 4,
    title: "Social Selling Masterclass",
    category: ["wszystko", "sprzedaz"],
    tag: "POPULAR",
    tagColor: "bg-primary/20 text-primary",
    instructor: "Piotr Lewandowski",
    duration: "25h",
    students: 567,
    rating: 4.9,
    popular: true,
  },
  {
    id: 5,
    title: "Content Marketing Pro",
    category: ["wszystko", "marketing"],
    tag: "MARKETING",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    instructor: "Ewa Mazur",
    duration: "45h",
    students: 321,
    rating: 4.7,
    popular: false,
  },
  {
    id: 6,
    title: "Automatyzacje dla firm",
    category: ["wszystko", "ai", "firmy"],
    tag: "TECH",
    tagColor: "bg-secondary/20 text-secondary",
    instructor: "Tomasz Kaczmarek",
    duration: "50h",
    students: 278,
    rating: 4.9,
    popular: true,
  },
];

export const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("wszystko");

  const filteredCourses = courses.filter((course) =>
    course.category.includes(activeCategory)
  );

  return (
    <section id="kursy" className="section-padding relative bg-card/30">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nasze <span className="text-gradient">kursy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wybierz szkolenie dopasowane do Twoich potrzeb i zacznij rozwijać kompetencje przyszłości
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                {/* Course thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-4xl font-bold text-gradient">{course.id}</span>
                    </div>
                  </div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.tagColor}`}>
                      {course.tag}
                    </span>
                  </div>

                  {/* Popular badge */}
                  {course.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        🔥 Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Course info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="w-4 h-4 fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">
                        {course.instructor.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{course.instructor}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
