import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.0.title'),
      desc: t('services.items.0.desc'),
      tags: ["TikTok Shop", "Shopee", "Fulfillment"],
      color: "bg-emerald-50 border-emerald-100 hover:border-emerald-300"
    },
    {
      title: t('services.items.1.title'),
      desc: t('services.items.1.desc'),
      tags: ["Livestream", "4K Studio", "Daily Sales"],
      color: "bg-orange-50 border-orange-100 hover:border-orange-300"
    },
    {
      title: t('services.items.2.title'),
      desc: t('services.items.2.desc'),
      tags: ["KOC Network", "Affiliate", "Influencer"],
      color: "bg-blue-50 border-blue-100 hover:border-blue-300"
    },
    {
      title: t('services.items.3.title'),
      desc: t('services.items.3.desc'),
      tags: ["3D/VFX", "Photoshoot", "Short Video"],
      color: "bg-purple-50 border-purple-100 hover:border-purple-300"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="text-mgc-red font-bold tracking-wider uppercase text-sm mb-4 block">{t('services.subtitle')}</span>
          <h2 className="font-display font-bold text-5xl text-gray-900 uppercase mb-6">
            {t('services.title').split(' ').slice(0, 1).join(' ')} <br/> {t('services.title').split(' ').slice(1).join(' ')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`group p-10 rounded-[2.5rem] border transition-all duration-300 cursor-pointer ${service.color} flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display font-bold text-3xl text-gray-900 max-w-[80%]">{service.title}</h3>
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:bg-mgc-red group-hover:text-white transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {service.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 bg-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
