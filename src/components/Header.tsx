import { useEffect, useMemo, useState } from 'react';

export default function Header() {
  const [now, setNow] = useState(new Date());

  const date = useMemo(
    () =>
      now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
    [now]
  );

  const time = useMemo(
    () =>
      now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }),
    [now]
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <header
      className="w-full bg-paper pt-8 pb-4 px-4 sm:px-6 md:px-12 flex flex-col items-center relative z-50"
      data-intro-target="header"
    >
      <div className="w-full flex justify-between items-end border-b-2 border-ink pb-2 mb-4 text-xs md:text-sm font-serif uppercase tracking-widest font-bold gap-3">
        <span>The Portfolio Studio</span>
        <span className="text-right">{date} | {time}</span>
      </div>
      <h1 className="text-[clamp(2.5rem,10vw,7.5rem)] font-serif font-black uppercase tracking-tight leading-none text-center mb-4 break-words">
        Aman Verma
      </h1>
      <div className="w-full flex justify-between items-center border-t-2 border-b-4 border-ink py-2 text-xs md:text-sm uppercase tracking-widest font-bold gap-3">
        <span className="truncate max-w-[45%] md:max-w-none">Agra, India</span>
        <span className="hidden md:block">Design & AI Content</span>
        <span>25 Cents</span>
      </div>
    </header>
  );
}
