import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tools: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt: string;
  brief: string;
  approach: string;
  finalOutput: string;
  cta?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: '01',
    title: 'Farmest - Branding & Packaging',
    category: 'Branding / Packaging',
    year: 'NOV 2026',
    description:
      'Designed Farmest branding and packaging to establish a cohesive shelf-ready identity.',
    tools: 'Figma, Illustrator, Affinity, Nano Banana, Higgsfield',
    mediaType: 'image',
    mediaSrc: '/projects/farmest/mock.jpg',
    mediaAlt: 'Farmest branding and packaging mockup',
    brief: 'Create a packaging-first brand system with strong visual recall.',
    approach: 'Concept exploration with AI image tools + production-oriented packaging refinement.',
    finalOutput: 'Complete brand look with packaging visuals ready for presentation and rollout.'
  },
  {
    id: '02',
    title: 'Mechanical Sparkler Device - AI Video Production',
    category: 'AI Video',
    year: 'NOV 2025',
    description:
      'Produced a fully AI-generated 2D-to-live product video with realistic hands-on style visuals.',
    tools: 'Veo 3, Sora 2, Kling, Grok Imagine, advanced video generation stack',
    mediaType: 'video',
    mediaSrc: 'https://res.cloudinary.com/dgybminsu/video/upload/v1771561914/Mechanical_Sparkler_1_rfugep.mp4',
    mediaAlt:
      'AI-generated product video showing realistic hands-on use of a mechanical sparkler device',
    brief: 'Create a cinematic product demo without a traditional live production setup.',
    approach: 'Prompt-led storyboard pipeline, tool blending across multiple video models, iterative scene tuning.',
    finalOutput: 'Finished demo video delivered and hosted publicly via Cloudinary.',
    cta: 'Watch demo',
    link: 'https://res.cloudinary.com/dgybminsu/video/upload/v1771561914/Mechanical_Sparkler_1_rfugep.mp4'
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [loadedMedia, setLoadedMedia] = useState<Record<string, boolean>>({});
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});

  const handleCardMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
  };

  const handleCardLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 35,
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
    <section id="archive" ref={containerRef} className="py-12 md:py-16 px-4 sm:px-6 md:px-12 border-b-4 border-ink bg-paper">
      <div className="mb-12 flex items-end justify-between gap-4 border-b-2 border-ink pb-4">
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] font-serif uppercase tracking-tight font-black">Project Archive</h2>
        <span className="text-right text-[11px] md:text-sm uppercase tracking-widest font-bold">Complete List (2)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            className="project-card group relative flex flex-col h-full border-2 border-ink p-4 md:p-5 bg-paper shadow-[4px_4px_0_0_rgba(26,26,26,0.18)] transition-transform duration-250"
            style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(220px circle at var(--mx) var(--my), rgba(255,255,255,0.42), transparent 55%)',
              }}
            />

            <div className="relative aspect-[16/10] overflow-hidden mb-4 border-2 border-ink bg-[#ece6d7]">
              {!loadedMedia[project.id] && <div className="media-skeleton" />}
              {project.mediaType === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={project.mediaSrc}
                    controls
                    onLoadedData={() => setLoadedMedia((prev) => ({ ...prev, [project.id]: true }))}
                    onPlay={() => setPlayingVideos((prev) => ({ ...prev, [project.id]: true }))}
                    onPause={() => setPlayingVideos((prev) => ({ ...prev, [project.id]: false }))}
                    onClick={(e) => {
                      if (e.currentTarget.paused) {
                        e.currentTarget.play();
                      } else {
                        e.currentTarget.pause();
                      }
                    }}
                    className={`w-full h-full object-cover bg-black cursor-pointer transition-opacity duration-300 ${loadedMedia[project.id] ? 'opacity-100' : 'opacity-0'}`}
                    aria-label={project.mediaAlt}
                  />
                  {!playingVideos[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/90 text-paper shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        <Play size={26} fill="currentColor" strokeWidth={0} className="ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <img
                  src={project.mediaSrc}
                  alt={project.mediaAlt}
                  onLoad={() => setLoadedMedia((prev) => ({ ...prev, [project.id]: true }))}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${loadedMedia[project.id] ? 'opacity-100' : 'opacity-0'}`}
                />
              )}
            </div>

            <div className="flex justify-between items-start mb-3 border-b border-ink/30 pb-2">
              <span className="text-[11px] uppercase tracking-widest font-bold">{project.category}</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-widest font-bold opacity-70">{project.year}</span>
                <span className="text-sm font-serif font-black">{project.id}</span>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-black mb-3 leading-tight tracking-tight">{project.title}</h3>
            <p className="font-serif text-[15px] leading-7 text-ink/85">
              {project.description}
            </p>

            <p className="mt-3 text-xs uppercase tracking-widest font-bold opacity-75">{project.tools}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveProject(project)}
                className="ui-action-light w-full sm:w-auto"
              >
                Process Snapshot
              </button>

            {project.link && project.cta && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="ui-action-light w-full sm:w-auto"
              >
                {project.cta}
              </a>
            )}
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center">
          <div className="w-full max-w-3xl bg-paper border-2 border-ink shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-ink px-4 md:px-6 py-3">
              <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight">Process Snapshot</h3>
              <button
                onClick={() => setActiveProject(null)}
                className="ui-action-light px-3 py-1"
              >
                Close
              </button>
            </div>

            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div className="border-l-4 border-ink pl-3 py-1">
                <p className="text-xs uppercase tracking-widest font-bold mb-1">Brief</p>
                <p className="font-serif text-sm leading-6 text-ink/85">{activeProject.brief}</p>
              </div>
              <div className="border-l-4 border-ink pl-3 py-1">
                <p className="text-xs uppercase tracking-widest font-bold mb-1">Approach</p>
                <p className="font-serif text-sm leading-6 text-ink/85">{activeProject.approach}</p>
              </div>
              <div className="border-l-4 border-ink pl-3 py-1">
                <p className="text-xs uppercase tracking-widest font-bold mb-1">Tools</p>
                <p className="font-serif text-sm leading-6 text-ink/85">{activeProject.tools}</p>
              </div>
              <div className="border-l-4 border-ink pl-3 py-1">
                <p className="text-xs uppercase tracking-widest font-bold mb-1">Final Output</p>
                <p className="font-serif text-sm leading-6 text-ink/85">{activeProject.finalOutput}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
