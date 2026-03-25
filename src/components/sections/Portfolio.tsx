import { Button } from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import SplitTextAnimation from "../ui/SplitTextAnimation";

import img30Shine from "../../assets/30shine.png";
import imgVaseline from "../../assets/vaseline.png";
import imgVibBank from "../../assets/vib-bank.png";
import imgDhFoods from "../../assets/dhfoods.png";



export const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      client: t('portfolio.campaigns.0.client'),
      campaign: t('portfolio.campaigns.0.campaign'),
      category: t('portfolio.campaigns.0.category'),
      bg: "bg-blue-100",
      image: img30Shine,
    },
    {
      client: t('portfolio.campaigns.1.client'),
      campaign: t('portfolio.campaigns.1.campaign'),
      category: t('portfolio.campaigns.1.category'),
      bg: "bg-pink-100",
      image: imgVaseline,
    },
    {
      client: t('portfolio.campaigns.2.client'),
      campaign: t('portfolio.campaigns.2.campaign'),
      category: t('portfolio.campaigns.2.category'),
      bg: "bg-orange-100",
      image: imgVibBank,
    },
    {
      client: t('portfolio.campaigns.3.client'),
      campaign: t('portfolio.campaigns.3.campaign'),
      category: t('portfolio.campaigns.3.category'),
      bg: "bg-green-100",
      image: imgDhFoods,
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 relative bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-mgc-red font-bold tracking-wider uppercase text-sm mb-4 block">{t('portfolio.subtitle')}</span>
            <SplitTextAnimation 
              text={t('portfolio.title')}
              tag="h2"
              className="font-display font-bold text-5xl text-gray-900 uppercase"
            />
          </div>
          <Button variant="outline" className="hidden md:flex border-gray-900 text-gray-900 hover:bg-gray-200">{t('portfolio.cta')}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-square lg:aspect-[4/3] cursor-pointer">
              {/* Image background */}
              <img
                src={item.image}
                alt={item.client}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-black/60 via-black/10 to-transparent">
                <div className="flex justify-end">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-gray-900 shadow-sm text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-3xl text-white mb-2">{item.client}</h3>
                  <p className="text-white/90 font-medium">{item.campaign}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Button variant="outline" className="w-full border-gray-900 text-gray-900">{t('portfolio.cta')}</Button>
        </div>

      </div>
    </section>
  );
};
