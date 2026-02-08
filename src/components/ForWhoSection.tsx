import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Cpu, Briefcase, Check, GraduationCap, Video, Award, UserCheck } from "lucide-react";

const tabs = [
  { id: "wszystko", label: "Wszystko", icon: Users },
  { id: "mindset", label: "Mindset", icon: Lightbulb },
  { id: "tech", label: "Tech", icon: Cpu },
  { id: "business", label: "Business", icon: Briefcase },
];

const contentData = {
  wszystko: {
    title: "Dla kogo jest szkolenie?",
    description: "Nasze szkolenia są idealne zarówno dla osób indywidualnych, jak i dla firm, które chcą rozwijać kompetencje cyfrowe swojego zespołu.",
    items: [
      {
        icon: Users,
        title: "Osoby indywidualne",
        description: "Chcące rozwinąć umiejętności cyfrowe lub zmienić zawód",
      },
      {
        icon: Briefcase,
        title: "JDG i przedsiębiorcy",
        description: "Szukający narzędzi do automatyzacji i rozwoju biznesu",
      },
      {
        icon: UserCheck,
        title: "Działy Marketing & Sales",
        description: "Chcące wykorzystać AI w codziennej pracy",
      },
      {
        icon: GraduationCap,
        title: "Do 100% dofinansowania",
        description: "Dla firm i osób fizycznych z różnych programów UE",
      },
    ],
    benefits: [
      "Szkolenia online i na żywo",
      "20% teorii, 80% praktyki",
      "Certyfikat ukończenia",
      "Mentoring i wsparcie",
    ],
  },
  mindset: {
    title: "Mindset & Rozwój osobisty",
    description: "Rozwijaj umiejętności miękkie i nastawienie na sukces w świecie cyfrowym.",
    items: [
      {
        icon: Lightbulb,
        title: "Growth Mindset",
        description: "Nauka adaptacji do zmian i ciągłego rozwoju",
      },
      {
        icon: Users,
        title: "Liderstwo",
        description: "Budowanie zespołów i zarządzanie w erze AI",
      },
    ],
    benefits: [
      "Coaching grupowy",
      "Warsztaty praktyczne",
      "Społeczność absolwentów",
      "Materiały dodatkowe",
    ],
  },
  tech: {
    title: "Tech & AI",
    description: "Opanuj narzędzia AI i automatyzacji, które zmienią Twoją pracę.",
    items: [
      {
        icon: Cpu,
        title: "ChatGPT & AI Assistants",
        description: "Tworzenie promptów i integracja AI w workflow",
      },
      {
        icon: Video,
        title: "Automatyzacje",
        description: "Make, n8n, Zapier - automatyzuj powtarzalne zadania",
      },
    ],
    benefits: [
      "Dostęp do narzędzi AI",
      "Projekty praktyczne",
      "Certyfikacja techniczna",
      "Wsparcie ekspertów",
    ],
  },
  business: {
    title: "Business & Sprzedaż",
    description: "Strategie marketingowe i sprzedażowe z wykorzystaniem nowoczesnych technologii.",
    items: [
      {
        icon: Briefcase,
        title: "Digital Marketing",
        description: "Meta Ads, Google Ads, Content Marketing",
      },
      {
        icon: Award,
        title: "Sales Automation",
        description: "CRM, Social Selling, Prospecting",
      },
    ],
    benefits: [
      "Case studies",
      "Analizy kampanii",
      "Szablony dokumentów",
      "Networking",
    ],
  },
};

export const ForWhoSection = () => {
  const [activeTab, setActiveTab] = useState("wszystko");
  const content = contentData[activeTab as keyof typeof contentData];

  return (
    <section id="dla-kogo" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Poznaj nas od kuchni
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dla <span className="text-gradient">kogo</span> jest szkolenie?
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Items */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{content.title}</h3>
              <p className="text-muted-foreground mb-8">{content.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {content.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="bg-white/5 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6">Jak działają szkolenia?</h4>
              <div className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20%</div>
                  <div className="text-sm text-muted-foreground">Teorii</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">80%</div>
                  <div className="text-sm text-muted-foreground">Praktyki</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
