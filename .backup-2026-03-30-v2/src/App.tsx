import { useEffect, useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const newspaperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Stop scrolling during intro
    lenis.stop();
    document.body.style.overflow = 'hidden';

    // Intro Animation
    const tl = gsap.timeline({
      onComplete: () => {
        lenis.start();
        document.body.style.overflow = '';
        ScrollTrigger.refresh();
      }
    });

    gsap.set(newspaperRef.current, {
      y: '50vh',
      scale: 0.3,
      rotation: 0,
      opacity: 0,
      transformOrigin: "50% 50vh"
    });

    tl.to(newspaperRef.current, {
      y: '30vh',
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(newspaperRef.current, {
      y: 0,
      scale: 1,
      rotation: 1080,
      duration: 2.5,
      ease: "power3.inOut"
    }, "+=0.5");

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-ink font-sans selection:bg-ink selection:text-paper overflow-x-hidden">
      <Cursor />
      <div ref={newspaperRef} className="max-w-[1600px] mx-auto w-full border-l-4 border-r-4 border-ink min-h-screen shadow-2xl flex flex-col bg-paper">
        <Header />
        <main ref={contentRef} className="flex-grow">
          <Hero />
          <FeaturedWork />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
