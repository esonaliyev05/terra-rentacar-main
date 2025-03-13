import React from 'react';
import dc from '../../assets/mm34-DCy6GvLS.png';
import { useSelector } from 'react-redux';
import { translations } from '../../data';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <section className=''>
      <div className='relative m-auto'>
        <img src={dc} alt="" className='lg:flex w-full h-full absolute opacity-30 top-0' />
        <div className='container m-auto relative text-white text-center sm:text-left py-[25px] sm:py-[50px] px-2'>
          <div className='flex justify-start'>
            <Link to="/">
              <p class="text-[#fff9] text-[14px] text-center md:text-left">
                {translations[language]?.breadcrumb1 || translations?.en?.breadcrumb1}/
              </p>
            </Link>
            <Link to="/about" className='text-[#fff9] text-[14px] text-center md:text-left'>{translations[language]?.aboutUs || translations?.en.aboutUs}</Link>
          </div>
          <h3 class="text-[26px] sm:text-[32px] font-semibold my-[15px] sm:my-[50px]">{translations[language]?.aboutUs || translations?.en.aboutUs}</h3>
          <h4 class="text-[22px] sm:text-[30px]">{translations[language]?.autozoom || translations?.en.autozoom}</h4>
          <p class="text-[#cacaca] text-[19px] sm:mb-[50px] mt-[15px]">{translations[language]?.autozoom1 || translations?.en.autozoom1}</p>
          <h3 class="text-[26px] sm:text-[32px] font-semibold mt-[20px] sm:mt-[50px] mb-[30px]">{translations[language]?.autozoom2 || translations?.en.autozoom2}</h3>
          <article class="flex flex-col gap-7">
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">{translations[language]?.elegant || translations?.en.elegant}</h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">{translations[language]?.elegant1 || translations?.en.elegant1}
              </p>
            </div>
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">{translations[language]?.rental || translations?.en.rental}
              </h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">{translations[language]?.rental1 || translations?.en.rental1}
              </p>
            </div>
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">{translations[language]?.trans || translations?.en.trans}
              </h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">{translations[language]?.costum || translations?.en.costum}
              </p>
            </div>
            <div class="txt-con leading-[30px]">
              <h3 class="text-[22px] font-bold inline-block mr-[5px]">{translations[language]?.level || translations?.en.level}
              </h3>
              <p class="inline text-[#d8d8d8] text-[18px] font-normal">{translations[language]?.professional || translations?.en.professional}
              </p>
            </div>
          </article>
          <h5 class="text-[22px] font-bold mt-[30px] sm:mt-[100px]">{translations[language]?.mission || translations?.en.mission}</h5>
          <p class="mt-2 text-[18px]">{translations[language]?.zoomrental || translations?.en.zoomrental}</p>
          <h5 class="text-[22px] font-bold mt-[15px]">{translations[language]?.contactUs || translations?.en.contactUs}</h5>
          <p class="mt-2 text-[18px]">{translations[language]?.zoomcar || translations?.en.zoomcar}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage