import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Cursor from './components/Cursor';
import SplashScreen from './components/SplashScreen';
import FolderAssemblyOverlay, {
  ASSEMBLY_PIECES,
  type FolderOrigin,
} from './components/FolderAssemblyOverlay';

gsap.registerPlugin(ScrollTrigger);

type IntroPhase = 'intro' | 'assembling' | 'done';

function getFallbackOrigin(): FolderOrigin {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2 - 30,
    width: 100,
    height: 82,
  };
}

export default function App() {
  const portfolioShellRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const assemblyOverlayRef = useRef<HTMLDivElement>(null);
  const assemblyBackdropRef = useRef<HTMLDivElement>(null);
  const assemblyAuraRef = useRef<HTMLDivElement>(null);
  const assemblyPieceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const assemblyHasPlayedRef = useRef(false);
  const lenisTickerRef = useRef<((time: number) => void) | null>(null);

  const [phase, setPhase] = useState<IntroPhase>('intro');
  const [lenisInstance, setLenis] = useState<Lenis | null>(null);
  const [folderOrigin, setFolderOrigin] = useState<FolderOrigin | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(lenis);
    lenis.stop();
    document.body.style.overflow = 'hidden';

    lenis.on('scroll', ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenisTickerRef.current = onTick;
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    gsap.set(portfolioShellRef.current, {
      opacity: 0,
    });

    return () => {
      lenis.destroy();

      if (lenisTickerRef.current) {
        gsap.ticker.remove(lenisTickerRef.current);
        lenisTickerRef.current = null;
      }

      document.body.style.overflow = '';
    };
  }, []);

  const unlockExperience = useCallback(() => {
    document.body.style.overflow = '';

    if (lenisInstance) {
      lenisInstance.start();
    }

    setPhase('done');

    window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [lenisInstance]);

  const captureFolderOrigin = useCallback((): FolderOrigin => {
    const folderElement = splashRef.current?.querySelector('[data-folder-origin]');

    if (!folderElement) {
      return getFallbackOrigin();
    }

    const rect = folderElement.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    };
  }, []);

  const handleSplashComplete = useCallback(() => {
    if (assemblyHasPlayedRef.current || phase !== 'intro') {
      return;
    }

    setFolderOrigin(captureFolderOrigin());
    setPhase('assembling');
  }, [captureFolderOrigin, phase]);

  useEffect(() => {
    if (phase !== 'assembling' || assemblyHasPlayedRef.current) {
      return;
    }

    const portfolioElement = portfolioShellRef.current;
    const overlayElement = assemblyOverlayRef.current;
    const backdropElement = assemblyBackdropRef.current;
    const auraElement = assemblyAuraRef.current;
    const pieces = assemblyPieceRefs.current.filter(
      (piece): piece is HTMLDivElement => Boolean(piece),
    );
    const targets = Array.from(
      document.querySelectorAll('[data-intro-target]'),
    ) as HTMLElement[];

    if (
      !portfolioElement ||
      !overlayElement ||
      !backdropElement ||
      !auraElement ||
      pieces.length !== ASSEMBLY_PIECES.length ||
      targets.length === 0
    ) {
      return;
    }

    const origin = folderOrigin ?? getFallbackOrigin();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rects = targets.map((target) => target.getBoundingClientRect());
    const previewBounds = {
      left: Math.min(...rects.map((rect) => rect.left)),
      top: Math.min(...rects.map((rect) => rect.top)),
      right: Math.max(...rects.map((rect) => rect.right)),
      bottom: Math.max(...rects.map((rect) => rect.bottom)),
    };
    const previewWidth = previewBounds.right - previewBounds.left;
    const previewHeight = previewBounds.bottom - previewBounds.top;
    const originLocalX = origin.x - previewBounds.left;
    const originLocalY = origin.y - previewBounds.top;

    gsap.killTweensOf([portfolioElement, overlayElement, backdropElement, auraElement, ...pieces]);

    gsap.set(overlayElement, { autoAlpha: 1 });
    gsap.set(backdropElement, { opacity: 0 });
    gsap.set(auraElement, {
      left: origin.x,
      top: origin.y,
      xPercent: -50,
      yPercent: -50,
      scale: 0.24,
      opacity: 0,
    });
    gsap.set(portfolioElement, {
      opacity: 0,
    });

    pieces.forEach((piece, index) => {
      const descriptor = ASSEMBLY_PIECES[index];

      gsap.set(piece, {
        left: previewBounds.left,
        top: previewBounds.top,
        width: previewWidth,
        height: previewHeight,
        x: 0,
        y: 0,
        scale: 0.22,
        rotate: descriptor.scatter.rotation * 0.45,
        opacity: 0,
        zIndex: descriptor.zIndex,
        filter: 'blur(8px)',
        transformOrigin: `${originLocalX}px ${originLocalY}px`,
        clipPath: descriptor.clipPath,
      });
    });

    const finishTransition = () => {
      assemblyHasPlayedRef.current = true;
      gsap.set(overlayElement, { autoAlpha: 0 });
      unlockExperience();
    };

    if (prefersReducedMotion) {
      const reducedTimeline = gsap.timeline({
        onComplete: finishTransition,
      });

      reducedTimeline
        .to(portfolioElement, {
          opacity: 1,
          duration: 0.42,
          ease: 'power2.out',
        })
        .to(overlayElement, { autoAlpha: 0, duration: 0.16 }, 0.12);

      return () => {
        reducedTimeline.kill();
      };
    }

    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: finishTransition,
    });

    timeline
      .to(backdropElement, { opacity: 1, duration: 0.18 }, 0)
      .to(
        auraElement,
        {
          opacity: 0.66,
          scale: 1,
          duration: 0.42,
          ease: 'power2.out',
        },
        0,
      )
      .to(
        pieces,
        {
          opacity: 1,
          scale: (index) => ASSEMBLY_PIECES[index].scatter.scale,
          x: (index) => previewWidth * ASSEMBLY_PIECES[index].scatter.x,
          y: (index) => previewHeight * ASSEMBLY_PIECES[index].scatter.y,
          rotate: (index) => ASSEMBLY_PIECES[index].scatter.rotation,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: {
            each: 0.05,
            from: 'center',
          },
          ease: 'power2.out',
        },
        0.1,
      )
      .to(
        auraElement,
        {
          left: previewBounds.left + previewWidth / 2,
          top: previewBounds.top + previewHeight * 0.42,
          scale: 1.5,
          opacity: 0.12,
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0.4,
      )
      .to(
        pieces,
        {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 2.0,
          stagger: {
            each: 0.05,
            from: 'center',
          },
          ease: 'power3.inOut',
        },
        0.8,
      )
      .to(
        portfolioElement,
        {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        },
        2.9,
      )
      .to(
        pieces,
        {
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.inOut',
        },
        2.9,
      )
      .to(auraElement, { opacity: 0, duration: 0.4 }, 2.9)
      .to(backdropElement, { opacity: 0, duration: 0.5 }, 2.9);

    return () => {
      timeline.kill();
    };
  }, [folderOrigin, phase, unlockExperience]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-ink font-sans selection:bg-ink selection:text-paper">
      <Cursor />

      {phase !== 'done' && (
        <SplashScreen
          ref={splashRef}
          onTextComplete={handleSplashComplete}
          isUnrolling={phase === 'assembling'}
        />
      )}

      {phase === 'assembling' && (
        <FolderAssemblyOverlay
          overlayRef={assemblyOverlayRef}
          backdropRef={assemblyBackdropRef}
          auraRef={assemblyAuraRef}
          pieceRefs={assemblyPieceRefs}
        />
      )}

      <div
        ref={portfolioShellRef}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col border-l-4 border-r-4 border-ink bg-paper shadow-2xl"
        style={{ pointerEvents: phase === 'done' ? 'auto' : 'none' }}
      >
        <Header />
        <main className="flex-grow">
          <Hero isReady={phase === 'done'} />
          <FeaturedWork />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
