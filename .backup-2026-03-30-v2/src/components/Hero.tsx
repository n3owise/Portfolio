import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal-text', {
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.1,
        delay: 4.2,
      });
      
      gsap.from('.fade-in', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 4.6,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="py-10 md:py-12 px-4 sm:px-6 md:px-12 border-b-4 border-ink bg-paper">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12">
        <div className="md:col-span-8 border-b md:border-b-0 md:border-r border-ink pb-8 md:pb-0 md:pr-10 lg:pr-12">
          <p className="fade-in text-xs md:text-sm uppercase tracking-[0.2em] font-bold border-b border-ink/30 pb-3 mb-5">
            UI/UX Designer | AI Content Creator
          </p>
          <h2 className="max-w-[12ch] text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.92] font-serif uppercase tracking-tight mb-7 md:mb-8 font-black">
            <span className="reveal-text-wrapper block"><span className="reveal-text">AI Content</span></span>
            <span className="reveal-text-wrapper block"><span className="reveal-text">Creator &</span></span>
            <span className="reveal-text-wrapper block"><span className="reveal-text">Designer.</span></span>
          </h2>
          <div className="text-base md:text-lg font-serif leading-8 text-ink/90 max-w-3xl">
            <p className="fade-in">
              I craft interfaces, AI visuals, and polished product stories that help companies launch faster and communicate clearly.
            </p>
            <p className="fade-in mt-4">
              I combine design fundamentals with AI-first workflows to deliver practical, high-quality outcomes.
            </p>
          </div>

          <div className="fade-in mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:amanverma.zip@gmail.com?subject=Resume%20Request%20-%20Aman%20Verma"
              className="ui-action-light w-full sm:w-auto"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="ui-action-light w-full sm:w-auto"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col">
          <h3 className="fade-in text-2xl font-serif uppercase border-b-2 border-ink pb-2 mb-4 font-black">Latest Updates</h3>
          <ul className="fade-in space-y-6 font-serif text-base">
            <li className="border-b border-ink/30 pb-4">
              <span className="block font-black uppercase mb-1 text-xl">Breaking</span>
              New AI video generation techniques implemented in recent workflow, reducing production time by 40%.
            </li>
            <li className="border-b border-ink/30 pb-4">
              <span className="block font-black uppercase mb-1 text-xl">Design</span>
              Minimalist UI systems continue to dominate the digital landscape, emphasizing typography and grid layouts.
            </li>
            <li>
              <span className="block font-black uppercase mb-1 text-xl">Focus</span>
              Delivering clear product communication with modern AI-assisted creative workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
