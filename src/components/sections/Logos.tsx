import { Marquee } from "@/components/ui/Marquee";
import { useTranslation } from "react-i18next";
import SplitTextAnimation from "../ui/SplitTextAnimation";

export const Logos = () => {
  const { t } = useTranslation();
  const partners = [
    "TIKTOK SHOP PARTNER",
    "SHOPEE MCN",
    "30SHINE",
    "VASELINE",
    "VIB BANK",
    "CHINSU",
    "DH FOODS",
    "HONECO"
  ];

  return (
    <section id="logos" className="py-20 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="shrink-0 text-center md:text-left">
          <SplitTextAnimation 
            text={t('logos.title')}
            tag="h2"
            className="font-display font-bold text-4xl text-gray-900 uppercase mb-2"
          />
          <p className="text-gray-500 font-medium">{t('logos.subtitle')}</p>
        </div>

        <div className="flex-1 overflow-hidden w-full relative">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <Marquee speed={25} className="py-4">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity mx-8">
                <span className="font-display font-extrabold text-2xl text-gray-900 tracking-wider blur-[0.5px] hover:blur-none transition-all">
                  {partner}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
};
