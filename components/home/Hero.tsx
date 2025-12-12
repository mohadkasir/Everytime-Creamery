import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Text Reveal
            const tl = gsap.timeline({ delay: 0.5 });

            tl.fromTo('.hero-reveal',
                { y: 100, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
                { y: 0, opacity: 1, clipPath: 'inset(0 0 0 0)', duration: 1, stagger: 0.2, ease: 'power4.out' }
            );

            tl.fromTo('.hero-btn',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                "-=0.5"
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
                <div className="absolute inset-0 bg-brand-dark/20 z-10"></div>
                <img
                    src="/images/c1.png"
                    alt="Everytime Creamery"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-transparent to-brand-cream z-20"></div>
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <span className="hero-reveal block text-brand-gold font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
                    Est. 2024 • Royapuram
                </span>

                <h1 className="hero-reveal font-serif text-6xl md:text-8xl lg:text-9xl text-brand-primary font-bold mb-8 leading-[0.85] tracking-tight">
                    The Art of <br />
                    <span className="italic text-brand-dark font-normal">Frozen Joy</span>
                </h1>

                <p className="hero-reveal text-brand-dark/80 font-sans text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
                    Handcrafted in small batches using the finest ingredients.
                    Experience the nostalgia of pure, creamy perfection.
                </p>

                <div className="hero-btn flex justify-center gap-6">
                    <Button variant="primary" size="lg" href="/menu">
                        Order Now
                    </Button>
                    <Button variant="outline" size="lg" href="/about">
                        Our Story
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
                <svg className="w-6 h-6 text-brand-dark/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
