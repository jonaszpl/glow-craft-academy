import { motion } from "framer-motion";
import { Brain, Target, Wallet, Zap, MessageSquare, BarChart3, Bot, Megaphone } from "lucide-react";
const pillars = [{
  icon: Brain,
  title: "Self-consciousness",
  subtitle: "Analiza kariery",
  description: "Analiza kariery poprzez pytania introspektywne prowadzące do głębokiego zrozumienia siebie.",
  points: ["Identyfikacja mocnych stron", "Mapowanie kompetencji", "Definiowanie celów zawodowych"],
  color: "from-primary to-orange-400"
}, {
  icon: Target,
  title: "Strategy",
  subtitle: "Strategia korporacyjna",
  description: "Formułowanie strategii korporacyjnej i zrównoważonego wzrostu biznesu.",
  points: ["Planowanie długoterminowe", "Analiza rynku i konkurencji", "Pozycjonowanie marki"],
  color: "from-secondary to-cyan-400"
}, {
  icon: Wallet,
  title: "Budgeting & Finances",
  subtitle: "Alokacja budżetu",
  description: "Strategiczna alokacja budżetu i projekcje ekonomiczne dla rozwoju.",
  points: ["Planowanie finansowe", "ROI i KPI", "Optymalizacja kosztów"],
  color: "from-purple-500 to-pink-500"
}];
const courseStructure = [{
  pillar: "Filar 1 - Marketing",
  items: ["Performance Marketing", "Content Marketing", "Funnels & Automation"],
  icon: Megaphone
}, {
  pillar: "Filar 2 - AI w biznesie",
  items: ["AI Assistants", "Prompt Engineering", "Content Generation", "Analytics AI"],
  icon: Bot
}, {
  pillar: "Filar 3 - Automatyzacje",
  items: ["Make / n8n", "CRM Integrations", "Voice & Chat Bots"],
  icon: Zap
}, {
  pillar: "Filar 4 - System dowodów",
  items: ["KPI Dashboard", "Team Workflow", "Reporting"],
  icon: BarChart3
}];
const tools = ["ElevenLabs", "Heygen", "Canva", "Figma", "ChatGPT", "Make", "n8n", "HubSpot"];
export const ModulesSection = () => {
  return <section id="szkolenia" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Struktura <span className="text-gradient">szkolenia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kompleksowy program łączący teorię z praktyką, oparty na sprawdzonych metodologiach
          </p>
        </motion.div>

        {/* Three Pillars */}
        

        {/* Course Structure */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Pillars breakdown */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-bold mb-8">4 Filary programu</h3>
            <div className="space-y-4">
              {courseStructure.map((struct, index) => <motion.div key={struct.pillar} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <struct.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{struct.pillar}</h4>
                      <div className="flex flex-wrap gap-2">
                        {struct.items.map(item => <span key={item} className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted-foreground">
                            {item}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Right - Visual communication */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Narzędzia w programie</h3>
            <p className="text-muted-foreground mb-8">
              Nauczysz się korzystać z najnowszych narzędzi AI i automatyzacji używanych przez liderów branży.
            </p>

            {/* Tools grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {tools.map((tool, index) => <motion.div key={tool} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }} className="aspect-square rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center px-2">
                    {tool}
                  </span>
                </motion.div>)}
            </div>

            {/* Skills covered */}
            <div className="grid grid-cols-2 gap-3">
              {["Graphic Design", "Video Creation", "Meta/Google Ads", "CRM", "Automations", "Social Selling", "Prospecting", "Chatbots"].map(skill => <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-secondary" />
                  {skill}
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};