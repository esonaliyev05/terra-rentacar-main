import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { translations } from "../../data";

const SingleBlogPage = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div>
      <section className="bg-[#1E1F27] mx-auto">
        <div className="text-white min-h-screen p-6">
          <div className="mb-20">
            <div className="container mx-auto px-[20px]">
              <NavLink to="/" className="text-[#8FA5A9]">
                {translations[language]?.topSingleBlog1 || translations?.en?.topSingleBlog1}
              </NavLink>
              <Link to="/blog">{translations[language]?.topSingleBlog2 || translations?.en?.topSingleBlog2}</Link>
              <Link to="/blog/singleblog">{translations[language]?.topSingleBlog3 || translations?.en?.topSingleBlog3}</Link>
            </div>
          </div>
          <div className="container mx-auto px-[20px]">
            <h1 className="text-2xl md:text-5xl font-bold mb-12">
            {translations[language]?.topSingleBlog4 || translations?.en?.topSingleBlog4}
            </h1>
            <p className="mx-auto mb-6 text-gray-300">
            {translations[language]?.topSingleBlog5 || translations?.en?.topSingleBlog5}
            </p>
            <p className="pb-5">{translations[language]?.topSingleBlog6 || translations?.en?.topSingleBlog6}</p>
            <img
              src="https://terra-rentacar.netlify.app/assets/blog-1-CqRaJa1U.jpg"
              alt="Image of Abu Dhabi"
              loading="lazy"
              className="w-full mb-5 md:w-full object-cover object-bottom h-[500px]"
            />
            <p className="text-gray-300 mt-2">
            {translations[language]?.topSingleBlog7 || translations?.en?.topSingleBlog7}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
