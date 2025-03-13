import React from 'react'
import { NavLink } from 'react-router-dom';
import { translations } from "../../data";
import { useSelector } from 'react-redux';

const SingleBlogPage2 = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div>
      <section className='bg-[#1E1F27] mx-auto'>
      <div className="text-white min-h-screen p-6">
      <div className='mb-20'>  
      <NavLink to="/" className='text-[#8FA5A9]'>{translations[language]?.topSinglePage1 || translations?.en?.topSinglePage1}</NavLink>
      </div>  
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold mb-12">
        {translations[language]?.topSinglePage2 || translations?.en?.topSinglePage2}
        </h1>
        <p className="mx-auto mb-6 text-gray-300">
        {translations[language]?.topSinglePage3 || translations?.en?.topSinglePage3}
        </p>
        <p className='pb-5'>{translations[language]?.topSingleBlog6 || translations?.en?.topSingleBlog6}</p>
          <img
            src="https://terra-rentacar.netlify.app/assets/blog-2-BV6fNMEe.jpg"
            alt="Image of Abu Dhabi"
            loading='lazy'
            className="w-full mb-5 md:w-full h-[500px]"
          />
            <p className="text-gray-300 mt-2">
            {translations[language]?.topSinglePage4 || translations?.en?.topSinglePage4}
            </p>
      </div>
    </div>
      </section>
    </div>
  );
}

export default SingleBlogPage2