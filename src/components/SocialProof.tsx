import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Passage en compte professionnel.",
  "Sécurisation totale contre le piratage",
  "Optimisation de votre profil pour l'algorithme",
  "Techniques pour apparaître dans les tendances",
  "Stratégies de monétisation exclusives",
  "Conseils pour gagner avoir plus d'abonnées.",
];

export default function SocialProof() {
  return (
    <section className="pt-12 pb-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] font-display">
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-snapchat/20 rounded-full blur-[60px] -z-10" />
          <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-sm relative w-full max-w-[350px] aspect-[9/16] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/S8EhoWDFY18?autoplay=1&mute=1&loop=1&playlist=S8EhoWDFY18&controls=0&modestbranding=1&rel=0"
              title="Snapchat Expert Video"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
