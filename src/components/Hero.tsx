import { useEffect } from "react";
import { motion } from "motion/react";
import Countdown from "./Countdown";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

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
          className="bg-white/5 border border-white/10 rounded-3xl p-0 sm:p-8 md:p-12 max-w-xl mx-auto backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 z-10">
             <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
               Offre à durée limitée
             </span>
          </div>

          <div className="flex flex-col items-center pt-12 sm:pt-6 gap-6">
            <div className="flex items-baseline gap-4 px-4 sm:px-0">
              <span className="text-white/40 line-through text-lg md:text-xl font-bold italic whitespace-nowrap">149,99 €</span>
              <span className="text-snapchat text-5xl md:text-6xl font-black tracking-tighter whitespace-nowrap">49,99 €</span>
            </div>

            <div className="w-full px-4 sm:px-0">
              <Countdown />
            </div>

            <h3 className="text-white text-lg md:text-xl font-black uppercase tracking-tighter leading-tight px-4 sm:px-0 flex items-center gap-3">
              <span className="w-2 h-2 bg-snapchat rounded-full animate-pulse shadow-[0_0_10px_#FFFC00]" />
              Réservez votre créneau pour la formation
            </h3>

            <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/consultingoff/rdv?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ width: '100%', minWidth: '320px', height: '450px' }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-16 flex justify-center"
        >
          <motion.a
            href="https://www.snapchat.com/add/layiagency"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,252,0,0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-black border-2 border-snapchat text-snapchat px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wider shadow-[0_0_40px_rgba(255,252,0,0.5)] transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              <motion.span
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.15, 1],
                  rotate: [-5, 5, -5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.2,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <svg className="w-10 h-10 fill-snapchat drop-shadow-[0_0_12px_rgba(255,252,0,0.9)]" viewBox="0 0 24 24">
                  <path d="M12 2.75c-4.42 0-8 3.58-8 8 0 3.1 1.76 5.79 4.34 7.14l-.34.34c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.34-.34C10.21 19.83 11.08 20 12 20s1.79-.17 2.25-.75l.34.34c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.34-.34C18.24 16.54 20 13.85 20 10.75c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </motion.span>
              Nous suivre sur Snapchat
            </span>
            
            {/* Shine Effect */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-20"
            />

            {/* Pulsing Backlight */}
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute inset-0 bg-snapchat rounded-2xl blur-3xl -z-10" 
            />
          </motion.a>
        </motion.div>

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
