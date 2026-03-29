import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Passage en compte professionnel.",
  "Sécurisation totale contre le piratage",
  "Optimisation de votre profil pour l'algorithme",
  "Techniques pour apparaître dans les tendances",
  "Stratégies de monétisation exclusives",
];

export function FinalBenefit() {
  return (
    <section className="pb-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
        >
          <CheckCircle className="text-snapchat w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-bold text-white/80">
            Après la formation, vous aurez accès à une application contenant de nombreuses autres formations et conseils.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default function SocialProof() {
  return (
    <section className="pt-12 pb-12 px-4 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] font-display text-center">
            POURQUOI CHOISIR <br />
            <span className="text-snapchat">CETTE FORMATION ?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="text-snapchat w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-bold text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
