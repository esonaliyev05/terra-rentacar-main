import React from 'react'
import sportcar from '../../assets/uslug-sportcar-1-Ck5Sy84C.jpg';
import sportcat2 from '../../assets/uslug-sportcar-2-eD2_lVq8.jpg';
import sportcat3 from '../../assets/uslug-sportcar-3-CI-yhwgq.jpg';
import dowloud from '../../assets/download.png';
import { useSelector } from 'react-redux';
import { translations } from '../../data';
import { Link } from 'react-router-dom';

const UslugCarPage = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <section className='bg-[#1e1f27]'>

      <div className='container  py-[50px] m-auto'>
        <div className='flex justify-start'>

          <Link to="/">
            <p class="text-[#fff9] text-[14px] text-center md:text-left">
              {translations[language]?.breadcrumb1 || translations?.en?.breadcrumb1}/
            </p>
          </Link>
          <Link to="/services" className='text-[#fff9] text-[14px] text-center md:text-left'> {translations[language]?.breadcrumb2 || translations?.en?.breadcrumb2}/</Link>
          <Link to="uslugcar" className='text-[#fff9] text-[14px] text-center md:text-left'>{translations[language]?.service2Title || translations?.en?.service2Title}</Link>
        </div>
        <h3 class="text-white text-[32px] text-center md:text-left my-[10px] p768:my-[50px] mx-2 font-semibold">
          {translations[language]?.service2Title || translations?.en?.service2Title}
        </h3>
        <div className='flex gap-2 flex-wrap justify-center  p-2 py-[50px] lg:justify-between'>
          <div className='w-[300px] md:w-[380px] h-full bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] rounded-[10px]  transition-all duration-1000'>
            <img src={sportcar} alt="" className='w-full h-[230px] rounded-lg' />
            <div className='text-container px-[25px]'>
              <h3 className='text-white mt-[25px]'>{translations[language]?.easy || translations?.en.easy} </h3>
              <div className='text-white mt-[30px] flex items-center gap-5'>
                <p className='border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg'>1000</p>
                <p>{translations[language]?.person1 || translations?.en.person1}</p>
              </div>
              <p className='text-white mt-[25px]'>
                {translations[language]?.serviceDescription || translations?.en.serviceDescription}
              </p>
              <p className='text-white text-[26px] font-semibold my-[25px]'>{translations[language]?.package || translations?.en.package}</p>
              <div className='flex items-center gap-5 mt-[15px]'>
                <img src={dowloud} alt="" />
                <p className='text-white text-[18px] font-semibold'>{translations[language]?.premium || translations?.en.premium}</p>
              </div>
              <div className='flex items-center gap-5 mt-[15px]'>
                <img src={dowloud} alt="" />
                <p className='text-white text-[18px] font-semibold'>{translations[language]?.dune || translations?.en.dune}</p>
              </div>
              <div className='flex items-center gap-5 mt-[15px]'>
                <img src={dowloud} alt="" />
                <p className='text-white text-[18px] font-semibold'>{translations[language]?.falcone || translations?.en.falcone}</p>
              </div>
              <div className='flex items-center gap-5 mt-[15px]'>
                <img src={dowloud} alt="" />
                <p className='text-white text-[18px] font-semibold'>{translations[language]?.camel || translations?.en.camel}</p>
              </div>
              <div className='flex items-center gap-5 mt-[15px]'>
                <img src={dowloud} alt="" />
                <p className='text-white text-[18px] font-semibold'>{translations[language]?.vip || translations?.en.vip}</p>
              </div>
              <div className='flex items-center gap-5 mt-[15px]'>
                <img src={dowloud} alt="" />
                <p className='text-white text-[18px] font-semibold'>{translations[language]?.fruit || translations?.en.fruit}</p>
              </div>
              <Link to="tel:+998990000441">
                <button className='w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] rounded-2xl'>{translations[language]?.book || translations?.en.book}</button>
              </Link>
            </div>
          </div>
          <div className='flex gap-2 flex-wrap justify-center lg:justify-between p-2  '>
            <div className='w-[300px] md:w-[380px] h-full bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] rounded-[10px]  transition-all duration-1000'>
              <img src={sportcat2} alt="" className='w-full h-[230px] rounded-lg' />
              <div className='text-container px-[25px]'>
                <h3 className='text-white mt-[25px]'>{translations[language]?.easy || translations?.en.easy} </h3>
                <div className='text-white mt-[30px] flex items-center gap-5'>
                  <p className='border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg'>2000</p>
                  <p>{translations[language]?.person2 || translations?.en.person2}</p>
                </div>
                <p className='text-white mt-[25px]'>
                  {translations[language]?.serviceDescription || translations?.en.serviceDescription}
                </p>
                <p className='text-white text-[26px] font-semibold my-[25px]'>{translations[language]?.package || translations?.en.package}</p>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.premium || translations?.en.premium}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.dune || translations?.en.dune}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.falcone || translations?.en.falcone}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.camel || translations?.en.camel}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.vip || translations?.en.vip}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.fruit || translations?.en.fruit}</p>
                </div>
                <Link to="tel:+998990000441">
                  <button className='w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] rounded-2xl'>{translations[language]?.book || translations?.en.book}</button>
                </Link>
              </div>
            </div>
          </div>
          <div className=' flex gap-2 flex-wrap justify-center lg:justify-between p-2 '>
            <div className='w-[300px] md:w-[380px] h-full bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] rounded-[10px]  transition-all duration-1000'>
              <img src={sportcat3} alt="" className='w-full h-[230px] rounded-lg' />
              <div className='text-container px-[25px]'>
                <h3 className='text-white mt-[25px]'>{translations[language]?.easy || translations?.en.easy} </h3>
                <div className='text-white mt-[30px] flex items-center gap-5'>
                  <p className='border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg'>3  000</p>
                  <p>{translations[language]?.person3 || translations?.en.person3}</p>
                </div>
                <p className='text-white mt-[25px]'>
                  {translations[language]?.serviceDescription || translations?.en.serviceDescription}
                </p>
                <p className='text-white text-[26px] font-semibold my-[25px]'>{translations[language]?.package || translations?.en.package}</p>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.premium || translations?.en.premium}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.dune || translations?.en.dune}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.falcone || translations?.en.falcone}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.camel || translations?.en.camel}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.vip || translations?.en.vip}</p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={dowloud} alt="" />
                  <p className='text-white text-[18px] font-semibold'>{translations[language]?.fruit || translations?.en.fruit}</p>
                </div>
                <Link to="tel:+998990000441">
                  <button className='w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] rounded-2xl'>{translations[language]?.book || translations?.en.book}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default UslugCarPage