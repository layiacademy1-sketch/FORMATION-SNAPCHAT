import { Check, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Formation Seule",
    price: "29,99",
    originalPrice: "99,99",
    description: "L'essentiel pour démarrer et monétiser votre compte Snapchat.",
    features: [
      "Accès complet à la formation 2026",
      "Toutes les stratégies de croissance",
      "Méthodes de monétisation directe",
      "Mises à jour gratuites à vie",
      "Support par email",
    ],
    buttonText: "Choisir la formation",
    popular: false,
  },
  {
    name: "Formation + Accompagnement",
    price: "99,99",
    originalPrice: "250",
    description: "Le pack ultime pour ceux qui veulent des résultats garantis et rapides.",
    features: [
      "Tout le contenu de la formation seule",
      "Accompagnement personnalisé (1h)",
      "Accès au groupe privé Telegram",
      "Support prioritaire 24/7",
      "Audit de votre compte Snapchat",
      "Templates de stories exclusifs",
    ],
    buttonText: "Choisir l'accompagnement",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 font-display">
            CHOISISSEZ VOTRE <span className="text-snapchat">SUCCÈS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Deux options simples pour transformer votre présence sur Snapchat en une véritable machine à revenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white/5 border ${
                plan.popular ? "border-snapchat shadow-[0_0_40px_rgba(255,252,0,0.1)]" : "border-white/10"
              } rounded-3xl p-8 md:p-10 flex flex-col h-full backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-snapchat text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-3 h-3 fill-current" />
                  Le plus populaire
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-white/20 line-through text-xl font-bold italic">
                    {plan.originalPrice}€
                  </span>
                  <span className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                    {plan.price}€
                  </span>
                </div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  Paiement unique • Accès à vie
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-snapchat/10 rounded-full p-0.5">
                      <Check className="text-snapchat w-4 h-4" />
                    </div>
                    <span className="text-white/70 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-black text-lg tracking-tight uppercase transition-all ${
                  plan.popular
                    ? "bg-snapchat text-black shadow-[0_0_30px_rgba(255,252,0,0.2)] hover:shadow-[0_0_50px_rgba(255,252,0,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
            Paiement 100% sécurisé via Sumup
          </p>
          <div className="flex justify-center items-center gap-8 opacity-40 grayscale">
             {/* Simple placeholders for payment icons */}
             <div className="text-white font-black text-xl italic tracking-tighter">VISA</div>
             <div className="text-white font-black text-xl italic tracking-tighter">MASTERCARD</div>
             <div className="text-white font-black text-xl italic tracking-tighter">APPLE PAY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
