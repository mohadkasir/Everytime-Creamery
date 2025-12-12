import { useRef, useEffect, FC } from 'react';
import { IProduct, ProductSize } from '../types.ts';
import { useCartStore } from '../store.ts';
import gsap from 'gsap';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const hoverAnim = gsap.to(el, {
      y: -4,
      boxShadow: "0 10px 30px -10px rgba(191, 62, 31, 0.2)",
      duration: 0.382,
      paused: true,
      ease: 'power2.out',
    });

    el.addEventListener('mouseenter', () => hoverAnim.play());
    el.addEventListener('mouseleave', () => hoverAnim.reverse());

    return () => {
      el.removeEventListener('mouseenter', () => hoverAnim.play());
      el.removeEventListener('mouseleave', () => hoverAnim.reverse());
      hoverAnim.kill();
    };
  }, []);

  const handleAdd = (size: ProductSize) => {
    addToCart(product, size);
  };

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-sm overflow-hidden border border-brand-dark/5 transition-all duration-500 group hover:shadow-xl"
    >
      {/* Visual Area */}
      <div className="aspect-square bg-brand-cream/50 relative overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-2 right-2 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 shadow-sm">
            Bestseller
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col h-[200px]">
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-xl text-brand-dark font-bold leading-none group-hover:text-brand-primary transition-colors duration-300">
              {product.name}
            </h3>
          </div>
          <span className="inline-block mt-2 text-[0.65rem] uppercase tracking-widest text-brand-muted font-bold">
            {product.category}
          </span>
        </div>

        <p className="font-sans text-brand-dark/70 text-sm mb-4 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-brand-dark/5">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleAdd('250ml')}
              className="relative overflow-hidden group/btn bg-brand-cream/30 hover:bg-brand-dark hover:text-white transition-all duration-300 rounded-sm p-2 flex flex-col items-center border border-transparent hover:border-brand-dark"
            >
              <span className="text-[10px] font-bold opacity-60 group-hover/btn:opacity-80">250ml</span>
              <span className="font-serif text-md">₹{product.price250}</span>
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark text-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold font-sans">ADD</span>
              </div>
            </button>

            <button
              onClick={() => handleAdd('500ml')}
              className="relative overflow-hidden group/btn bg-brand-cream/30 hover:bg-brand-dark hover:text-white transition-all duration-300 rounded-sm p-2 flex flex-col items-center border border-transparent hover:border-brand-dark"
            >
              <span className="text-[10px] font-bold opacity-60 group-hover/btn:opacity-80">500ml</span>
              <span className="font-serif text-md">₹{product.price500}</span>
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark text-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold font-sans">ADD</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;