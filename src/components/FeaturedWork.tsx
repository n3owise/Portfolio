import { useState } from 'react';

export default function FeaturedWork() {
  const [loadedMedia, setLoadedMedia] = useState<Record<string, boolean>>({
    gsaa: false,
    burn: false
  });

  return (
    <section id="featured" className="py-16 px-4 sm:px-6 md:px-12 border-b-4 border-ink bg-paper min-h-[60vh]">
      <div
        className="mb-12 flex items-end justify-between gap-4 border-b-2 border-ink pb-4"
        data-intro-target="featured-title"
      >
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] font-serif uppercase tracking-tight font-black">Featured Projects</h2>
        <span className="text-right text-[11px] md:text-sm uppercase tracking-widest font-bold">Top 2 Highlights</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Work Item 1 */}
        <article
          className="work-item group border-2 border-ink bg-paper p-4 md:p-5 flex flex-col h-full shadow-[4px_4px_0_0_rgba(26,26,26,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,0.24)]"
          data-intro-target="featured-card-1"
        >
          <div className="relative aspect-[16/10] overflow-hidden mb-5 border-2 border-ink bg-[#ece6d7] p-3 flex items-center justify-center">
            {!loadedMedia.gsaa && <div className="media-skeleton" />}
            <img
              src="/projects/gsaa/featured-gsaa.png"
              alt="GSAA Official Website - Homepage"
              onLoad={() => setLoadedMedia((prev) => ({ ...prev, gsaa: true }))}
              onError={(e) => {
                e.currentTarget.src = 'https://image.thum.io/get/width/1200/https://gsaaglobal-ashen.vercel.app/';
              }}
              className={`w-full h-full object-contain object-center transition-opacity duration-300 ${loadedMedia.gsaa ? 'opacity-100' : 'opacity-0'}`}
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
          <p className="mt-3 border-l-4 border-ink pl-3 py-1 bg-ink/5 text-sm font-serif text-ink/90">
            Outcome: Live production website deployed.
          </p>
          <div className="mt-auto pt-5">
            <a
              href="https://gsaaglobal-ashen.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="ui-action-light block w-full sm:w-auto sm:min-w-[210px]"
            >
              Visit site
            </a>
          </div>
        </article>

        {/* Work Item 2 */}
        <article
          className="work-item group border-2 border-ink bg-paper p-4 md:p-5 flex flex-col h-full shadow-[4px_4px_0_0_rgba(26,26,26,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,0.24)]"
          data-intro-target="featured-card-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden mb-5 border-2 border-ink bg-[#ece6d7] p-3 flex items-center justify-center">
            {!loadedMedia.burn && <div className="media-skeleton" />}
            <img
              src="/projects/burn-first-aid/featured-burn-first-aid.jpg"
              alt="Burn First Aid - Android app"
              onLoad={() => setLoadedMedia((prev) => ({ ...prev, burn: true }))}
              onError={(e) => {
                e.currentTarget.src = 'https://play-lh.googleusercontent.com/exOMYWNdb2k9cPf_-q2vjTuVM1jkbLJt9keUGo-XnaQ4sdx_UVJ4PSV73F-i2XQFFI1EGFuKHeT138naa-5Q=w1052-h592';
              }}
              className={`w-full h-full object-contain object-center transition-opacity duration-300 ${loadedMedia.burn ? 'opacity-100' : 'opacity-0'}`}
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
          <p className="mt-3 border-l-4 border-ink pl-3 py-1 bg-ink/5 text-sm font-serif text-ink/90">
            Outcome: Published on Google Play.
          </p>
          <div className="mt-auto pt-5">
            <a
              href="https://play.google.com/store/apps/details?id=com.eshanhospital"
              target="_blank"
              rel="noreferrer"
              className="ui-action-light block w-full sm:w-auto sm:min-w-[210px]"
            >
              View on Play Store
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
