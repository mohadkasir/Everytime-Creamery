import { useEffect, useRef, useState } from 'react';
import { INVENTORY, APP_CONFIG } from './constants.ts';
import ProductCard from './components/ProductCard.tsx';
import CartSidebar from './components/CartSidebar.tsx';
import { PhilosophySection, GiftingSection } from './components/PremiumSections.tsx';
import { GoogleGenAI } from '@google/genai';
import { IProduct } from './types.ts';

// Group inventory by category
const groupedInventory = INVENTORY.reduce((acc, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product);
  return acc;
}, {} as Record<string, IProduct[]>);

export default function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [heroImage, setHeroImage] = useState<string>("https://picsum.photos/1200/1600?grayscale");
  const [isGeneratingHero, setIsGeneratingHero] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if ((window as any).aistudio) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if ((window as any).aistudio) {
      await (window as any).aistudio.openSelectKey();
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      setHasApiKey(hasKey);
    }
  };

  const generateHeroBackground = async () => {
      if (!process.env.API_KEY) return;
      setIsGeneratingHero(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-image-preview',
            contents: {
                parts: [{ text: "An artistic, abstract macro shot of ice cream texture forming a perfect golden ratio spiral, monochromatic cream tones, high key lighting, ethereal and dreamy --ar 9:16" }]
            },
            config: {
                imageConfig: {
                    aspectRatio: "9:16",
                    imageSize: "1K"
                }
            }
        });

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                setHeroImage(`data:image/png;base64,${part.inlineData.data}`);
                break;
            }
        }
      } catch (e) {
          console.error("Hero generation failed", e);
      } finally {
          setIsGeneratingHero(false);
      }
  };

  useEffect(() => {
    // Simple entry animation
    if ((window as any).gsap && titleRef.current) {
      (window as any).gsap.from(titleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1.618,
        ease: 'power3.out'
      });
    }
    
    // Attempt to generate hero if key is present on load
    if (hasApiKey) {
        // Optional: generateHeroBackground(); 
        // We leave it manual to save initial tokens, but user can click to refresh
    }
  }, [hasApiKey]);

  if (!hasApiKey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream text-brand-dark p-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-brand-primary">Everytime Creamery</h1>
        <p className="font-sans text-lg mb-8 max-w-md">
          To experience the full visual richness of our AI-enhanced creamery, please connect your API key.
        </p>
        <button 
          onClick={handleSelectKey}
          className="bg-brand-primary text-white font-serif px-8 py-4 rounded-sm hover:bg-brand-dark transition-colors duration-300 shadow-lg tracking-wider uppercase text-sm font-bold"
        >
          Enter Experience
        </button>
        <div className="mt-8 text-xs text-brand-dark/40 max-w-xs">
          <p>Requires a paid Google Cloud Project API Key.</p>
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-brand-primary">View Billing Documentation</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-golden bg-brand-cream relative bg-noise">
      {/* LEFT COLUMN: SCROLLABLE MENU (1fr) */}
      <div className="h-full flex flex-col order-2 lg:order-1 relative z-10 shadow-[20px_0_40px_-10px_rgba(0,0,0,0.05)]">
        <header className="p-golden-xl pb-0">
          <div className="mb-4">
             {/* Logo representation */}
             <h1 
               ref={titleRef}
               className="font-serif text-5xl md:text-6xl text-brand-primary font-bold tracking-tight"
             >
               Everytime
               <span className="block text-xl md:text-2xl font-sans tracking-[0.2em] mt-2 text-brand-dark/60 font-light">
                 CREAMERY
               </span>
             </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-brand-muted uppercase tracking-widest mt-8 border-b border-brand-primary/10 pb-6">
            <span>Royapuram</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
            <span>Est. 2024</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
            <span>Handcrafted</span>
          </div>
        </header>

        <main className="p-golden-xl flex-1">
          {/* Brand Philosophy - Trust Signals */}
          <div className="mb-16">
            <PhilosophySection />
          </div>

          <div className="space-y-20">
            {Object.entries(groupedInventory).map(([category, products]) => (
              <section key={category} id={category.toLowerCase()}>
                <div className="flex items-baseline gap-4 mb-8">
                    <h2 className="font-serif text-3xl text-brand-dark relative inline-block">
                    {category}
                    </h2>
                    <span className="h-px bg-brand-primary/20 flex-1"></span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-golden-lg">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Gifting Section */}
          <GiftingSection />

        </main>

        <footer className="p-golden-xl text-center text-brand-dark/40 text-xs border-t border-brand-dark/5 mt-16 bg-brand-cream">
          <p className="font-serif italic mb-2">"Life is like ice cream, enjoy it before it melts."</p>
          <p>© {new Date().getFullYear()} Everytime Creamery. All rights reserved.</p>
        </footer>
      </div>

      {/* RIGHT COLUMN: VISUALS + STICKY CART (1.618fr) */}
      <div className="order-1 lg:order-2 relative lg:fixed lg:right-0 lg:top-0 lg:w-[61.8%] lg:h-screen lg:overflow-y-auto lg:overflow-x-hidden bg-brand-primary/5">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={heroImage}
            alt="Creamery texture" 
            className={`w-full h-full object-cover opacity-20 mix-blend-multiply transition-opacity duration-1000 ${isGeneratingHero ? 'opacity-0' : 'opacity-20'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-transparent to-brand-cream/20"></div>
          
          {/* Hero Generation Control */}
          <button 
            onClick={generateHeroBackground}
            disabled={isGeneratingHero}
            className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-widest text-brand-dark/30 hover:text-brand-primary border border-brand-dark/10 hover:border-brand-primary px-3 py-1 rounded-full transition-all"
          >
            {isGeneratingHero ? 'Dreaming...' : 'Refresh Mood'}
          </button>
        </div>

        {/* Sticky Cart Container */}
        <div className="relative z-20 p-golden-xl lg:min-h-screen flex flex-col justify-start items-end pointer-events-none">
          <div className="pointer-events-auto w-full max-w-md">
             <CartSidebar />
             
             {/* Info Card */}
             <div className="mt-8 bg-brand-dark text-brand-cream p-golden-lg rounded-sm shadow-2xl border-l-4 border-brand-gold backdrop-blur-sm bg-brand-dark/95">
               <h3 className="font-serif text-xl text-brand-gold mb-4">Delivery Info</h3>
               <ul className="space-y-3 text-sm font-sans opacity-80">
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Free delivery above ₹{APP_CONFIG.freeThreshold}
                 </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cream/50"></span>
                    Within 5km of Royapuram
                 </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cream/50"></span>
                    Open {APP_CONFIG.openHour}:00 - {APP_CONFIG.closeHour}:00
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}