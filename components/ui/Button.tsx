import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'gold';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden font-serif tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none group";

    const variants = {
        primary: "bg-brand-primary text-brand-cream hover:bg-brand-dark border border-transparent",
        outline: "bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-cream",
        ghost: "bg-transparent text-brand-dark hover:text-brand-primary",
        gold: "bg-brand-gold text-brand-dark hover:bg-brand-dark hover:text-brand-gold",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-[150%] transition-transform duration-500 ease-in-out">
                {children}
            </span>
            <span className="absolute z-10 flex items-center gap-2 top-full group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                {children}
            </span>
        </>
    );

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link to={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {content}
        </button>
    );
};

export default Button;
