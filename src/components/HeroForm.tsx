import { useState, useMemo } from "react";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ───────── Data ───────── */

interface Option {
  label: string;
  points: number;
}

interface StepConfig {
  title: string;
  subtitle?: string;
  multi?: boolean;
  maxSelect?: number;
  options: Option[];
}

const STEPS: StepConfig[] = [
  {
    title: "W jakiej branży działa Twoja firma?",
    options: [
      { label: "Beauty / usługi estetyczne", points: 2 },
      { label: "Nieruchomości / ubezpieczenia / doradztwo", points: 2 },
      { label: "Usługi lokalne (np. gabinet, warsztat, biuro)", points: 1 },
      { label: "E-commerce / online", points: 1 },
      { label: "IT / software", points: 0 },
      { label: "Produkcja", points: 0 },
      { label: "Inna", points: 0 },
    ],
  },
  {
    title: "Ilu pracowników (łącznie z właścicielem) liczy firma?",
    options: [
      { label: "1 (samozatrudnienie)", points: 0 },
      { label: "2–9", points: 1 },
      { label: "10–49", points: 2 },
      { label: "50+", points: 2 },
    ],
  },
  {
    title: "Co ma się konkretnie zmienić w Twojej firmie po wdrożeniu szkolenia?",
    subtitle: "Wybierz maksymalnie 2 odpowiedzi",
    multi: true,
    maxSelect: 2,
    options: [
      { label: "Więcej leadów", points: 2 },
      { label: "Szybsze domykanie sprzedaży", points: 2 },
      { label: "Mniej ręcznej pracy (automatyzacja)", points: 2 },
      { label: "Lepsze raportowanie i kontrola wyników", points: 2 },
      { label: "Wymogi compliance (np. cyber, regulacje)", points: 1 },
      { label: "Jeszcze nie wiem — chcę zobaczyć możliwości", points: 0 },
    ],
  },
  {
    title: "Kiedy realnie chcesz rozpocząć szkolenie?",
    options: [
      { label: "W ciągu 30 dni", points: 3 },
      { label: "W ciągu 2–3 miesięcy", points: 2 },
      { label: "W tym roku, bez konkretnej daty", points: 1 },
      { label: "Rozglądam się na przyszłość", points: 0 },
    ],
  },
  {
    title: "Czy jesteś gotowy na model z wkładem własnym?",
    subtitle: "W większości programów wymagany jest wkład własny (część kosztu pokrywa firma).",
    options: [
      { label: "Tak, jeśli ROI jest jasne", points: 2 },
      { label: "Tak, znam model refundacyjny", points: 3 },
      { label: "Nie wiem — chcę to zrozumieć", points: 1 },
      { label: "Liczę tylko na 100% finansowania", points: 0 },
    ],
  },
];

type Segment = "HOT" | "WARM" | "COLD";

const RESULTS: Record<Segment, { heading: string; text: string; cta: string; href: string }> = {
  HOT: {
    heading: "Wygląda na to, że kwalifikujesz się do szybkiej ścieżki.",
    text: "Twoja firma ma jasny cel, określony termin i gotowość do działania. To dokładnie profil firm, które najczęściej przechodzą kwalifikację dotacyjną i realnie wdrażają system po szkoleniu.\n\nZa chwilę przejdziesz do pełnej kwalifikacji. W 24 h otrzymasz informację zwrotną.",
    cta: "Przejdź do pełnej kwalifikacji",
    href: "/kwalifikacja",
  },
  WARM: {
    heading: "To może być dla Ciebie — ale najpierw zobacz, jak to działa.",
    text: "Twoja sytuacja wygląda obiecująco, ale zanim przejdziesz do formalnej kwalifikacji, warto zobaczyć 45-minutowe DEMO.\n\nPokażemy: 3 konkretne wdrożenia, jak działa system po szkoleniu i jak wygląda proces dotacji.",
    cta: "Zarezerwuj miejsce na DEMO",
    href: "/webinar",
  },
  COLD: {
    heading: "Zacznijmy od podstaw.",
    text: "Na ten moment wygląda na to, że nie planujesz szybkiego wdrożenia albo nie masz jeszcze określonego celu biznesowego.\n\nNajlepszy pierwszy krok: obejrzeć bezpłatne DEMO i zobaczyć, czy ten model ma dla Ciebie sens.",
    cta: "Obejrzyj bezpłatne DEMO",
    href: "/webinar",
  },
};

/* ───────── Config ───────── */

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Get from https://web3forms.com

/* ───────── Component ───────── */

export const HeroForm = () => {
  const totalSteps = 6;
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<(string | string[])[]>(Array(5).fill(""));
  const [points, setPoints] = useState<number[]>(Array(5).fill(0));
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [customIndustry, setCustomIndustry] = useState("");
  const [submitError, setSubmitError] = useState("");

  const totalScore = useMemo(() => points.reduce((a, b) => a + b, 0), [points]);
  const segment: Segment = totalScore >= 8 ? "HOT" : totalScore >= 4 ? "WARM" : "COLD";
  const progress = (step / totalSteps) * 100;

  /* selection helpers */
  const selectSingle = (stepIdx: number, option: Option) => {
    const newAnswers = [...answers];
    newAnswers[stepIdx] = option.label;
    setAnswers(newAnswers);
    const newPoints = [...points];
    newPoints[stepIdx] = option.points;
    setPoints(newPoints);
  };

  const toggleMulti = (stepIdx: number, option: Option, max: number) => {
    const current = (answers[stepIdx] as string[]) || [];
    const exists = current.includes(option.label);
    let next: string[];
    let pts: number;
    if (exists) {
      next = current.filter((l) => l !== option.label);
    } else {
      if (current.length >= max) return; // prevent over-select
      next = [...current, option.label];
    }
    pts = next.reduce((sum, lbl) => {
      const found = STEPS[stepIdx].options.find((o) => o.label === lbl);
      return sum + (found?.points ?? 0);
    }, 0);
    const newAnswers = [...answers];
    newAnswers[stepIdx] = next;
    setAnswers(newAnswers);
    const newPoints = [...points];
    newPoints[stepIdx] = pts;
    setPoints(newPoints);
  };

  const canProceed = () => {
    if (step <= 5) {
      const a = answers[step - 1];
      if (Array.isArray(a)) return a.length > 0;
      return !!a;
    }
    return true;
  };

  const validateContact = () => {
    const e: Record<string, string> = {};
    if (!contact.name.trim()) e.name = "Pole wymagane";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = "Nieprawidłowy email";
    if (!/^\+?[\d\s-]{9,}$/.test(contact.phone.replace(/\s/g, ""))) e.phone = "Nieprawidłowy numer";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateContact()) return;
    setLoading(true);
    setSubmitError("");

    const formData: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nowy lead: ${segment} - ${contact.name}`,
      from_name: "Landing Page - Formularz Kwalifikacyjny",
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      "Branża": `${answers[0]} (${points[0]} pkt)`,
      "Liczba pracowników": `${answers[1]} (${points[1]} pkt)`,
      "Cel biznesowy": `${Array.isArray(answers[2]) ? answers[2].join(", ") : answers[2]} (${points[2]} pkt)`,
      "Termin startu": `${answers[3]} (${points[3]} pkt)`,
      "Wkład własny": `${answers[4]} (${points[4]} pkt)`,
      "WYNIK PUNKTOWY": `${totalScore} / 12 punktów`,
      "SEGMENT": segment,
      "Data zgłoszenia": new Date().toLocaleString("pl-PL"),
      botcheck: "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        setLoading(false);
        setSubmitted(true);
      } else {
        throw new Error("fail");
      }
    } catch {
      setLoading(false);
      setSubmitError("Coś poszło nie tak. Spróbuj ponownie.");
    }
  };

  const next = () => {
    if (step < totalSteps && canProceed()) setStep(step + 1);
    if (step === totalSteps) handleSubmit();
  };
  const prev = () => { if (step > 1) setStep(step - 1); };

  const isSelected = (stepIdx: number, label: string) => {
    const a = answers[stepIdx];
    if (Array.isArray(a)) return a.includes(label);
    return a === label;
  };

  /* ───── Render ───── */
  if (submitted) {
    const r = RESULTS[segment];
    const emoji = segment === "HOT" ? "🟢" : segment === "WARM" ? "🟡" : "🔴";
    return (
      <div className="relative" id="hero-form">
        <div className="absolute -inset-4 bg-gradient-primary opacity-15 blur-2xl rounded-3xl" />
        <div className="relative glass-strong rounded-3xl p-8 shadow-2xl max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4">
            <span className="text-3xl">{emoji}</span>
            <h3 className="text-xl font-bold">{r.heading}</h3>
            <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{r.text}</p>
            <a
              href={r.href}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-[0_4px_20px_hsl(var(--orange)/0.4)]"
            >
              {r.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  const stepConfig = step <= 5 ? STEPS[step - 1] : null;

  return (
    <div className="relative" id="hero-form">
      <div className="absolute -inset-4 bg-gradient-primary opacity-15 blur-2xl rounded-3xl" />
      <div className="relative glass-strong rounded-3xl p-6 md:p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-2">
          <h3 className="text-lg md:text-xl font-bold mb-1">Sprawdź, czy kwalifikujesz się do dofinansowania</h3>
          <p className="text-muted-foreground text-xs">~45 sekund • krok {step}/{totalSteps}</p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {/* Steps 1-5: questions */}
          {stepConfig && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <p className="font-semibold text-sm md:text-base mb-1">{stepConfig.title}</p>
              {stepConfig.subtitle && (
                <p className="text-muted-foreground text-xs mb-2">{stepConfig.subtitle}</p>
              )}

              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {stepConfig.options.map((opt) => {
                  const sel = isSelected(step - 1, opt.label);
                  const isInna = opt.label === "Inna" && step === 1;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => {
                        if (stepConfig.multi) {
                          toggleMulti(step - 1, opt, stepConfig.maxSelect ?? 2);
                        } else {
                          selectSingle(step - 1, opt);
                        }
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                        sel
                          ? "border-primary bg-primary/15 text-foreground"
                          : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-${stepConfig.multi ? "sm" : "full"} border-2 flex items-center justify-center shrink-0 ${sel ? "border-primary bg-primary" : "border-white/30"}`}>
                          {sel && <Check className="w-2.5 h-2.5 text-primary-foreground" />}
                        </span>
                        {opt.label}
                      </span>
                      {isInna && sel && (
                        <input
                          type="text"
                          value={customIndustry}
                          onChange={(e) => setCustomIndustry(e.target.value)}
                          placeholder="Wpisz branżę..."
                          className="mt-2 input-glass text-sm py-2"
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 6: contact */}
          {step === 6 && (
            <motion.div
              key="step-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <p className="font-semibold text-sm md:text-base">Dane kontaktowe</p>
              <div>
                <input
                  name="name"
                  value={contact.name}
                  onChange={(e) => { setContact({ ...contact, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                  placeholder="Imię i nazwisko"
                  className="input-glass"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  value={contact.email}
                  onChange={(e) => { setContact({ ...contact, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                  placeholder="your@email.com"
                  className="input-glass"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => { setContact({ ...contact, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                  placeholder="+48 XXX XXX XXX"
                  className="input-glass"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3 pt-5">
          {step > 1 && (
            <button onClick={prev} className="flex items-center justify-center gap-1 flex-1 h-12 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm font-semibold hover:bg-white/10 transition-all">
              <ArrowLeft className="w-4 h-4" /> Wstecz
            </button>
          )}
          <button
            onClick={next}
            disabled={!canProceed() || loading}
            className="flex items-center justify-center gap-2 flex-1 h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 shadow-[0_4px_25px_hsl(var(--orange)/0.5)]"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : step === 6 ? (
              <>Sprawdź kwalifikację <ArrowRight className="w-4 h-4" /></>
            ) : (
              <>Dalej <ArrowRight className="w-4 h-4" /></>
            )}
          </button>
        </div>

        {submitError && (
          <p className="text-xs text-destructive text-center mt-3">{submitError}</p>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Bez spamu. Jeśli to nie ma sensu w Twoim przypadku — powiemy wprost.
        </p>
      </div>
    </div>
  );
};
