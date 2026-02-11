import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Target, Star, Check } from "lucide-react";

import tabLearning from "@/assets/tab-learning.webp";
import tabWorkshop from "@/assets/tab-workshop.webp";
import tabTeam from "@/assets/tab-team.webp";
import tabSupport from "@/assets/tab-support.webp";

const tabs = [
  { id: "dlakogo", label: "Dla kogo jest szkolenie", icon: User },
  { id: "jakpracujemy", label: "Jak pracujemy", icon: Target },
  { id: "czego", label: "Czego możesz się spodziewać", icon: Star },
];

const contentData = {
  dlakogo: {
    image: tabLearning,
    heading: "Dla kogo jest szkolenie",
    description: "To jest dla firm, które:",
    bullets: [
      'mają chaos w marketingu/sprzedaży i chcą procesu, nie \u201Etipów\u201D',
      "chcą wdrożyć AI bez zatrudniania nowego zespołu",
      "chcą wykorzystać środki z dotacji, ale nie mają czasu na formalności",
    ],
  },
  jakpracujemy: {
    image: tabWorkshop,
    heading: "Jak pracujemy (80% praktyki)",
    description:
      'Nie robimy szkolenia \u201Epod slajdy\u201D. Pracujemy na Twoich przypadkach: lead \u2192 follow-up \u2192 pipeline \u2192 automatyzacje \u2192 raport. Po warsztacie dostajesz paczk\u0119 wdro\u017Ceniow\u0105: checklisty, szablony, gotowe automaty.',
    bullets: [],
  },
  czego: {
    image: tabTeam,
    heading: "Czego możesz się spodziewać po tygodniu",
    description: "",
    bullets: [
      "mniej ręcznej roboty (powtarzalne rzeczy robi system)",
      "lepsza jakość leadów i szybszy follow-up",
      'zesp\u00F3\u0142 wie \u201Eco jest nast\u0119pne\u201D (pipeline + odpowiedzialno\u015Bci)',
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
