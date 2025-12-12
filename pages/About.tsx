import SectionWrapper from '../components/ui/SectionWrapper';

const About = () => {
    return (
        <div className="bg-brand-cream min-h-screen pt-28 pb-20">
            <SectionWrapper className="max-w-4xl mx-auto px-6 text-center">
                <span className="block text-brand-gold text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Roots</span>
                <h1 className="font-serif text-5xl md:text-7xl text-brand-primary font-bold mb-12">
                    The Story of <br /><span className="italic text-brand-dark">Everytime</span>
                </h1>

                <div className="space-y-12 font-serif text-lg md:text-xl leading-loose text-brand-dark/80 text-justify md:text-center">
                    <p className="first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:text-brand-gold first-letter:font-bold">
                        It all started in the vibrant streets of Royapuram in 2024.
                        Everytime Creamery was born from a simple desire: to bring back the authentic joy
                        of real ice cream, free from artificial shortcuts and filled with genuine flavor.
                    </p>

                    <div className="aspect-video w-full bg-brand-dark/5 rounded-sm overflow-hidden relative group">
                        <img
                            src="/images/c2.png"
                            alt="Making Ice Cream"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <span className="text-white font-bold text-3xl uppercase tracking-widest drop-shadow-xl border-y-2 border-white/50 py-2">Handcrafted Daily</span>
                        </div>
                    </div>

                    <p>
                        We believe that ice cream is more than just a dessert—it's a moment of connection.
                        Whether it's the classic comfort of our OG Vanilla or the luxurious indulgence of
                        Hazel Nutella, every scoop is crafted with patience and passion using our slow-churn process.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-b border-brand-dark/10">
                        <div className="text-center group">
                            <span className="block text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</span>
                            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Natural Ingredients</h3>
                            <p className="text-sm font-sans text-brand-dark/60 leading-relaxed max-w-xs mx-auto">
                                We source only the finest, freshest ingredients. No preservatives, no artificial colors, just pure goodness.
                            </p>
                        </div>
                        <div className="text-center group">
                            <span className="block text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">❤️</span>
                            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Made with Love</h3>
                            <p className="text-sm font-sans text-brand-dark/60 leading-relaxed max-w-xs mx-auto">
                                Small batches churned daily in our dedicated kitchen to ensure perfect texture and taste.
                            </p>
                        </div>
                    </div>

                    <p className="text-center italic text-brand-muted text-2xl">
                        "Come for the ice cream, stay for the memories."
                    </p>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
