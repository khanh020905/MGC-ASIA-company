import { useTranslation } from "react-i18next";
import { CountUp } from "@/components/ui/CountUp";

export const StatsTicker = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
            <span className="font-display font-bold text-6xl text-gray-900 mb-2"><CountUp end={7.6} decimals={1} />B<span className="text-mgc-red">+</span></span>
            <span className="text-gray-500 font-medium">{t('stats.gmv')}</span>
          </div>
          <div className="flex flex-col items-center md:items-start p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
            <span className="font-display font-bold text-6xl text-gray-900 mb-2"><CountUp end={13} /><span className="text-mgc-blue">x</span></span>
            <span className="text-gray-500 font-medium">{t('stats.roi')}</span>
          </div>
          <div className="flex flex-col items-center md:items-start p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100 relative overflow-hidden group">
            <span className="font-display font-bold text-6xl text-gray-900 mb-2 relative z-10"><CountUp end={50} />M<span className="text-mgc-red">+</span></span>
            <span className="text-mgc-blue font-medium relative z-10">{t('stats.network')}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
