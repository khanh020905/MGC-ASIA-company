import { ArrowUpRight, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Massive Headline */}
        <h2 className="font-display font-bold text-[12vw] leading-none tracking-tight text-gray-900 mb-24 text-center uppercase">
          GET IN TOUCH
        </h2>

        {/* Footer Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-200 pt-16">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-bold text-3xl mb-6 block text-gray-900">MGC ASIA</span>
            <p className="text-gray-600 max-w-sm text-balance">
              {t('footer.desc')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-gray-900 mb-2">{t('footer.offices')}</h4>
            <div className="text-gray-600 space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-mgc-red mt-0.5 shrink-0" />
                <p dangerouslySetInnerHTML={{ __html: t('footer.hcm_address') }}></p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-mgc-red mt-0.5 shrink-0" />
                <p dangerouslySetInnerHTML={{ __html: t('footer.hn_address') }}></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-gray-900 mb-2">{t('footer.social')}</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center justify-between text-gray-600 hover:text-mgc-blue transition-colors group">
                <span className="flex items-center gap-2"><FaFacebook size={18} /> Facebook</span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a href="#" className="flex items-center justify-between text-gray-600 hover:text-pink-600 transition-colors group">
                <span className="flex items-center gap-2"><FaInstagram size={18} /> Instagram</span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a href="#" className="flex items-center justify-between text-gray-600 hover:text-mgc-red transition-colors group">
                <span className="flex items-center gap-2"><FaYoutube size={18} /> YouTube</span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full mt-24 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-mgc-dark">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-mgc-dark">{t('footer.terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
