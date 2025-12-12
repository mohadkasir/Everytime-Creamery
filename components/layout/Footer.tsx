import Button from '../ui/Button';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-brand-cream pt-24 pb-12 relative overflow-hidden">
            {/* Background Texture/Pattern could go here */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-gold to-brand-primary opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-brand-cream/10 pb-16 mb-12">
                {/* Brand - Span 4 cols */}
                <div className="md:col-span-4 space-y-6">
                    <div>
                        <h3 className="font-serif text-4xl text-brand-cream/90 mb-2">Everytime</h3>
                        <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-bold">Creamery</p>
                    </div>
                    <p className="text-sm font-light leading-relaxed max-w-xs opacity-60">
                        Handcrafted with patience, churned with passion, and served with pride in the heart of Royapuram.
                    </p>

                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        {['IG', 'FB', 'TW'].map(social => (
                            <a key={social} href="#" className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center rounded-full text-xs hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation - Span 2 cols by 2 */}
                <div className="md:col-span-2 space-y-6">
                    <h4 className="font-serif text-lg text-brand-gold">Shop</h4>
                    <ul className="space-y-3 text-sm font-light opacity-70">
                        <li><a href="/menu" className="hover:text-brand-white transition-colors">Our Flavours</a></li>
                        <li><a href="/gifting" className="hover:text-brand-white transition-colors">Gifting</a></li>
                        <li><a href="#" className="hover:text-brand-white transition-colors">Bundles</a></li>
                        <li><a href="#" className="hover:text-brand-white transition-colors">Subscriptions</a></li>
                    </ul>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <h4 className="font-serif text-lg text-brand-gold">Company</h4>
                    <ul className="space-y-3 text-sm font-light opacity-70">
                        <li><a href="/about" className="hover:text-brand-white transition-colors">Our Story</a></li>
                        <li><a href="#" className="hover:text-brand-white transition-colors">Careers</a></li>
                        <li><a href="/contact" className="hover:text-brand-white transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-brand-white transition-colors">FAQ</a></li>
                    </ul>
                </div>

                {/* Newsletter - Span 4 cols */}
                <div className="md:col-span-4 space-y-6">
                    <h4 className="font-serif text-lg text-brand-gold">Stay Sweet</h4>
                    <p className="text-sm opacity-60 font-light">Join our newsletter for exclusive flavors and sweet offers.</p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-brand-cream/5 border border-brand-cream/10 rounded-none px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/20 focus:outline-none focus:border-brand-gold w-full transition-colors"
                        />
                        <div className="self-start">
                            <Button variant="gold" size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs opacity-30 font-light tracking-wide">
                <p>&copy; {new Date().getFullYear()} Everytime Creamery. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-brand-white">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
