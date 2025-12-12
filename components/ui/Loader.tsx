import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(containerRef.current, { display: 'none' });
                    onComplete();
                }
            });

            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .to(textRef.current, {
                    opacity: 0,
                    y: -50,
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'power3.in'
                })
                .to(containerRef.current, {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 1,
                    ease: 'power4.inOut'
                });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center"
        >
            <div
                ref={textRef}
                className="opacity-0 translate-y-10 text-center"
            >
                <h1 className="font-serif text-4xl md:text-6xl text-brand-gold font-bold tracking-tight">
                    Everytime
                </h1>
                <p className="text-brand-cream/60 font-sans tracking-[0.4em] text-xs mt-2 uppercase">
                    Creamery
                </p>
            </div>
        </div>
    );
};

export default Loader;
