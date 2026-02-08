import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Bot, FileCheck, Workflow, Package, Clock, TrendingUp, ListChecks, Check } from "lucide-react";

const tabs = [
  { id: "dla-kogo", label: "Dla kogo" },
  { id: "jak-pracujemy", label: "Jak pracujemy" },
  { id: "efekty", label: "Efekty" },
];

const contentData = {
  "dla-kogo": {
    badge: "Poznaj nas od kuchni",
    title: "Dla kogo jest szkolenie",
    subtitle: "To jest dla firm, które:",
    items: [
      {
        icon: Zap,
        title: "Chaos w procesach",
        description: "mają chaos w marketingu/sprzedaży i chcą procesu, nie tipów",
      },
      {
        icon: Bot,
        title: "Wdrożenie AI",
        description: "chcą wdrożyć AI bez zatrudniania nowego zespołu",
      },
      {
        icon: FileCheck,
        title: "Dotacje bez stresu",
        description: "chcą wykorzystać środki z dotacji, ale nie mają czasu na formalności",
      },
    ],
  },
  "jak-pracujemy": {
    badge: "80% praktyki",
    title: "Jak pracujemy",
    subtitle: "Nie robimy szkolenia pod slajdy. Pracujemy na Twoich przypadkach:",
    items: [
      {
        icon: Workflow,
        title: "Twoje case'y",
        description: "lead → follow-up → pipeline → automatyzacje → raport",
      },
      {
        icon: Package,
        title: "Pakiet wdrożeniowy",
        description: "Po warsztacie dostajesz: checklisty, szablony, gotowe automaty",
      },
    ],
  },
  "efekty": {
    badge: "Po tygodniu",
    title: "Czego możesz się spodziewać",
    subtitle: "Po tygodniu od wdrożenia:",
    items: [
      {
        icon: Clock,
        title: "Mniej ręcznej roboty",
        description: "powtarzalne rzeczy robi system",
      },
      {
        icon: TrendingUp,
        title: "Lepsza jakość leadów",
        description: "szybszy follow-up i konwersja",
      },
      {
        icon: ListChecks,
        title: "Jasny proces",
        description: "zespół wie co jest następne (pipeline + odpowiedzialności)",
      },
    ],
  },
};

const rightBoxBenefits = [
  "Dostęp do narzędzi AI",
  "Projekty praktyczne",
  "Certyfikacja techniczna",
  "Wsparcie ekspertów",
];

export const ForWhoSection = () => {
  const [activeTab, setActiveTab] = useState("dla-kogo");
  const content = contentData[activeTab as keyof typeof contentData];

  return (
    <section id="dla-kogo" className="section-padding bg-muted">
      <div className="container mx-auto">
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Dynamic content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Badge */}
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30">
                {content.badge}
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                {content.title}
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground">{content.subtitle}</p>

              {/* Feature cards */}
              <div className="space-y-4 pt-4">
                {content.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right column - Fixed dark box */}
          <div className="bg-background rounded-2xl p-8 lg:p-10 text-foreground h-fit border border-border">
            <h4 className="text-xl font-bold mb-8">Jak działają szkolenia?</h4>
            
            <div className="space-y-5">
              {rightBoxBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">20%</div>
                <div className="text-sm text-muted-foreground mt-1">Teorii</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">80%</div>
                <div className="text-sm text-muted-foreground mt-1">Praktyki</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
