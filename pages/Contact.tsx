import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="bg-brand-cream min-h-screen pt-28 pb-20">
            <SectionWrapper className="text-center mb-16">
                <span className="block text-brand-gold text-xs font-bold uppercase tracking-[0.25em] mb-4">Get in Touch</span>
                <h1 className="font-serif text-5xl md:text-7xl text-brand-dark font-bold mb-6">Visit Us</h1>
                <p className="font-serif text-brand-muted italic text-xl max-w-2xl mx-auto">
                    We love hearing from you. Drop by for a scoop or send us a message.
                </p>
            </SectionWrapper>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Info */}
                    <div className="space-y-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-dark/5">
                            <h3 className="font-serif text-2xl text-brand-dark font-bold mb-6">Royapuram Store</h3>
                            <address className="not-italic text-brand-dark/70 space-y-2 leading-relaxed font-light">
                                <p className="font-bold text-brand-dark">Everytime Creamery</p>
                                <p>123, Kalmandapam Main Road,</p>
                                <p>Royapuram, Chennai - 600013</p>
                                <p className="pt-4">+91 98765 43210</p>
                                <p>hello@everytimecreamery.com</p>
                            </address>
                            <div className="mt-8">
                                <Button variant="outline" size="sm">Get Directions</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-brand-dark font-bold mb-6">Opening Hours</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm font-light text-brand-dark/80">
                                <div>
                                    <span className="block font-bold text-brand-primary uppercase tracking-widest text-xs mb-1">Mon - Fri</span>
                                    <span>3:00 PM - 11:00 PM</span>
                                </div>
                                <div>
                                    <span className="block font-bold text-brand-primary uppercase tracking-widest text-xs mb-1">Sat - Sun</span>
                                    <span>12:00 PM - 11:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-brand-dark/5">
                        <h3 className="font-serif text-2xl text-brand-dark font-bold mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">Name</label>
                                <input type="text" className="w-full bg-brand-cream/10 border-b border-brand-dark/20 focus:border-brand-primary py-2 outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">Email</label>
                                <input type="email" className="w-full bg-brand-cream/10 border-b border-brand-dark/20 focus:border-brand-primary py-2 outline-none transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">Message</label>
                                <textarea className="w-full bg-brand-cream/10 border-b border-brand-dark/20 focus:border-brand-primary py-2 outline-none transition-colors h-32 resize-none" placeholder="Tell us what's on your mind..."></textarea>
                            </div>
                            <Button variant="primary" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
