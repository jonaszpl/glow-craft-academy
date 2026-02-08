import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ForWhoSection } from "@/components/ForWhoSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ModulesSection } from "@/components/ModulesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ForWhoSection />
        <CoursesSection />
        <ModulesSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
