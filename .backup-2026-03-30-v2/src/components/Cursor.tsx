import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide default cursor on body
    document.body.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    // Add hover effects for links and buttons
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 2.5, backgroundColor: 'transparent', border: '1px solid #f5f1e8', duration: 0.3 });
    };
    
    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: '#f5f1e8', border: 'none', duration: 0.3 });
    };

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
        // Also hide default cursor on these elements
        (el as HTMLElement).style.cursor = 'none';
      });
    };

    addListeners();

    // Re-run when DOM changes (simple mutation observer)
    const observer = new MutationObserver(() => {
      addListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-paper rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
    ></div>
  );
}
