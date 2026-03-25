import { ArrowRight, Box, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation, Trans } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-20 border-b border-gray-200 pb-12">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mb-6 uppercase leading-tight">
              <Trans i18nKey="about.title">
                We shape the future of <span className="text-mgc-red">media commerce.</span>
              </Trans>
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.desc')}
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2 border-gray-900 text-gray-900 hover:bg-gray-100">
            {t('about.cta')} <ArrowRight size={16}/>
          </Button>
        </div>

        {/* Core Values 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-200 hover:border-mgc-blue/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-mgc-blue/10 flex items-center justify-center text-mgc-blue mb-6 group-hover:scale-110 transition-transform">
              <Box size={32} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 uppercase">{t('about.pillar_1.title')}</h3>
            <p className="text-gray-600">
               {t('about.pillar_1.desc')}
            </p>
          </div>

          <div className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-200 hover:border-mgc-red/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-mgc-red/10 flex items-center justify-center text-mgc-red mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp size={32} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 uppercase">{t('about.pillar_2.title')}</h3>
            <p className="text-gray-600">
               {t('about.pillar_2.desc')}
            </p>
          </div>

          <div className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-200 hover:border-gray-400 transition-colors relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 size={32} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 uppercase">{t('about.pillar_3.title')}</h3>
            <p className="text-gray-600 z-10 relative">
               {t('about.pillar_3.desc')}
            </p>
            {/* Decorative gradient blur */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-mgc-blue/10 blur-3xl rounded-full z-0"></div>
          </div>

        </div>

      </div>
    </section>
  );
};
