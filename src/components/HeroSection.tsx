import { motion } from "framer-motion";
import { ArrowRight, Tag, Percent, Clock, FileText } from "lucide-react";
import { LogoSlider } from "./LogoSlider";
import { HeroForm } from "./HeroForm";

const stats = [
{ icon: Tag, title: "Cena szkolenia", value: "3 000 pln netto", subtitle: "na osobę" },
{ icon: Percent, title: "Cena po dofinansowaniu", value: "80%", subtitle: "600 pln netto" },
{ icon: Clock, title: "Czas szkolenia", value: "16 h", subtitle: "stacjonarnie lub online" },
{ icon: FileText, title: "Bezpłatny wniosek", value: "", subtitle: "o dofinansowanie" }];


export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-hero opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* 1. Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 justify-center flex-wrap mb-6 mt-12">

          <span
            className="font-semibold text-sm px-4 py-1.5 rounded-full border-2"
            style={{ borderColor: "#00FFFC", color: "#00FFFC", background: "rgba(0,0,0,0.2)" }}>
            AI
          </span>
          <span
            className="font-semibold text-sm px-4 py-1.5 rounded-full border-2"
            style={{ borderColor: "#FA521A", color: "#FA521A", background: "rgba(0,0,0,0.2)" }}>
            Marketing
          </span>
          <span
            className="font-semibold text-sm px-4 py-1.5 rounded-full border-2"
            style={{ borderColor: "#00FFFC", color: "#00FFFC", background: "rgba(0,0,0,0.2)" }}>
            Sprzedaż
          </span>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6">

          <h1 className="font-black text-foreground leading-[1.1] tracking-tight text-center">
            <span style={{ fontSize: "clamp(48px, 6vw, 72px)", display: "block" }}>
              Szkolenia
            </span>
            <span
              style={{
                fontSize: "clamp(64px, 10vw, 120px)",
                background: "linear-gradient(90deg, #FA521A 0%, #00FFFC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                lineHeight: 1.1
              }}>
              przyszłości
            </span>
          </h1>
        </motion.div>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground font-medium text-center mb-4"
          style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>

          Do 100% dofinansowania dla firm i osób indywidualnych
        </motion.p>

        {/* 4. Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-center max-w-2xl mb-8 leading-relaxed"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>

          Wypełnij formularz, złożymy dla Ciebie bezpłatny wniosek o dofinansowanie. Zdobądź kompetencje w AI, marketingu i sprzedaży.
        </motion.p>

        {/* 5. CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16">

          <button
            className="bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            style={{ minHeight: "56px", boxShadow: "0 8px 30px hsl(var(--orange) / 0.4)" }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 12px 40px hsl(var(--orange) / 0.6)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 8px 30px hsl(var(--orange) / 0.4)"}
            onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>

            Uzyskaj dofinansowanie
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* 6. Logo Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full mb-16">

          <LogoSlider />
        </motion.div>

        {/* 7. Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-lg mb-6">

          <HeroForm />
        </motion.div>

        {/* 8. Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-muted-foreground text-center mb-20 max-w-md">

          Współpracujemy z partnerem dotacyjnym: DofinansujTo.pl (weryfikacja i prowadzenie wniosku).
        </motion.p>

        {/* 9. Stats Cards */}
        





















      </div>
    </section>);

};