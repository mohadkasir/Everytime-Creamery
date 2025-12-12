import { Link } from 'react-router-dom';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';

const Gifting = () => {
    return (
        <div className="bg-brand-cream min-h-screen pt-28 pb-20">
            <SectionWrapper className="text-center mb-16">
                <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs block mb-4">Share the Joy</span>
                <h1 className="font-serif text-5xl md:text-7xl text-brand-primary font-bold mb-6">Gifting & Bundles</h1>
                <p className="font-serif text-brand-dark/70 text-xl max-w-2xl mx-auto italic font-light">
                    Curated boxes for your loved ones. Perfect for birthdays, anniversaries, or just because.
                </p>
            </SectionWrapper>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Bundle 1 */}
                    <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-dark/5 group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="aspect-square bg-brand-cream/50 mb-8 relative overflow-hidden flex items-center justify-center rounded-sm">
                            <span className="text-9xl opacity-20 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">🎁</span>
                            <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                                Best Value
                            </div>
                        </div>
                        <h3 className="font-serif text-3xl text-brand-dark font-bold mb-3 group-hover:text-brand-primary transition-colors">The Classics Box</h3>
                        <p className="text-brand-dark/60 text-sm mb-8 leading-relaxed font-light">
                            4x 500ml Tubs of our timeless classics: OG Vanilla, Tender Coconut, Chocolate, and Strawberry.
                            Wrapped in our signature premium box.
                        </p>
                        <div className="flex justify-between items-end border-t border-brand-dark/10 pt-6">
                            <div>
                                <span className="block text-[10px] uppercase text-brand-muted tracking-wider mb-1">Price</span>
                                <span className="font-serif text-3xl text-brand-primary">₹999</span>
                            </div>
                            <Button variant="outline" size="sm">Add to Cart</Button>
                        </div>
                    </div>

                    {/* Bundle 2 */}
                    <div className="bg-brand-dark p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>

                        <div className="aspect-square bg-white/5 mb-8 relative overflow-hidden flex items-center justify-center rounded-sm border border-white/5">
                            <span className="text-9xl opacity-20 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-12">✨</span>
                            <div className="absolute top-4 right-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                                Premium
                            </div>
                        </div>
                        <h3 className="font-serif text-3xl text-brand-cream font-bold mb-3 group-hover:text-brand-gold transition-colors">The Indulgence Party Pack</h3>
                        <p className="text-brand-cream/60 text-sm mb-8 leading-relaxed font-light">
                            6x 250ml Tubs including Hazel Nutella, Oreo N' Cream, and Milo Magic.
                            Perfect for small gatherings and parties.
                        </p>
                        <div className="flex justify-between items-end border-t border-white/10 pt-6">
                            <div>
                                <span className="block text-[10px] uppercase text-brand-muted tracking-wider mb-1">Price</span>
                                <span className="font-serif text-3xl text-brand-gold">₹1,299</span>
                            </div>
                            <Button variant="gold" size="sm">Add to Cart</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center bg-white p-12 rounded-lg border border-brand-dark/5 shadow-sm">
                    <h2 className="font-serif text-3xl text-brand-dark font-bold mb-4">Corporate Orders?</h2>
                    <p className="text-brand-dark/70 mb-10 max-w-xl mx-auto font-light">
                        Hosting an event or looking for employee gifts? We handle bulk orders with custom branding and delivery across Chennai.
                    </p>
                    <Button variant="primary" href="/contact">
                        Contact Sales
                    </Button>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Gifting;
