import { PiShieldCheckDuotone, PiLightbulbFilamentDuotone, PiHandshakeDuotone, PiRocketLaunchDuotone } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SplitTextAnimation from "../ui/SplitTextAnimation";

export const Vision = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <PiShieldCheckDuotone size={52} className="text-mgc-blue" />,
      titleKey: "vision.items.0.title",
      descKey: "vision.items.0.desc",
    },
    {
      icon: <PiLightbulbFilamentDuotone size={52} className="text-mgc-blue" />,
      titleKey: "vision.items.1.title",
      descKey: "vision.items.1.desc",
    },
    {
      icon: <PiHandshakeDuotone size={52} className="text-mgc-blue" />,
      titleKey: "vision.items.2.title",
      descKey: "vision.items.2.desc",
    },
    {
      icon: <PiRocketLaunchDuotone size={52} className="text-mgc-blue" />,
      titleKey: "vision.items.3.title",
      descKey: "vision.items.3.desc",
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#EFF2F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SplitTextAnimation 
            text={t("vision.title")}
            tag="h2"
            className="font-display font-bold text-4xl md:text-5xl text-mgc-blue mb-8 uppercase tracking-wide"
          />
          <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed font-light">
            "{t("vision.quote")}"
            <br/><br/>
            <span className="font-medium text-mgc-red not-italic">- {t("vision.author")}</span>
          </p>
        </div>

        {/* 4 Pillars - Rounded Pill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center px-6 pb-10 pt-14 rounded-[2.5rem] bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-gray-300 hover:bg-white hover:shadow-lg transition-all duration-400 cursor-default"
            >
              {/* Icon */}
              <div className="w-[88px] h-[88px] rounded-full bg-[#EFF2F4] flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-400">
                {item.icon}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
