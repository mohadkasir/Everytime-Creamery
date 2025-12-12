import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ProductCard from '../components/ProductCard';
import SectionWrapper from '../components/ui/SectionWrapper';
import { PhilosophySection, GiftingSection } from '../components/PremiumSections';
import { INVENTORY } from '../constants.ts';

const Home = () => {
    const featuredProducts = INVENTORY.filter(p => p.isBestseller).slice(0, 3);

    return (
        <div className="w-full overflow-hidden">
            <Hero />

            {/* Philosophy Section */}
            <SectionWrapper delay={0.2}>
                <PhilosophySection />
            </SectionWrapper>

            {/* Featured Products */}
            <SectionWrapper className="bg-brand-cream" id="featured">
                <div className="text-center mb-16">
                    <span className="block text-brand-muted text-xs font-bold uppercase tracking-[0.25em] mb-4">Curated Favorites</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold mb-6">Crowd Pleasers</h2>
                    <span className="h-0.5 w-16 bg-brand-primary inline-block"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="reveal-item">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/menu"
                        className="inline-block border-b border-brand-dark text-brand-dark pb-1 text-sm font-bold tracking-widest uppercase hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                    >
                        View Full Menu
                    </Link>
                </div>
            </SectionWrapper>

            {/* Gifting Section */}
            <SectionWrapper className="pt-0">
                <GiftingSection />
            </SectionWrapper>

            {/* Testimonials */}
            <section className="py-24 bg-brand-dark text-brand-cream overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16 px-6">
                    <span className="block text-brand-gold text-xs font-bold uppercase tracking-[0.25em] mb-4">What they say</span>
                    <h2 className="font-serif text-3xl md:text-4xl italic">"Love at first scoop"</h2>
                </div>

                {/* Infinite Marquee */}
                <div className="flex whitespace-nowrap gap-12 animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]">
                    {[1, 2, 3, 4, 1, 2].map((i, idx) => (
                        <div key={`${i}-${idx}`} className="flex gap-12">
                            <div className="w-[350px] bg-white/5 p-8 border border-white/10 rounded-sm whitespace-normal backdrop-blur-sm transition-colors hover:bg-white/10">
                                <div className="flex gap-2 text-brand-gold mb-4 text-xs">★★★★★</div>
                                <p className="font-serif italic text-lg leading-relaxed mb-6 opacity-80">
                                    "Absolutely the best ice cream in Royapuram. The OG Vanilla brings back so many childhood memories! A must try."
                                </p>
                                <div className="text-xs uppercase tracking-widest text-brand-gold font-bold">— Priya S.</div>
                            </div>
                            <div className="w-[350px] bg-white/5 p-8 border border-white/10 rounded-sm whitespace-normal backdrop-blur-sm transition-colors hover:bg-white/10">
                                <div className="flex gap-2 text-brand-gold mb-4 text-xs">★★★★★</div>
                                <p className="font-serif italic text-lg leading-relaxed mb-6 opacity-80">
                                    "The Hazel Nutella is pure magic. It's incredibly creamy and the hazelnuts are perfectly roasted. Just wow."
                                </p>
                                <div className="text-xs uppercase tracking-widest text-brand-gold font-bold">— Rahul K.</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Instagram / Social Feed Placeholder */}
            <SectionWrapper>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-gray-200 relative group overflow-hidden cursor-pointer">
                            <img
                                src={`https://source.unsplash.com/random/400x400/?icecream,dessert&sig=${i}`} // Placeholder
                                alt="Social"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xl">📸</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a href="#" className="text-brand-primary font-bold tracking-wider text-xs uppercase hover:underline">@EverytimeCreamery</a>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Home;
