import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import CircularGallery from "../ui/CircularGallery";

// --- 3D ---
import img3d_1 from "../../assets/3D/Screenshot 2026-03-25 083426.png";
import img3d_2 from "../../assets/3D/Screenshot 2026-03-25 083435.png";
import img3d_3 from "../../assets/3D/Screenshot 2026-03-25 083443.png";
import img3d_4 from "../../assets/3D/Screenshot 2026-03-25 083450.png";

// --- COLOR BRANDING ---
import imgCb_1 from "../../assets/COLOR-BRADNING/Screenshot 2026-03-25 083626.png";
import imgCb_2 from "../../assets/COLOR-BRADNING/Screenshot 2026-03-25 083630.png";
import imgCb_3 from "../../assets/COLOR-BRADNING/Screenshot 2026-03-25 083635.png";
import imgCb_4 from "../../assets/COLOR-BRADNING/Screenshot 2026-03-25 083639.png";
import imgCb_5 from "../../assets/COLOR-BRADNING/Screenshot 2026-03-25 083644.png";

// --- KV PHOTOSHOOT ---
import imgKv_1 from "../../assets/KV-PHOTOSHOOT/Screenshot 2026-03-25 083332.png";
import imgKv_2 from "../../assets/KV-PHOTOSHOOT/Screenshot 2026-03-25 083339.png";
import imgKv_3 from "../../assets/KV-PHOTOSHOOT/Screenshot 2026-03-25 083345.png";
import imgKv_4 from "../../assets/KV-PHOTOSHOOT/Screenshot 2026-03-25 083354.png";

// --- MOTION ---
import imgMo_1 from "../../assets/MOTION/Screenshot 2026-03-25 083510.png";
import imgMo_2 from "../../assets/MOTION/Screenshot 2026-03-25 083517.png";
import imgMo_3 from "../../assets/MOTION/Screenshot 2026-03-25 083525.png";

// --- VFX ---
import imgVfx_1 from "../../assets/VFX/Screenshot 2026-03-25 083547.png";
import imgVfx_2 from "../../assets/VFX/Screenshot 2026-03-25 083557.png";
import imgVfx_3 from "../../assets/VFX/Screenshot 2026-03-25 083603.png";

type CategoryKey = "3D" | "COLOR_BRANDING" | "KV_PHOTOSHOOT" | "MOTION" | "VFX";

interface Category {
  key: CategoryKey;
  label: string;
  items: { image: string; text: string }[];
}

const categories: Category[] = [
  {
    key: "KV_PHOTOSHOOT",
    label: "KV Photoshoot",
    items: [
      { image: imgKv_1, text: "KV Photoshoot" },
      { image: imgKv_2, text: "KV Photoshoot" },
      { image: imgKv_3, text: "KV Photoshoot" },
      { image: imgKv_4, text: "KV Photoshoot" },
    ],
  },
  {
    key: "3D",
    label: "3D Design",
    items: [
      { image: img3d_1, text: "3D Design" },
      { image: img3d_2, text: "3D Design" },
      { image: img3d_3, text: "3D Design" },
      { image: img3d_4, text: "3D Design" },
    ],
  },
  {
    key: "COLOR_BRANDING",
    label: "Color Branding",
    items: [
      { image: imgCb_1, text: "Color Branding" },
      { image: imgCb_2, text: "Color Branding" },
      { image: imgCb_3, text: "Color Branding" },
      { image: imgCb_4, text: "Color Branding" },
      { image: imgCb_5, text: "Color Branding" },
    ],
  },
  {
    key: "MOTION",
    label: "Motion",
    items: [
      { image: imgMo_1, text: "Motion" },
      { image: imgMo_2, text: "Motion" },
      { image: imgMo_3, text: "Motion" },
    ],
  },
  {
    key: "VFX",
    label: "VFX",
    items: [
      { image: imgVfx_1, text: "VFX" },
      { image: imgVfx_2, text: "VFX" },
      { image: imgVfx_3, text: "VFX" },
    ],
  },
];

export const CreativeGallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("KV_PHOTOSHOOT");
  const [displayCategory, setDisplayCategory] = useState<CategoryKey>("KV_PHOTOSHOOT");
  const [fading, setFading] = useState(false);

  const handleCategoryChange = (key: CategoryKey) => {
    if (key === activeCategory) return;
    setFading(true);
    setTimeout(() => {
      setActiveCategory(key);
      setDisplayCategory(key);
      setTimeout(() => setFading(false), 50);
    }, 350);
  };

  const displayItems = useMemo(
    () => categories.find((c) => c.key === displayCategory)?.items ?? [],
    [displayCategory]
  );

  return (
    <section className="relative bg-white pt-30 pb-4 overflow-x-clip z-10">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 px-6">
        <span className="inline-block py-1 px-4 mb-6 border border-gray-300 rounded-full text-gray-500 text-sm tracking-[0.2em] uppercase">
          {t("creative.subtitle")}
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-mgc-blue uppercase tracking-wide">
          {t("creative.title")}
        </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 px-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`
              px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 border
              ${activeCategory === cat.key
                ? "bg-mgc-blue text-white border-mgc-blue shadow-[0_0_20px_rgba(30,61,111,0.2)]"
                : "bg-transparent text-gray-500 border-gray-300 hover:text-mgc-blue hover:border-mgc-blue"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Circular Gallery with fade transition */}
      <div
        style={{
          height: "700px",
          position: "relative",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.35s ease-in-out",
          marginBottom: "10px",
        }}
        key={displayCategory}
      >
        <CircularGallery
          items={displayItems}
          bend={1}
          textColor="#1E3D6F"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
};

