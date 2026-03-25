import { useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitTextAnimation from "../ui/SplitTextAnimation";

export const Hero = () => {
  const { t } = useTranslation();
  const bgRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Background Image Zoom & In
    tl.fromTo(bgRef.current, 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // 2. Tagline Fade in (slightly after BG starts)
    tl.fromTo(taglineRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // 3. CTA Fade in (after everything else)
    tl.fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.2"
    );
  }, { scope: bgRef });

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Full Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
          alt="Media Studio Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Minimal Gradient Overlays */}
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[800px] h-[400px] bg-white/80 blur-[80px] rounded-full pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-20 flex flex-col items-center">
        
        <div ref={taglineRef}>
          <span className="inline-block py-1 px-4 mb-8 border border-gray-300 rounded-full text-gray-800 text-sm tracking-[0.2em] uppercase backdrop-blur-sm bg-white/50">
            {t('hero.tagline')}
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.2] mb-8 uppercase">
          <SplitTextAnimation 
            text={t('hero.title_1')}
            className="text-mgc-blue"
            delay={50}
            duration={1.2}
            tag="span"
            marginBottom="-1.85rem"
            startDelay={1500}
          />
          <SplitTextAnimation 
            text={t('hero.title_2')}
            className="text-mgc-red"
            delay={50}
            duration={1.2}
            tag="span"
            startDelay={2000}
          />
        </h1>

        <div ref={ctaRef} className="mt-12">
          <button className="bg-mgc-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-medium tracking-wide uppercase transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(196,30,42,0.5)]">
            {t('hero.cta')}
          </button>
        </div>
      </div>

      {/* Floating Side Socials */}
      <div className="absolute right-6 bottom-12 z-20 flex flex-col gap-3">
        <a href="#" className="w-12 h-12 bg-mgc-blue hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="w-12 h-12 bg-white hover:bg-gray-100 text-gray-900 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-transform hover:scale-110">
          <FaTiktok size={20} />
        </a>
        <a href="#" className="w-12 h-12 bg-mgc-red hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
      </motion.div>

    </section>
  );
};
