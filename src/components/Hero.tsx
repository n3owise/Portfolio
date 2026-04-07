import React, { useRef } from 'react';

interface HeroProps {
  isReady?: boolean;
}

export default function Hero({ isReady = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" ref={containerRef} className="py-10 md:py-12 px-4 sm:px-6 md:px-12 border-b-4 border-ink bg-paper relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12">
        <div
          className="md:col-span-8 border-b md:border-b-0 md:border-r border-ink pb-8 md:pb-0 md:pr-10 lg:pr-12"
          data-intro-target="hero-main"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold border-b border-ink/30 pb-3 mb-5">
            UI/UX Designer | AI Content Creator
          </p>
          <h2 className="max-w-[12ch] text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.92] font-serif uppercase tracking-tight mb-7 md:mb-8 font-black">
            <span className="block">AI Content</span>
            <span className="block">Creator &</span>
            <span className="block">Designer.</span>
          </h2>
          <div className="text-base md:text-lg font-serif leading-8 text-ink/90 max-w-3xl">
            <p>
              I craft interfaces, AI visuals, and polished product stories that help companies launch faster and communicate clearly.
            </p>
            <p className="mt-4">
              I combine design fundamentals with AI-first workflows to deliver practical, high-quality outcomes.
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://drive.google.com/file/d/11mS5p6XhVpqVlQxJNW2zUOm1BJOYzynX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="ui-action-light w-full sm:w-auto"
            >
              View Resume
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#contact');
                if (target) {
                  if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(target, {
                      duration: 2.2,
                      easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
                    });
                  } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="ui-action-light w-full sm:w-auto"
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col" data-intro-target="hero-side">
          <h3 className="text-2xl font-serif uppercase border-b-2 border-ink pb-2 mb-4 font-black">Latest Updates</h3>
          <ul className="space-y-6 font-serif text-base">
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
