import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('amanverma.zip@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.contact-text', {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 bg-ink text-paper">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
        <div className="md:col-span-7 lg:col-span-8 border-b md:border-b-0 md:border-r border-paper/30 pb-10 md:pb-0 md:pr-8 lg:pr-12">
          <span className="inline-block mb-4 border border-paper/40 bg-paper/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-bold">
            Open to Work
          </span>
          <h2 className="max-w-[12ch] text-[clamp(2.4rem,6.8vw,5.6rem)] font-serif uppercase leading-[0.9] tracking-tight mb-6 md:mb-10 font-black break-words">
            <span className="reveal-text-wrapper block"><span className="reveal-text contact-text text-paper">Let's</span></span>
            <span className="reveal-text-wrapper block"><span className="reveal-text contact-text text-paper">Collaborate.</span></span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-serif max-w-2xl leading-relaxed text-paper/80">
            Open to full-time and contract roles in UI/UX, product design, and AI-powered visual content.
          </p>
        </div>
        
        <div className="md:col-span-5 lg:col-span-4 md:pl-8 lg:pl-10 flex flex-col justify-between">
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold border-b-2 border-paper pb-2 mb-6">Contact Information</h3>
            <div className="space-y-6 font-serif">
              <div>
                <span className="block text-xs uppercase tracking-widest text-paper/50 mb-2">Email</span>
                <div className="grid grid-cols-1 gap-2">
                  <a href="mailto:amanverma.zip@gmail.com" className="ui-action-dark w-full text-sm normal-case tracking-normal sm:justify-start break-all">amanverma.zip@gmail.com</a>
                  <button onClick={copyEmail} className="ui-action-dark w-full text-sm normal-case tracking-normal">
                    {copied ? 'Copied' : 'Copy Email'}
                  </button>
                </div>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-paper/50 mb-2">Links</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a href="tel:+919808655625" className="ui-action-dark w-full text-sm normal-case tracking-normal">Phone</a>
                  <a href="https://www.linkedin.com/in/amanverma-zip/" target="_blank" rel="noreferrer" className="ui-action-dark w-full text-sm normal-case tracking-normal">LinkedIn</a>
                  <a href="https://x.com/amanverma_zip" target="_blank" rel="noreferrer" className="ui-action-dark w-full text-sm normal-case tracking-normal">X</a>
                  <a href="mailto:amanverma.zip@gmail.com?subject=Resume%20Request%20-%20Aman%20Verma" className="ui-action-dark w-full text-sm normal-case tracking-normal">View Resume</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 md:mt-12 pt-7 border-t border-paper/30 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 text-xs uppercase tracking-widest font-bold">
            <span>© {new Date().getFullYear()} Aman Verma</span>
            <span>Updated: Mar 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
