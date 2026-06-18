import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, UI/UX design, brand identity, and mobile app development. I help translate your ideas into polished, responsive digital experiences."
  },
  {
    question: "How much do your services cost?",
    answer: "Project costs vary depending on the scope, complexity, and timeline. Please reach out via the contact form with your project details to get a personalized quote."
  },
  {
    question: "What is your typical process?",
    answer: "My process usually involves: 1) Initial discovery and requirements gathering, 2) Design and prototyping, 3) Development and iteration, 4) Testing and deployment, and 5) Ongoing support if needed."
  },
  {
    question: "Do you design and develop?",
    answer: "Yes, I offer both design and development services. I can take your project from the initial concept and wireframes all the way through to the final coded product."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard landing page might take 2-3 weeks, while a more complex full-stack application could take several months. I will provide a clear timeline during our initial discussions."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-2 rounded-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-display text-xl md:text-2xl font-medium text-white group-hover:text-brand-1 transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-secondary/50"
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/50 relative z-10 w-full border-t border-white/5" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Frequently Asked <span className="text-brand-1">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Answers to common questions about my workflow and services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="bg-secondary p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
