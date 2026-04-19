import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // We'll set a target date 2 days from now for the demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-3 min-w-[70px] sm:min-w-[90px]">
      <span className="text-2xl sm:text-3xl font-black text-snapchat">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/50">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      <TimeUnit value={timeLeft.days} label="j" />
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}
