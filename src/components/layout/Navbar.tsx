import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import mgcLogo from "@/assets/MGC-02-LOGO.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for transparent vs solid background
      setScrolled(currentScrollY > 50);

      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true); // Scrolling down
      } else {
        setHidden(false); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex flex-col items-center pt-2 ${
      hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
    } ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 pb-2" : "bg-transparent pb-4 pointer-events-none"
    } ${!scrolled ? "*:pointer-events-auto" : ""}`}>
      
      {/* Top Row - Logo & Language */}
      <div className="w-full max-w-7xl px-6 flex items-center justify-between md:justify-center relative mb-4">
        {/* Logo */}
        <div className="flex justify-center w-full md:w-auto overflow-visible relative">
          {/* Ambient Glow Behind Logo */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[320px] h-[100px] md:h-[150px] bg-white/70 blur-[40px] md:blur-[60px] rounded-[100%] pointer-events-none transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'} -z-10`} />
          <img src={mgcLogo} alt="MGC Asia" className="relative z-10 h-28 md:h-44 object-contain drop-shadow-lg scale-[1.3] md:scale-[1.5] origin-center -my-8 md:-my-12" />
        </div>

        {/* Language Toggles (Desktop - Absolute Right) */}
        <div className={`hidden md:flex items-center gap-3 transition-all absolute right-6 ${
          !scrolled ? "bg-white/85 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-white/60" : ""
        }`}>
          <button 
            onClick={() => i18n.changeLanguage('vi')}
            className={`${i18n.language === 'vi' ? 'text-gray-900 font-extrabold' : 'text-gray-500 font-medium hover:text-gray-800'} text-[14px] md:text-[15px] transition-colors uppercase tracking-widest`}
          >
            VN
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={() => i18n.changeLanguage('en')}
            className={`${i18n.language === 'en' ? 'text-gray-900 font-extrabold' : 'text-gray-500 font-medium hover:text-gray-800'} text-[14px] md:text-[15px] transition-colors uppercase tracking-widest`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Bottom Row - Navigation Links */}
      <div className={`hidden md:flex items-center gap-10 transition-all ${
        !scrolled ? "bg-white/85 backdrop-blur-md px-10 py-1.5 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-white/60" : ""
      }`}>
        {[
          { key: "navbar.about", href: "#about" },
          { key: "navbar.ecosystem", href: "#services" },
          { key: "navbar.clients", href: "#logos" },
          { key: "navbar.portfolio", href: "#portfolio" },
          { key: "navbar.creators", href: "#team" }
        ].map((link) => (
          <a 
            key={link.key} 
            href={link.href} 
            className={`text-[15px] md:text-base font-bold tracking-[0.15em] transition-colors relative group py-2 
              ${scrolled 
                ? "text-gray-700 hover:text-mgc-red" 
                : "text-gray-900 hover:text-mgc-red"
              }`}
          >
            {t(link.key)}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full bg-mgc-red"></span>
          </a>
        ))}
      </div>

    </nav>
  );
};
