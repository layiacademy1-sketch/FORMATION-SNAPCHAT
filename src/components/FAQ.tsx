import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Est-ce que cette formation est adaptée aux débutants ?",
    answer: "Absolument. Nous partons de zéro : de la création du compte à la monétisation. Pas besoin de connaissances techniques préalables.",
  },
  {
    question: "Combien de temps faut-il pour voir les premiers résultats ?",
    answer: "Si vous appliquez les méthodes sérieusement, vous pouvez voir vos premiers abonnés arriver dès les 48 premières heures.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer: "Oui, nous utilisons Sumup, paiement en ligne sécurisé. Vos données sont 100% protégées.",
  },
  {
    question: "Comment vais-je recevoir ma formation ?",
    answer: "Dès que votre paiement est validé, vous recevrez un email avec un lien de téléchargement instantané pour tous les ebooks.",
  },
  {
    question: "Y a-t-il des mises à jour ?",
    answer: "Oui, l'algorithme de Snapchat évolue. Vous recevrez toutes les mises à jour de 2026 gratuitement par email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-12 pb-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 font-display">
            FOIRE AUX <span className="text-snapchat">QUESTIONS</span>
          </h2>
          <p className="text-white/60 text-lg">
            Tout ce que vous devez savoir avant de passer à l'action.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="text-lg font-black uppercase tracking-tighter text-white/90">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-snapchat w-6 h-6" />
                ) : (
                  <ChevronDown className="text-white/40 w-6 h-6" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
