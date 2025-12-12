import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import CartSidebar from './components/CartSidebar.tsx';
import Loader from './components/ui/Loader.tsx';
import Home from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import Gifting from './pages/Gifting.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

gsap.registerPlugin(ScrollTrigger);

// Wrapper to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="min-h-screen bg-brand-cream text-brand-dark overflow-x-hidden font-sans">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gifting" element={<Gifting />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Cart Sidebar */}
        <div className="fixed z-[60] top-0 right-0 pointer-events-none">
          <CartSidebar />
        </div>
      </div>
    </Router>
  );
}