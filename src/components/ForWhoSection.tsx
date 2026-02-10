import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Target, Star, MessageCircle, Check } from "lucide-react";

import tabLearning from "@/assets/tab-learning.webp";
import tabWorkshop from "@/assets/tab-workshop.webp";
import tabTeam from "@/assets/tab-team.webp";
import tabSupport from "@/assets/tab-support.webp";

const tabs = [
  { id: "system", label: "Wygodny system do nauki", icon: User },
  { id: "zajecia", label: "Interaktywne zajęcia", icon: Target },
  { id: "zespol", label: "Profesjonalny zespół", icon: Star },
  { id: "wsparcie", label: "Wsparcie i motywacja", icon: MessageCircle },
];

const contentData = {
  system: {
    image: tabLearning,
    heading: "Wszystkie Twoje kursy w jednym miejscu",
    description:
      "Aby Twoja nauka przebiegała komfortowo i wydajnie, stworzyliśmy własny system do nauki online. Dzięki kontu My.Laba wszystkie materiały, zajęcia i zadania domowe masz zawsze pod ręką.",
    bullets: [
      "Dostęp 24/7 do platformy kursowej",
      "Materiały video, prezentacje i ćwiczenia praktyczne",
      "Śledzenie postępów w nauce",
      "Bezpośredni kontakt z wykładowcą",
    ],
  },
  zajecia: {
    image: tabWorkshop,
    heading: "80% praktyki, nie teorii",
    description:
      'Nie robimy szkolenia „pod slajdy". Pracujemy na Twoich przypadkach: lead → follow-up → pipeline → automatyzacje → raport.',
    bullets: [
      "Warsztaty na żywo i online",
      "Praca na realnych case'ach z Twojej firmy",
      "Checklisty i szablony do wdrożenia",
      "Gotowe automaty po szkoleniu",
    ],
  },
  zespol: {
    image: tabTeam,
    heading: "Eksperci-praktycy, nie tylko trenerzy",
    description:
      "Nasi wykładowcy to specjaliści, którzy na co dzień wdrażają AI i automatyzacje w firmach. Nie uczą teorii — pokazują co działa.",
    bullets: [
      "Doświadczenie w AI, marketingu i sprzedaży",
      "Certyfikowani trenerzy",
      "Portfolio realnych wdrożeń",
      "Indywidualne podejście do uczestników",
    ],
  },
  wsparcie: {
    image: tabSupport,
    heading: "Nie zostaniesz sam po szkoleniu",
    description:
      "Mentoring i wsparcie po szkoleniu to standard. Pomagamy wdrożyć rozwiązania w Twojej firmie i odpowiadamy na pytania.",
    bullets: [
      "Mentoring po zakończeniu kursu",
      "Grupa wsparcia absolwentów",
      "Materiały dodatkowe i aktualizacje",
      "Pomoc we wdrożeniu narzędzi",
    ],
  },
};

export const ForWhoSection = () => {
  const [activeTab, setActiveTab] = useState("system");
  const content = contentData[activeTab as keyof typeof contentData];

  return (
    <section id="dla-kogo" className="section-padding bg-[#F8F9FA]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">
            Poznaj nas od kuchni
          </h2>

          {/* Tab navigation with icons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-transparent text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-5 gap-0"
            >
              {/* Left - Image (40%) */}
              <div className="md:col-span-2 p-6 md:p-10 flex items-center justify-center bg-gray-50">
                <img
                  src={content.image}
                  alt={content.heading}
                  className="w-full max-w-md rounded-2xl object-cover"
                />
              </div>

              {/* Right - Text (60%) */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {content.heading}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>
                <ul className="space-y-3">
                  {content.bullets.map((bullet, i) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-gray-700">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
