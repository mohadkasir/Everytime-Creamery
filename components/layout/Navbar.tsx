import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../../store.ts';

const Navbar = () => {
    const cart = useCartStore((state) => state.cart);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Gifting', path: '/gifting' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'py-3 bg-brand-cream/95 backdrop-blur-md border-brand-dark/5 shadow-sm'
                    : 'py-6 bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="group relative z-50">
                    <div className="flex flex-col leading-none items-center md:items-start">
                        <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-brand-primary' : 'text-brand-dark'}`}>
                            Everytime
                        </span>
                        <span className="text-[0.6rem] font-sans tracking-[0.3em] text-brand-dark/70 uppercase">
                            Creamery
                        </span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-xs font-bold uppercase tracking-[0.15em] text-brand-dark hover:text-brand-primary transition-colors duration-300 relative group overflow-hidden"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 relative z-50">
                    {/* Cart Icon */}
                    <button
                        className="relative group p-2"
                        onClick={() => document.dispatchEvent(new CustomEvent('toggle-cart'))}
                        aria-label="Cart"
                    >
                        <span className="absolute inset-0 bg-brand-dark/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-brand-dark relative z-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-primary rounded-full animate-pulse ring-2 ring-brand-cream z-20"></span>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {navLinks.map((item, idx) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-2xl font-serif font-bold text-brand-dark hover:text-brand-primary transition-all duration-300"
                            style={{ transitionDelay: `${idx * 100}ms`, opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
