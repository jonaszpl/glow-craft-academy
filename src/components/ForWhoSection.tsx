import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Gift, Wallet, BookOpen, Check } from "lucide-react";

import tabLearning from "@/assets/tab-learning.webp";
import tabWorkshop from "@/assets/tab-workshop.webp";
import tabTeam from "@/assets/tab-team.webp";
import tabSupport from "@/assets/tab-support.webp";

const tabs = [
  { id: "dlakogo", label: "Dla kogo jest szkolenie", icon: User },
  { id: "korzysci", label: "Korzyści", icon: Gift },
  { id: "dofinansowanie", label: "Dofinansowanie", icon: Wallet },
  { id: "jakwyglada", label: "Jak wygląda szkolenie", icon: BookOpen },
];

const contentData = {
  dlakogo: {
    image: tabLearning,
    heading: "Dla kogo jest szkolenie",
    description: "To szkolenie jest dla:",
    bullets: [
      "Osoby indywidualne chcące rozwinąć kompetencje cyfrowe lub zmienić zawód",
      "JDG",
      "MSP dział marketingu, dział sprzedaży",
    ],
  },
  korzysci: {
    image: tabTeam,
    heading: "Korzyści",
    description: "Co zyskujesz uczestnicząc w programie:",
    bullets: [
      "Praktyczne umiejętności gotowe do wdrożenia od razu po szkoleniu",
      "Dostęp do nowoczesnych narzędzi AI i automatyzacji",
      "Certyfikat potwierdzający kompetencje cyfrowe",
    ],
  },
  dofinansowanie: {
    image: tabSupport,
    heading: "Dofinansowanie - Jak to działa",
    description: "Proces uzyskania dofinansowania:",
    bullets: [
      "Wypełnij formularz - sprawdzimy Twoje uprawnienia do dotacji",
      "Bezpłatnie przygotujemy i złożymy wniosek za Ciebie",
      "Otrzymasz dofinansowanie do 100% kosztów szkolenia",
    ],
  },
  jakwyglada: {
    image: tabWorkshop,
    heading: "Jak wygląda szkolenie?",
    description: "Format i metodologia:",
    bullets: [
      "Szkolenia online lub na żywo + platforma kursowa",
      "20% teorii, 80% praktyki",
      "Certyfikacja",
      "Mentoring i wsparcie po szkoleniu",
      "Wdrożenia narzędzi i obsługa marketingu",
    ],
  },
};

export const ForWhoSection = () => {
  const [activeTab, setActiveTab] = useState("dlakogo");
  const content = contentData[activeTab as keyof typeof contentData];

  return (
    <section id="dla-kogo" className="section-padding bg-[#F8F9FA]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">
            Poznaj nas od kuchni
          </h2>

          {/* Tab navigation - DESKTOP: inline tabs */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-3">
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
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab navigation - MOBILE: vertical list with labels always visible */}
          <div className="flex sm:hidden flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl text-left ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-transparent text-gray-600 border border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
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
                {content.bullets.length > 0 && (
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
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
