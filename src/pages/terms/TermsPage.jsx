import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { translations } from "../../data";
import { useLocation } from "react-router-dom";

const TermsPage = () => {
  const language = useSelector((state) => state.language.language);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section id="condition" className="pt-[60px] pb-[60px]">
      <div className="container mx-auto px-[20px]">
        <h1 className="text-white text-[24px] mb-[20px] font-[500]">
          {translations[language]?.termsTitle || translations?.en?.termsTitle}
        </h1>
        <p className="text-white mb-[30px] font-[500]">
          {translations[language]?.termsDesc || translations?.en?.termsDesc}
        </p>
        <h1 className="text-white text-[24px] mb-[10px] font-[500]">
          {translations[language]?.termsRow1Title ||
            translations?.en?.termsRow1Title}
        </h1>
        <p className="text-white mb-[30px] font-[500]">
          {translations[language]?.termsRow1Desc ||
            translations?.en?.termsRow1Desc}
        </p>
        <h1 className="text-white text-[24px] mb-[10px] font-[500]">
          {translations[language]?.termsRow2Title ||
            translations?.en?.termsRow2Title}
        </h1>
        <p className="text-white mb-[30px] font-[500]">
          {translations[language]?.termsRow2Desc ||
            translations?.en?.termsRow2Desc}
        </p>
        <h1 className="text-white text-[24px] mb-[10px] font-[500]">
          {translations[language]?.termsRow3Title ||
            translations?.en?.termsRow3Title}
        </h1>
        <p className="text-white mb-[30px] font-[500]">
          {translations[language]?.termsRow3Desc ||
            translations?.en?.termsRow3Desc}
        </p>
        <h1 className="text-white text-[24px] mb-[10px] font-[500]">
          {translations[language]?.termsRow4Title ||
            translations?.en?.termsRow4Title}
        </h1>
        <p className="text-white mb-[30px] font-[500]">
          {translations[language]?.termsRow4Desc ||
            translations?.en?.termsRow4Desc}
        </p>
        <h1 className="text-white text-[24px] mb-[10px] font-[500]">
          {translations[language]?.termsRow5Title ||
            translations?.en?.termsRow5Title}
        </h1>
        <p className="text-white mb-[30px] font-[500]">
          {translations[language]?.termsRow5Desc ||
            translations?.en?.termsRow5Desc}
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
