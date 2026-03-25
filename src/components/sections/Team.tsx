import { useTranslation } from "react-i18next";
import SplitTextAnimation from "../ui/SplitTextAnimation";

export const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <span className="text-mgc-red font-bold tracking-wider uppercase text-sm mb-4 block">{t('team.subtitle')}</span>
        <SplitTextAnimation 
          text="ĐỘI NGŨ CHUYÊN GIA"
          tag="h2"
          className="font-display font-bold text-5xl text-gray-900 uppercase mb-16 text-center"
        />

      </div>
    </section>
  );
};
