import { motion } from "motion/react";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-0 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-snapchat/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-snapchat/10 border border-snapchat/20 text-snapchat text-xs font-bold tracking-widest uppercase mb-6">
          Deviens un expert. • FORMATION 2026
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8 font-display break-words">
          ARRÊTE DE <span className="text-snapchat">SCROLLER</span>,<br />
          DEVENEZ UN <span className="text-snapchat">EXPERT</span>.<br />
          SUR SNAPCHAT
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 relative group max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-snapchat/10 blur-3xl rounded-full -z-10 group-hover:bg-snapchat/20 transition-colors" />
          <img
            src="https://image.noelshack.com/fichiers/2026/13/7/1774793306-chatgpt-image-29-mars-2026-16-01-59.jpg"
            alt="Formation Snapchat Expert"
            className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl glow-yellow"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-w-lg mx-auto backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
             <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
               OFFRE LANCEMENT
             </span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-baseline gap-4">
              <span className="text-white/40 line-through text-2xl font-bold italic">249,99 €</span>
              <span className="text-snapchat text-6xl md:text-7xl font-black tracking-tighter">29,99€</span>
            </div>

            <motion.a
              href="https://wa.me/33757828250?text=Bonjour%2C%20je%20me%20permets%20de%20vous%20contacter%20car%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20formation%20Snapchat."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-snapchat text-black py-6 rounded-2xl font-black text-xl tracking-tight uppercase shadow-[0_0_30px_rgba(255,252,0,0.3)] hover:shadow-[0_0_50px_rgba(255,252,0,0.5)] transition-all flex items-center justify-center gap-3"
            >
              PRENDRE LA FORMATION
            </motion.a>

            <p className="text-white text-xs font-medium uppercase tracking-widest">
              Offre limitée
            </p>

            <div className="mt-4 pt-4 border-t border-white/5 w-full">
              <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                Paiement sécurisé
              </p>
              <div className="flex justify-center items-center gap-6">
                <span className="text-white font-black text-xs italic tracking-tighter">SUMUP</span>
                <span className="text-white font-black text-xs italic tracking-tighter">VISA</span>
                <span className="text-white font-black text-xs italic tracking-tighter">MASTERCARD</span>
              </div>
            </div>
          </div>
        </motion.div>

        <Countdown />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative flex justify-center"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-snapchat/20 rounded-full blur-[60px] -z-10" />
          <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-sm relative w-full max-w-[350px] aspect-[9/16] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/xhAs8UEmejY?autoplay=0&controls=1&modestbranding=1&rel=0"
              title="Snapchat Expert Video"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
