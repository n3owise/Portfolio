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
    "Design-first thinking,",
    "AI-accelerated execution.",
    "Clear interfaces,",
    "strong visual outcomes."
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 border-b-4 border-ink bg-paper text-ink">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-ink pb-8 md:pb-0 md:pr-8">
          <h2 className="text-2xl font-serif uppercase tracking-widest font-black mb-8 border-b-2 border-ink pb-2">Editorial: About Me</h2>
          <div className="font-serif text-lg leading-relaxed text-ink/90">
            <p className="mb-4">
              I am a multidisciplinary creator focused on websites, app interfaces, branding, and AI-generated visual content.
            </p>
            <p>
              I care about outcomes: better communication, stronger product presentation, and faster project delivery.
            </p>
          </div>
        </div>
        <div className="md:col-span-8 md:pl-8">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.08] font-black mb-12 tracking-tight border-l-4 border-ink pl-5">
            {textLines.map((line, index) => (
              <span key={index} className="reveal-text-wrapper block">
                <span className="reveal-text about-text">{line}</span>
              </span>
            ))}
          </h3>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 mb-12 max-w-3xl">
            I focus on practical design decisions that improve readability, interaction, and delivery speed across web, mobile, and AI-led creative work.
          </p>

          <div className="fade-up-trigger grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-widest font-bold">
            <div className="fade-up border-t-2 border-ink pt-4">
              <h4 className="mb-6 font-serif text-xl font-black">What I Bring</h4>
              <ul className="space-y-3 font-serif">
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>UI / UX Design</span> <span>01</span></li>
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>Frontend Build</span> <span>02</span></li>
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>Branding & Packaging</span> <span>03</span></li>
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>App Product Thinking</span> <span>04</span></li>
              </ul>
            </div>
            <div className="fade-up border-t-2 border-ink pt-4">
              <h4 className="mb-6 font-serif text-xl font-black">AI & Tool Stack</h4>
              <ul className="space-y-3 font-serif">
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>Video AI: Veo 3 / Sora 2 / Kling</span> <span>01</span></li>
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>Image Gen: Grok Imagine / Higgsfield / Nano Banana</span> <span>02</span></li>
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>AI Coding: Cursor / GitHub Copilot / VS Code / Antigravity / Claude</span> <span>03</span></li>
                <li className="flex justify-between border-b border-ink/20 pb-2"><span>LLMs: Gemini / GPT / Kimi / DeepSeek</span> <span>04</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
