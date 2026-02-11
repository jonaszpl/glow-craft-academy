import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Czy podczas programu są rozmowy wideo?",
  answer: "Tak, program obejmuje regularne sesje wideo z mentorami oraz grupowe warsztaty online. Każdy uczestnik ma dostęp do indywidualnych konsultacji z ekspertami."
}, {
  question: "Czy mogę porozmawiać o negocjacjach cenowych?",
  answer: "Oczywiście! Oferujemy elastyczne opcje płatności oraz możliwość dofinansowania do 100% wartości szkolenia. Skontaktuj się z nami, aby omówić indywidualne warunki."
}, {
  question: "Czy poznam innych uczestników programu?",
  answer: "Zdecydowanie tak. Budowanie społeczności to kluczowy element naszych szkoleń. Organizujemy networking sessions, grupowe projekty i dostęp do zamkniętej społeczności absolwentów."
}, {
  question: "Czy jestem wystarczająco zaawansowany, żeby z Wami pracować?",
  answer: "Nasze szkolenia są dostosowane do różnych poziomów zaawansowania. Przed rozpoczęciem przeprowadzamy assessment, który pomoże dobrać odpowiedni program i ścieżkę rozwoju."
}, {
  question: "Co jeśli nie ukończę zadania?",
  answer: "Rozumiemy, że życie bywa nieprzewidywalne. Oferujemy elastyczne terminy i możliwość nadrobienia materiału. Nasi mentorzy są zawsze gotowi pomóc w przypadku trudności."
}, {
  question: "Co dostanę w ramach programu?",
  answer: "Program obejmuje: dostęp do platformy edukacyjnej, materiały wideo i pisemne, sesje mentorskie, warsztaty praktyczne, certyfikat ukończenia, dostęp do społeczności absolwentów oraz wsparcie przez 6 miesięcy po zakończeniu."
}, {
  question: "Czy znajdę odpowiedź na moje aktualne wyzwania w programie?",
  answer: "Nasze szkolenia są projektowane z myślą o praktycznych wyzwaniach biznesowych. Dodatkowo, podczas sesji mentorskich możesz pracować bezpośrednio nad swoimi case'ami i problemami."
}];
export const FAQSection = () => {
  return <section id="faq" className="section-padding bg-primary-foreground">
      <div className="container mx-auto max-w-4xl">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-foreground">
            Często zadawane <span className="text-secondary-foreground">pytania</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Znajdź odpowiedzi na najczęściej zadawane pytania
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <Accordion type="single" collapsible className="space-y-4 text-muted bg-muted pl-[12px] px-[20px] py-[20px] rounded-2xl">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="glass rounded-xl px-6 border-0 data-[state=open]:bg-white/10">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </motion.div>
      </div>
    </section>;
};