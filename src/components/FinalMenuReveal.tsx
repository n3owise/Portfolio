import { useRef } from 'react';
import { ArrowUp, Menu as MenuIcon, Orbit } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';

const MENU_LINKS = ['About', 'Collection', 'Projects', 'Approach', 'Contact'];

function mapHref(label: string): string {
  if (label === 'About') return '#about';
  if (label === 'Projects') return '#archive';
  if (label === 'Contact') return '#contact';
  return '#';
}

export default function FinalMenuReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  const dockOpacity = useTransform(scrollYProgress, [0, 0.72, 0.82, 1], [1, 1, 0, 0]);
  const dockScale = useTransform(scrollYProgress, [0, 0.72, 0.82, 1], [1, 1, 0.94, 0.94]);
  const dockY = useTransform(
    scrollYProgress,
    [0, 0.72, 0.82, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [0, 0, 18, 18],
  );

  const cardOpacity = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1]);
  const cardScale = useTransform(
    scrollYProgress,
    [0.7, 0.9, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.96, 1, 1],
  );
  const cardY = useTransform(
    scrollYProgress,
    [0.7, 0.9, 1],
    shouldReduceMotion ? [0, 0, 0] : [24, 0, 0],
  );

  const upOpacity = useTransform(scrollYProgress, [0.82, 0.92, 1], [0, 1, 1]);
  const ghostOpacity = useTransform(scrollYProgress, [0.75, 0.92, 1], [0.04, 0.11, 0.11]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] border-t-4 border-ink bg-black"
      aria-label="Final navigation reveal"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/projects/farmest/front.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.58)_45%,rgba(0,0,0,0.74)_100%)]" />

        <motion.div
          style={{ opacity: ghostOpacity }}
          className="pointer-events-none absolute bottom-[12%] left-1/2 z-10 w-full -translate-x-1/2 text-center"
          aria-hidden="true"
        >
          <p className="select-none text-[clamp(4rem,16vw,16rem)] font-black uppercase tracking-[0.04em] text-paper">
            STUDIO
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: dockOpacity, scale: dockScale, y: dockY }}
          className="absolute inset-x-0 bottom-6 z-30 flex justify-center px-4 md:bottom-8"
        >
          <div className="flex w-[min(92vw,510px)] items-center justify-between rounded-2xl border border-white/15 bg-black/85 px-5 py-3 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.32)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-paper">
              <Orbit size={16} strokeWidth={2} />
            </span>
            <span className="text-xs uppercase tracking-[0.32em] font-semibold text-paper/90">Home</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-paper">
              <MenuIcon size={16} strokeWidth={2} />
            </span>
          </div>
        </motion.div>

        <div className="absolute inset-0 z-40 flex items-center justify-center px-4">
          <motion.div
            style={{ opacity: cardOpacity, scale: cardScale, y: cardY }}
            className="w-[min(92vw,820px)] rounded-[28px] border border-white/15 bg-[rgba(8,8,8,0.76)] p-6 text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10"
          >
            <p className="text-[10px] uppercase tracking-[0.34em] text-paper/65">Menu</p>

            <nav className="mt-5 md:mt-7" aria-label="Final section menu">
              <ul className="space-y-1 md:space-y-2">
                {MENU_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={mapHref(link)}
                      className="inline-block text-[clamp(2rem,6.3vw,4.7rem)] leading-[0.9] font-serif text-paper transition-colors duration-300 hover:text-paper/70"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 grid grid-cols-2 gap-6 text-[11px] uppercase tracking-[0.16em] text-paper/58 md:mt-10 md:gap-12 md:text-xs">
              <div className="space-y-2">
                <p>News</p>
                <p>Showroom</p>
              </div>
              <div className="space-y-2 text-right md:text-left">
                <p>+91 98086 55625</p>
                <p>amanverma.zip@gmail.com</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-white/10 bg-black/75 py-4 text-sm uppercase tracking-[0.22em] text-paper transition-colors duration-300 hover:bg-black md:mt-10"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: upOpacity }}
          className="absolute inset-x-0 bottom-5 z-50 flex justify-center md:bottom-7"
        >
          <button
            onClick={scrollToTop}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black/75 text-paper backdrop-blur-md transition-colors duration-300 hover:bg-black"
            aria-label="Scroll to top"
          >
            <ArrowUp size={17} strokeWidth={2.2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
