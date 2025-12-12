import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    className = "",
    id,
    delay = 0
}) => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Trigger when top of element hits 85% of viewport height
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, [delay]);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full ${className}`}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
