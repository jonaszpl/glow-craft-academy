import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Tag, Percent, Clock, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { LogoSlider } from "./LogoSlider";
import { HeroForm } from "./HeroForm";

const bullets = [
  "80% praktyki: pracujemy na Twoich procesach i narzędziach",
  "Szybka kwalifikacja: wracamy z informacją OK / do uzupełnienia",
  "Jasne zasady: wkład własny zwykle ok. 20% + refundacja po ok. 45–50 dniach (zależnie od programu)",
];

const stats = [
  { icon: Tag, title: "Cena szkolenia", value: "3 000 pln netto", subtitle: "na osobę" },
  { icon: Percent, title: "Cena po dofinansowaniu", value: "80%", subtitle: "600 pln netto" },
  { icon: Clock, title: "Czas szkolenia", value: "16 h", subtitle: "stacjonarnie lub online" },
  { icon: FileText, title: "Bezpłatny wniosek", value: "", subtitle: "o dofinansowanie" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-hero opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* 1. Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-foreground">
            Szkolenia AI z dofinansowaniem dla firm
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Zrób z AI i automatyzacji realny system w firmie — nie kolejną prezentację.
            <br className="hidden md:block" />
            Najpierw sprawdzimy, czy Twoja firma kwalifikuje się do dofinansowania.
          </p>
        </motion.div>

        {/* 2. Bullet Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 mb-12 max-w-2xl"
        >
          {bullets.map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm md:text-base">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* 3. Logo Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mb-12"
        >
          <LogoSlider />
        </motion.div>

        {/* 4. Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-lg mb-6"
        >
          <HeroForm />
        </motion.div>

        {/* 5. Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-muted-foreground text-center mb-16 max-w-md"
        >
          Współpracujemy z partnerem dotacyjnym: DofinansujTo.pl (weryfikacja i prowadzenie wniosku).
        </motion.p>

        {/* 6. Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 text-center flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-1">
                <stat.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xs text-muted-foreground">{stat.title}</span>
              {stat.value && (
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              )}
              <span className="text-xs text-muted-foreground">{stat.subtitle}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
