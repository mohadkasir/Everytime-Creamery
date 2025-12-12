import { useState, useMemo } from 'react';
import { INVENTORY } from '../constants.ts';
import ProductCard from '../components/ProductCard.tsx';
import SectionWrapper from '../components/ui/SectionWrapper.tsx';
import { ProductCategory } from '../types.ts';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') return INVENTORY;
        return INVENTORY.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="bg-brand-cream min-h-screen pt-28 pb-20">
            <SectionWrapper className="py-0 mb-12">
                <div className="text-center">
                    <span className="block text-brand-gold text-xs font-bold uppercase tracking-[0.25em] mb-4">Discovery</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-dark font-bold mb-6">Our Menu</h1>
                    <p className="font-serif text-brand-muted italic text-xl max-w-2xl mx-auto">
                        Curated flavors for every palate, from timeless classics to bold innovations.
                    </p>
                </div>
            </SectionWrapper>

            {/* Filters - Sticky */}
            <div className="sticky top-20 z-40 bg-brand-cream/95 backdrop-blur-md py-6 border-y border-brand-dark/5 mb-12 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
                    {['All', ...Object.values(ProductCategory)].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-brand-dark text-brand-gold border-brand-dark shadow-md'
                                : 'bg-transparent text-brand-muted border-brand-muted/30 hover:border-brand-primary hover:text-brand-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <SectionWrapper>
                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-brand-muted font-serif italic text-lg">
                        No flavors found in this category.
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default Menu;
