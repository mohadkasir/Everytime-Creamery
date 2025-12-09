import { FC } from 'react';

export const PhilosophySection: FC = () => {
  return (
    <section className="py-golden-xl border-y border-brand-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-primary/20 flex items-center justify-center text-2xl">
            🌿
          </div>
          <h3 className="font-serif text-lg text-brand-dark font-bold">100% Natural</h3>
          <p className="text-xs text-brand-dark/60 font-sans leading-relaxed max-w-[200px]">
            No artificial colors, flavors, or preservatives. Just pure ingredients as nature intended.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-3">
           <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-primary/20 flex items-center justify-center text-2xl">
            🥄
          </div>
          <h3 className="font-serif text-lg text-brand-dark font-bold">Small Batch</h3>
          <p className="text-xs text-brand-dark/60 font-sans leading-relaxed max-w-[200px]">
            Churned daily in limited quantities to ensure peak freshness and perfect texture.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-3">
           <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-primary/20 flex items-center justify-center text-2xl">
            ❄️
          </div>
          <h3 className="font-serif text-lg text-brand-dark font-bold">Slow Frozen</h3>
          <p className="text-xs text-brand-dark/60 font-sans leading-relaxed max-w-[200px]">
            Our slow-freezing technique minimizes ice crystals for an impossibly smooth mouthfeel.
          </p>
        </div>
      </div>
    </section>
  );
};

export const GiftingSection: FC = () => {
  return (
    <section className="relative overflow-hidden rounded-sm bg-brand-dark text-brand-cream p-golden-xl mt-16">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-md">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Celebrations</span>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Share the <span className="italic text-brand-gold">Sweetness</span>
          </h2>
          <p className="text-sm font-sans opacity-80 leading-relaxed">
            Planning a party or looking for the perfect gift? We offer curated hampers and bulk tubs for your special moments.
          </p>
          <button className="mt-4 px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 text-xs font-bold tracking-widest uppercase">
            Inquire for Events
          </button>
        </div>
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-brand-gold/20 flex items-center justify-center relative">
             <div className="absolute inset-2 rounded-full border border-brand-gold/40 border-dashed animate-[spin_10s_linear_infinite]"></div>
             <span className="font-serif text-4xl">🎁</span>
          </div>
        </div>
      </div>
      
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};