import React from 'react'
import maped from '../../assets/uslug-1-Dm8nxdJt.jpg';
import rasm from '../../assets/uslug-2-LkBjqsZl.jpg';
import { useSelector } from 'react-redux';
import { translations } from '../../data';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  const language = useSelector((state) => state.language.language);
  return (

    <section className='bg-[#1e1f27] h-full w-full pt-[90px] pb-[90px]'>
      <div className='container mx-auto px-5'>
        <div className='flex justify-start'>
          <Link to="/">
            <p class="text-[#fff9] text-[14px] text-center md:text-left">
              {translations[language]?.breadcrumb1 || translations?.en?.breadcrumb1}/
            </p>
          </Link>
          <Link to="/services" className='text-[14px] text-[#fff9]'>
            <p className='text-center sm:text-left'>{translations[language]?.breadcrumb2 || translations?.en?.breadcrumb2}</p>
          </Link>
        </div>
        <h3 data-v-0347924f="" class="text-white text-[22px] text-center sm:text-left sm:text-[36px] py-[40px] font-semibold">{translations[language]?.service || translations?.en?.service}</h3>
        <div className='flex flex-wrap gap-6'>
          <div className='p-2 md:w-[360px]'>
            <img src={maped} alt="" className='mx-auto md:mx-0' />
            <h4 className='text-white text-[26px] my-[25px] font-semibold leading-[100%]'>{translations[language]?.service1Title || translations?.en?.service1Title}</h4>
            <p className='text-white text-[22px] mb-[40px]'>{translations[language]?.service1Subtitle || translations?.en?.service1Subtitle}</p>
            <Link to="/services/uslugbuggies" className=' flex items-center justify-evenly w-[200px] hover:ml-4 transition-all duration-700'>
              <p className='text-white font-bold'>{translations[language]?.serviceLink || translations?.en?.serviceLink}</p>
              <img data-v-0347924f="" src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
            </Link>
          </div>
          <div className='p-2 md:w-[360px]'>
            <img src={rasm} alt="" className='mx-auto md:mx-0' />
            <h4 className='text-white text-[26px] my-[25px]  font-semibold leading-[100%]'>{translations[language]?.service2Title || translations?.en?.service2Title}</h4>
            <p className='text-white text-[22px]  mb-[60px]'>
            {translations[language]?.service2Subtitle || translations?.en?.service2Subtitle}
            </p>
            <Link to="/services/uslugcar" className='flex items-center justify-evenly w-[200px] hover:ml-4 transition-all duration-700'>
              <p className='text-white font-bold'>{translations[language]?.serviceLink || translations?.en?.serviceLink}</p>
              <img src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2010L21%2016.5L13%2023L17.5714%2016.5L13%2010Z'%20fill='white'%3e%3c/path%3e%3ccircle%20cx='16'%20cy='16'%20r='15.5'%20stroke='white'%3e%3c/circle%3e%3c/svg%3e" alt="" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ServicePage