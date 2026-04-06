import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-item', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-16 px-6 md:px-12 border-b-4 border-ink bg-paper min-h-[60vh]">
      <div className="mb-12 flex justify-between items-end border-b-2 border-ink pb-4">
        <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight font-black">Featured Projects</h2>
        <span className="text-sm uppercase tracking-widest font-bold">Top 2 Highlights</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Work Item 1 */}
        <article className="work-item group border-2 border-ink bg-paper p-4 md:p-5 flex flex-col h-full shadow-[4px_4px_0_0_rgba(26,26,26,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,0.24)]">
          <div className="aspect-[16/10] overflow-hidden mb-5 border-2 border-ink bg-[#ece6d7] p-3 flex items-center justify-center">
            <img
              src="/projects/gsaa/featured-gsaa.png"
              alt="GSAA Official Website - Homepage"
              onError={(e) => {
                e.currentTarget.src = 'https://image.thum.io/get/width/1200/https://gsaaglobal-ashen.vercel.app/';
              }}
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="flex justify-between items-start border-t border-b border-ink py-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-black tracking-tight leading-tight">GSAA Official Website</h3>
              <p className="text-xs uppercase tracking-widest font-bold mt-2">Web Design / Development</p>
            </div>
            <span className="text-2xl font-serif font-black">01</span>
          </div>
          <p className="mt-4 font-serif text-ink/80 leading-relaxed">
            Designed and shipped GSAA's official website with interactive sections and a premium visual identity.
          </p>
          <a
            href="https://gsaaglobal-ashen.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 w-full sm:w-auto sm:min-w-[210px] text-center border-2 border-ink px-4 py-3 text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-paper transition-colors"
          >
            Visit site
          </a>
        </article>

        {/* Work Item 2 */}
        <article className="work-item group border-2 border-ink bg-paper p-4 md:p-5 flex flex-col h-full shadow-[4px_4px_0_0_rgba(26,26,26,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,0.24)]">
          <div className="aspect-[16/10] overflow-hidden mb-5 border-2 border-ink bg-[#ece6d7] p-3 flex items-center justify-center">
            <img
              src="/projects/burn-first-aid/featured-burn-first-aid.png"
              alt="Burn First Aid - Android app"
              onError={(e) => {
                e.currentTarget.src = 'https://play-lh.googleusercontent.com/exOMYWNdb2k9cPf_-q2vjTuVM1jkbLJt9keUGo-XnaQ4sdx_UVJ4PSV73F-i2XQFFI1EGFuKHeT138naa-5Q=w1052-h592';
              }}
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="flex justify-between items-start border-t border-b border-ink py-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-black tracking-tight leading-tight">Burn First Aid App</h3>
              <p className="text-xs uppercase tracking-widest font-bold mt-2">Mobile App / Healthcare</p>
            </div>
            <span className="text-2xl font-serif font-black">02</span>
          </div>
          <p className="mt-4 font-serif text-ink/80 leading-relaxed">
            Built and published an Android app focused on quick, clear, step-by-step burn first-aid guidance.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.eshanhospital"
            target="_blank"
            rel="noreferrer"
            className="mt-5 w-full sm:w-auto sm:min-w-[210px] text-center border-2 border-ink px-4 py-3 text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-paper transition-colors"
          >
            View on Play Store
          </a>
        </article>
      </div>
    </section>
  );
}
