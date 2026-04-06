import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section ref={containerRef} className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-ink text-paper">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-8 border-b md:border-b-0 md:border-r border-paper/30 pb-12 md:pb-0 md:pr-12">
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-serif uppercase leading-[0.9] tracking-tight mb-8 md:mb-12 font-black break-words">
            <span className="reveal-text-wrapper block"><span className="reveal-text contact-text text-paper">Let's</span></span>
            <span className="reveal-text-wrapper block"><span className="reveal-text contact-text text-paper">Collaborate.</span></span>
          </h2>
          <p className="text-lg md:text-2xl font-serif max-w-2xl leading-relaxed text-paper/80">
            Available for freelance opportunities. If you have a project that needs a blend of design precision and AI-driven content, I'd love to hear from you.
          </p>
        </div>
        
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold border-b-2 border-paper pb-2 mb-6">Contact Information</h3>
            <ul className="space-y-6 font-serif text-lg">
              <li className="group">
                <span className="block text-xs uppercase tracking-widest text-paper/50 mb-1">Email</span>
                <a href="mailto:hello@amanverma.com" className="hover:italic transition-all duration-300 border-b border-transparent group-hover:border-paper pb-1">hello@amanverma.com</a>
              </li>
              <li className="group">
                <span className="block text-xs uppercase tracking-widest text-paper/50 mb-1">Social</span>
                <div className="flex space-x-4">
                  <a href="#" className="hover:italic transition-all duration-300 border-b border-transparent hover:border-paper pb-1">Twitter</a>
                  <a href="#" className="hover:italic transition-all duration-300 border-b border-transparent hover:border-paper pb-1">LinkedIn</a>
                  <a href="#" className="hover:italic transition-all duration-300 border-b border-transparent hover:border-paper pb-1">Instagram</a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 pt-8 border-t border-paper/30 flex justify-between items-end text-xs uppercase tracking-widest font-bold">
            <span>© {new Date().getFullYear()} Aman Verma</span>
            <span>Back Page</span>
          </div>
        </div>
      </div>
    </section>
  );
}
