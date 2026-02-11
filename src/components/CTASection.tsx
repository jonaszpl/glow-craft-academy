import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";
import { Button } from "./ui/button";
export const CTASection = () => {
  return <section className="section-padding bg-primary-foreground">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="relative overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />

          <div className="relative glass rounded-3xl p-8 md:p-16 text-center bg-secondary-foreground">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Bezpłatna konsultacja
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Masz pytania? Umów{" "}
              <span className="text-gradient">darmową konsultację</span>
            </h2>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Uzyskaj do 100% dofinansowania na wybrane szkolenie. 
              Nasi eksperci pomogą Ci dobrać idealny kurs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Umów konsultację
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl">
                Odbierz darmowy ebook
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
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
        </motion.div>
      </div>
    </section>;
};