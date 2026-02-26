import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Loader2, Check } from "lucide-react";
import { Button } from "./ui/button";

const WEB3FORMS_ACCESS_KEY = "ba430135-2384-4875-a570-afefa0a32d77";

export const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Podaj imię i nazwisko";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Nieprawidłowy format email";
    if (form.phone && !/^[\d\s+()-]{7,}$/.test(form.phone)) e.phone = "Nieprawidłowy format telefonu";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone || "Nie podano",
          message: form.message || "Brak wiadomości",
          subject: `Kontakt ze strony: ${form.name}`,
          from_name: "Landing Page - Formularz Kontaktowy",
          "Typ formularza": "Kontakt - dół strony",
          "Data": new Date().toLocaleString("pl-PL"),
          "Źródło": window.location.href,
          botcheck: "",
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error("fail");
      }
    } catch {
      setSubmitError("Coś poszło nie tak. Spróbuj ponownie lub zadzwoń: +48 505 110 377");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section className="section-padding bg-primary-foreground">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />

          <div className="relative glass rounded-3xl p-8 md:p-16 bg-secondary-foreground">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: text */}
              <div className="text-center md:text-left">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
                  <MessageCircle className="w-4 h-4" />
                  Bezpłatna konsultacja
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Masz pytania? Umów{" "}
                  <span className="text-gradient">darmową konsultację</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-8">
                  Uzyskaj do 100% dofinansowania na wybrane szkolenie.
                  Nasi eksperci pomogą Ci dobrać idealny kurs.
                </p>

                <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    500+ zadowolonych klientów
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    100% gwarancja satysfakcji
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Certyfikowane szkolenia
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {success && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-xl bg-green-500/20 text-green-400 text-sm font-medium">
                    <Check className="w-5 h-5" />
                    Dziękujemy! Skontaktujemy się wkrótce.
                  </motion.div>
                )}

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Imię i nazwisko *</label>
                  <input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Jan Kowalski" className="input-glass" disabled={loading} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jan@firma.pl" className="input-glass" disabled={loading} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Telefon</label>
                  <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+48 XXX XXX XXX" className="input-glass" disabled={loading} />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Wiadomość</label>
                  <textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="W czym możemy pomóc?" rows={3} className="input-glass resize-none" disabled={loading} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 shadow-[0_4px_25px_hsl(var(--orange)/0.5)]"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Wyślij wiadomość <ArrowRight className="w-4 h-4" /></>}
                </button>

                {submitError && <p className="text-xs text-destructive text-center">{submitError}</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
