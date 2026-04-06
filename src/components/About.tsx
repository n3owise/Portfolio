import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.about-text', {
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
      
      gsap.from('.fade-up', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.fade-up-trigger',
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textLines = [
    'Design clarity.',
    'AI speed.',
    'Production-ready outcomes.'
  ];

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 px-4 sm:px-6 md:px-12 border-b-4 border-ink bg-paper text-ink">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-ink pb-8 md:pb-0 md:pr-8">
          <h2 className="text-2xl font-serif uppercase tracking-widest font-black mb-8 border-b-2 border-ink pb-2">Editorial: About Me</h2>
          <div className="font-serif text-base md:text-lg leading-8 text-ink/90 space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Who I am</h3>
              <p>UI/UX-focused creative professional combining product design thinking with AI-assisted execution.</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-2">What I build</h3>
              <p>Web experiences, branded visuals, mobile-first interfaces, and AI-powered media assets.</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-2">What impact I create</h3>
              <p>Clearer communication, faster delivery cycles, and higher quality presentation for products and brands.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            <div className="border-2 border-ink px-3 py-4 min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-2xl font-serif font-black leading-none">4</p>
              <p className="mt-3 min-h-[3.4rem] flex items-center justify-center text-[10px] leading-[1.35] uppercase tracking-widest font-bold">Projects</p>
            </div>
            <div className="border-2 border-ink px-3 py-4 min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-2xl font-serif font-black leading-none">1</p>
              <p className="mt-3 min-h-[3.4rem] flex items-center justify-center text-[10px] leading-[1.35] uppercase tracking-widest font-bold">Play Store App</p>
            </div>
            <div className="border-2 border-ink px-3 py-4 min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-2xl font-serif font-black leading-none">AI+</p>
              <p className="mt-3 min-h-[3.4rem] flex items-center justify-center text-[10px] leading-[1.35] uppercase tracking-widest font-bold">Design Workflow</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 md:pl-8">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.08] font-black mb-10 tracking-tight border-l-4 border-ink pl-5">
            {textLines.map((line, index) => (
              <span key={index} className="reveal-text-wrapper block">
                <span className="reveal-text about-text">{line}</span>
              </span>
            ))}
          </h3>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 mb-10 max-w-3xl">
            I use AI as a production accelerator while keeping decisions grounded in layout, usability, and narrative clarity.
          </p>
          
          <div className="fade-up-trigger grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm uppercase tracking-widest font-bold">
            <div className="fade-up border-t-2 border-ink pt-4">
              <h4 className="mb-6 font-serif text-xl font-black">What I Bring</h4>
              <ul className="space-y-3 font-serif">
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>UI / UX Design</span> <span>01</span></li>
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>Frontend Build</span> <span>02</span></li>
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>Branding / Packaging</span> <span>03</span></li>
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>Product Storytelling</span> <span>04</span></li>
              </ul>
            </div>
            <div className="fade-up border-t-2 border-ink pt-4">
              <h4 className="mb-6 font-serif text-xl font-black">AI & Tool Stack</h4>
              <ul className="space-y-3 font-serif">
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>Video AI: Veo 3 / Sora 2 / Kling</span> <span>01</span></li>
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>Image Gen: Grok Imagine / Higgsfield / Nano Banana</span> <span>02</span></li>
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>AI Coding: Cursor / Copilot / VS Code</span> <span>03</span></li>
                <li className="flex items-start justify-between gap-3 border-b border-ink/20 pb-2"><span>LLMs: Gemini / GPT / Kimi / DeepSeek</span> <span>04</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
