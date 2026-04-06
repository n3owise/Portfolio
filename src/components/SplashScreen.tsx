import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

interface SplashScreenProps {
	onTextComplete: () => void;
	isUnrolling: boolean;
}

const SplashScreen = forwardRef<HTMLDivElement, SplashScreenProps>(
	({ onTextComplete, isUnrolling }, ref) => {
		const contentRef = useRef<HTMLDivElement>(null);
		const loaderRef = useRef<HTMLDivElement>(null);
		const titleRef = useRef<HTMLParagraphElement>(null);
		const hasCompletedRef = useRef(false);

		useEffect(() => {
			document.body.style.overflow = 'hidden';

			const ctx = gsap.context(() => {
				const tl = gsap.timeline({
					defaults: { ease: 'power3.out' },
					onComplete: () => {
						if (!hasCompletedRef.current) {
							hasCompletedRef.current = true;
							onTextComplete();
						}
					}
				});

				tl.fromTo(
					loaderRef.current,
					{ y: 30, opacity: 0, scale: 0.9, rotate: -4 },
					{ y: 0, opacity: 1, scale: 1, rotate: 0, duration: 0.8 }
				)
					.fromTo(
						titleRef.current,
						{ y: 16, opacity: 0, letterSpacing: '0.42em' },
						{ y: 0, opacity: 1, letterSpacing: '0.26em', duration: 0.6 },
						'-=0.45'
					)
					.to(
						contentRef.current,
						{
							y: -24,
							opacity: 0,
							filter: 'blur(6px)',
							duration: 0.55,
							ease: 'power2.in'
						},
						'+=1.4'
					);
			}, ref as React.RefObject<HTMLDivElement>);

			return () => ctx.revert();
		}, [onTextComplete]);

		return (
			<div
				ref={ref}
				className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center transition-opacity duration-700"
				style={{ opacity: isUnrolling ? 0 : 1, pointerEvents: isUnrolling ? 'none' : 'auto' }}
			>
				<div className="absolute inset-0 portfolio-splash-background" />
				<div className="absolute inset-0 portfolio-splash-grid" />

				<div
					ref={contentRef}
					className="portfolio-splash-container relative z-10 px-6"
					role="status"
					aria-live="polite"
				>
					<div
						ref={loaderRef}
						className="portfolio-folder"
						data-folder-origin="true"
						aria-hidden="true"
					>
						<div className="portfolio-folder-top" />
						<div className="portfolio-folder-bottom" />
					</div>

					<p ref={titleRef} className="portfolio-splash-title">
						GETTING PORTFOLIO READY
					</p>
				</div>
			</div>
		);
	}
);

export default SplashScreen;
