import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export const HeroForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => { if (step < 3) setStep(step + 1); };
  const prev = () => { if (step > 1) setStep(step - 1); };

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-primary opacity-15 blur-2xl rounded-3xl" />
      <div className="relative glass-strong rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-1">
            Sprawdź, czy przysługuje Ci dofinansowanie
          </h3>
          <p className="text-muted-foreground text-sm">(2–4 min)</p>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                s === step ? "bg-primary w-7" : s < step ? "bg-secondary" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Imię i nazwisko" className="input-glass" />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="input-glass" />
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+48 XXX XXX XXX" className="input-glass" />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <input name="company" value={formData.company} onChange={handleChange} placeholder="Nazwa firmy" className="input-glass" />
              <select name="employees" value={formData.employees} onChange={handleChange} className="input-glass">
                <option value="">Liczba pracowników...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-250">51-250</option>
                <option value="250+">250+</option>
              </select>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3"
            >
              <div className="card-glass text-center py-6">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="text-lg font-bold mb-1">Potwierdź dane</h4>
                <p className="text-muted-foreground text-sm">{formData.name || "—"} • {formData.email || "—"}</p>
                <p className="text-muted-foreground text-sm">{formData.phone || "—"} • {formData.company || "—"}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3 pt-5">
          {step > 1 && (
            <Button variant="glass" size="lg" onClick={prev} className="flex-1">Wstecz</Button>
          )}
          <Button variant="hero" size="lg" onClick={next} className="flex-1">
            {step === 3 ? "Wyślij wniosek" : "Dalej"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-5">
          Bez spamu. Jeśli to nie ma sensu w Twoim przypadku — powiemy wprost.
        </p>
      </div>
    </div>
  );
};
