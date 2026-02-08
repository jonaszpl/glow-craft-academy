import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

const badges = [
  { label: "AI", color: "bg-primary/20 text-primary border-primary/30" },
  { label: "Marketing", color: "bg-secondary/20 text-secondary border-secondary/30" },
  { label: "Sprzedaż", color: "bg-primary/20 text-primary border-primary/30" },
];

const formSteps = [
  { id: 1, title: "Dane kontaktowe", fields: ["name", "email"] },
  { id: 2, title: "Twoja firma", fields: ["company", "employees"] },
  { id: 3, title: "Potwierdź", fields: ["confirm"] },
];

export const HeroSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {badges.map((badge, index) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${badge.color}`}
                >
                  {badge.label}
                </motion.span>
              ))}
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-foreground">Szkolenia</span>
              <br />
              <span className="text-gradient">przyszłości</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
              Do 100% dofinansowania dla firm i osób indywidualnych
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Wypełnij formularz, złożymy dla Ciebie bezpłatny wniosek o dofinansowanie. 
              Zdobądź kompetencje w AI, marketingu i sprzedaży.
            </p>

            {/* CTA Button - Mobile */}
            <div className="lg:hidden mb-8">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Uzyskaj dofinansowanie
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "500+", label: "Absolwentów" },
                { value: "100%", label: "Dofinansowania" },
                { value: "20+", label: "Szkoleń" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            
            <div className="relative glass-strong rounded-3xl p-8 shadow-2xl">
              {/* Form header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Uzyskaj dofinansowanie</h3>
                <p className="text-muted-foreground">Krok {currentStep} z 3</p>
              </div>

              {/* Step indicators */}
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      step === currentStep
                        ? "bg-primary w-8"
                        : step < currentStep
                        ? "bg-secondary"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* Form steps */}
              <div className="space-y-6">
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">Imię i nazwisko</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jan Kowalski"
                        className="input-glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jan@firma.pl"
                        className="input-glass"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">Nazwa firmy</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Twoja Firma Sp. z o.o."
                        className="input-glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Liczba pracowników</label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        className="input-glass"
                      >
                        <option value="">Wybierz...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-250">51-250</option>
                        <option value="250+">250+</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="card-glass text-center py-8">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Potwierdź dane</h4>
                      <p className="text-muted-foreground text-sm">
                        {formData.name || "Brak imienia"} • {formData.email || "Brak email"}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {formData.company || "Brak firmy"} • {formData.employees || "Brak rozmiaru"} pracowników
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Navigation buttons */}
                <div className="flex gap-4 pt-4">
                  {currentStep > 1 && (
                    <Button variant="glass" size="lg" onClick={prevStep} className="flex-1">
                      Wstecz
                    </Button>
                  )}
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={nextStep} 
                    className="flex-1"
                  >
                    {currentStep === 3 ? "Wyślij wniosek" : "Dalej"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-white/10">
                <span className="text-xs text-muted-foreground">🔒 Bezpieczne dane</span>
                <span className="text-xs text-muted-foreground">✓ RODO compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
