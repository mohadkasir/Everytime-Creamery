import { useRef, useEffect, useState, FC } from 'react';
import { IProduct, ProductSize } from '../types.ts';
import { useCartStore } from '../store.ts';
import { GoogleGenAI } from '@google/genai';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || !(window as any).gsap) return;

    const hoverAnim = (window as any).gsap.to(el, {
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

  const handleGenerateImage = async () => {
    if (!process.env.API_KEY) {
        console.warn("No API key available");
        return;
    }

    setLoadingImage(true);
    setError(false);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-image-preview',
            contents: {
                parts: [{ text: product.imagePrompt }]
            },
            config: {
                imageConfig: {
                    aspectRatio: "1:1",
                    imageSize: "1K"
                }
            }
        });

        // Loop through parts to find the image
        let foundImage = false;
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                const base64EncodeString = part.inlineData.data;
                setImageUrl(`data:image/png;base64,${base64EncodeString}`);
                foundImage = true;
                break;
            }
        }
        
        if (!foundImage) {
            throw new Error("No image generated");
        }

    } catch (err) {
        console.error("Failed to generate image", err);
        setError(true);
    } finally {
        setLoadingImage(false);
    }
  };

  const handleAdd = (size: ProductSize) => {
    addToCart(product, size);
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-sm overflow-hidden border border-brand-dark/5 transition-all duration-500 group"
    >
      {/* Visual Area */}
      <div className="aspect-square bg-brand-cream/50 relative overflow-hidden flex items-center justify-center">
        {imageUrl ? (
            <img 
                src={imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-[fadeIn_1s_ease-out]"
            />
        ) : (
            <div className="text-center p-6">
                 {loadingImage ? (
                     <div className="flex flex-col items-center gap-3">
                         <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                         <span className="text-xs font-serif text-brand-primary italic">Churning fresh pixels...</span>
                     </div>
                 ) : (
                     <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl opacity-20">🍦</span>
                        <p className="font-serif text-brand-dark/30 text-sm italic">Freshly churned upon request</p>
                        <button 
                            onClick={handleGenerateImage}
                            className="mt-2 text-[10px] uppercase tracking-widest font-bold text-brand-primary border border-brand-primary/20 px-3 py-1.5 rounded-sm hover:bg-brand-primary hover:text-white transition-all duration-300"
                        >
                            {error ? "Retry Visualize" : "Visualize Scoop"}
                        </button>
                     </div>
                 )}
            </div>
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
            <div className="absolute top-2 right-2 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 shadow-sm">
                Bestseller
            </div>
        )}
      </div>

      <div className="p-golden-md flex flex-col h-[200px]">
        <div className="mb-2">
          <div className="flex justify-between items-start">
             <h3 className="font-serif text-xl text-brand-dark font-bold leading-none">
                {product.name}
              </h3>
          </div>
          <span className="inline-block mt-2 text-[0.618rem] uppercase tracking-widest text-brand-muted font-bold">
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
              className="relative overflow-hidden group/btn bg-brand-cream/30 hover:bg-brand-dark hover:text-white transition-all duration-300 rounded-sm p-2 flex flex-col items-center"
            >
              <span className="text-[10px] font-bold opacity-60 group-hover/btn:opacity-80">250ml</span>
              <span className="font-serif text-md">₹{product.price250}</span>
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark text-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold">+ ADD</span>
              </div>
            </button>

            <button
              onClick={() => handleAdd('500ml')}
              className="relative overflow-hidden group/btn bg-brand-cream/30 hover:bg-brand-dark hover:text-white transition-all duration-300 rounded-sm p-2 flex flex-col items-center"
            >
              <span className="text-[10px] font-bold opacity-60 group-hover/btn:opacity-80">500ml</span>
              <span className="font-serif text-md">₹{product.price500}</span>
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark text-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold">+ ADD</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;