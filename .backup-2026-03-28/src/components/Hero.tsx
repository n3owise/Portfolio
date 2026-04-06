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
    <section ref={containerRef} className="py-12 px-6 md:px-12 border-b-4 border-ink bg-paper">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-8 border-b md:border-b-0 md:border-r border-ink pb-8 md:pb-0 md:pr-12">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] font-serif uppercase tracking-tighter mb-8 font-black">
            <span className="reveal-text-wrapper block"><span className="reveal-text">AI Content</span></span>
            <span className="reveal-text-wrapper block"><span className="reveal-text">Creator &</span></span>
            <span className="reveal-text-wrapper block"><span className="reveal-text">Designer.</span></span>
          </h2>
          <div className="newspaper-col text-lg font-serif leading-relaxed text-ink/90">
            <p className="fade-in drop-cap">
              In an era defined by rapid technological advancement, the intersection of artificial intelligence and creative design has become the new frontier. I craft digital experiences, edit engaging videos, and design intuitive interfaces, with a specialized focus on leveraging modern AI tools to push the boundaries of what's possible.
            </p>
            <p className="fade-in mt-4">
              Every project is an opportunity to blend the precision of user interface design with the artistry of visual storytelling, creating compelling narratives for the digital age.
            </p>
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
              Bridging the gap between human creativity and machine efficiency to deliver unparalleled digital experiences.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
