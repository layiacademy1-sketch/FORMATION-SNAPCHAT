import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Benefit {
  title: string;
  description?: string;
}

const benefits: Benefit[] = [
  {
    title: "Passage en compte professionnel.",
    description: "Passer ton compte Snapchat en compte professionnel permet de mieux sécuriser ton compte, accéder à des statistiques, gagner en visibilité grâce aux recommandations (Spotlight, Discover), atteindre la monétisation et choisir une catégorie (créateur, entreprise, etc.)."
  },
  {
    title: "Sécurisation totale contre le piratage",
    description: "Cela évite la suppression de ton compte en cas de signalement. Si ton compte est bloqué, il est possible de le récupérer seulement s’il était en compte professionnel et que tu possèdes le numéro d’identification de l’organisation."
  },
  {
    title: "Optimisation de votre profil pour l'algorithme",
    description: "Nous allons voir ensemble comment tu peux bien optimiser ton profil Snapchat pour qu’il soit performant et qu’il rentre dans l’algorithme de Snapchat."
  },
  {
    title: "Techniques pour apparaître dans les tendances",
    description: "Nous allons vous apprendre les techniques pour être dans les tendances, afin que votre compte Snapchat soit plus visible dans votre ville, puis dans votre région, et enfin dans toute la France."
  },
  {
    title: "Stratégies de monétisation exclusives",
    description: "Nous allons voir ensemble toutes les techniques de monétisation, pour être rémunéré par Snapchat, mais aussi comment monétiser l’audience que vous avez déjà, en dehors de Snapchat."
  },
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

function BenefitCard({ benefit, index }: { benefit: Benefit, index: number, key: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDescription = 'description' in benefit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors flex flex-col gap-3"
    >
      <div className="flex items-center gap-3 w-full">
        <CheckCircle className="text-snapchat w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-bold text-white/80 flex-grow">{benefit.title}</span>
        {hasDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] uppercase tracking-wider font-black text-snapchat flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            En savoir plus
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="w-3 h-3" />
            </motion.div>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && hasDescription && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-white/5 text-[11px] leading-relaxed text-white/60 font-medium lowercase first-letter:uppercase">
              {benefit.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
