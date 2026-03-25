import { useTranslation } from "react-i18next";
import imgMedia from "../../assets/Screenshot 2026-03-25 082737.png";
import imgMarketing from "../../assets/Screenshot 2026-03-25 082746.png";
import imgTraining from "../../assets/Screenshot 2026-03-25 082753.png";
import imgCommerce from "../../assets/Screenshot 2026-03-25 082800.png";

export const Solutions = () => {
  const { t } = useTranslation();

  const cards = [
    {
      image: imgMedia,
      titleKey: "solutions.items.0.title",
      descKey: "solutions.items.0.desc",
      tagsKey: ["solutions.items.0.tags.0", "solutions.items.0.tags.1", "solutions.items.0.tags.2"],
      bg: "bg-white",
    },
    {
      image: imgMarketing,
      titleKey: "solutions.items.1.title",
      descKey: "solutions.items.1.desc",
      tagsKey: ["solutions.items.1.tags.0", "solutions.items.1.tags.1", "solutions.items.1.tags.2"],
      bg: "bg-[#FAFBFC]",
    },
    {
      image: imgTraining,
      titleKey: "solutions.items.2.title",
      descKey: "solutions.items.2.desc",
      tagsKey: ["solutions.items.2.tags.0", "solutions.items.2.tags.1", "solutions.items.2.tags.2"],
      bg: "bg-[#F5F7FA]",
    },
    {
      image: imgCommerce,
      titleKey: "solutions.items.3.title",
      descKey: "solutions.items.3.desc",
      tagsKey: ["solutions.items.3.tags.0", "solutions.items.3.tags.1", "solutions.items.3.tags.2", "solutions.items.3.tags.3"],
      bg: "bg-[#F0F3F7]",
    },
  ];

  return (
    <section id="services" className="relative bg-white py-24 px-6">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-block py-1 px-4 mb-6 border border-gray-300 rounded-full text-gray-500 text-sm tracking-[0.2em] uppercase">
          {t("solutions.subtitle")}
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-mgc-blue uppercase tracking-wide">
          {t("solutions.title")}
        </h2>
      </div>

      {/* Sticky Stacking Cards */}
      <div className="max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="sticky"
            style={{ top: `${80 + idx * 30}px` }}
          >
            <div
              className={`${card.bg} rounded-[2rem] border border-gray-200/80 shadow-[0_4px_32px_rgba(0,0,0,0.06)] overflow-hidden mb-6 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]`}
            >
              <div className="flex flex-col md:flex-row-reverse min-h-[320px]">
                {/* Image — 50% */}
                <div className="w-full md:w-1/2 h-56 md:h-auto overflow-hidden">
                  <img
                    src={card.image}
                    alt={t(card.titleKey)}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content — 50% */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-3">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">
                    {t(card.descKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tagsKey.map((tagKey, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-600 tracking-wide uppercase"
                      >
                        {t(tagKey)}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 w-12 h-12 rounded-full bg-mgc-red flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_20px_rgba(184,13,36,0.4)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
