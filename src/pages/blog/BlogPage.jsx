import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { translations } from "../../data";

const BlogPage = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <section className="container mx-auto px-[20px] pt-[30px] pb-[60px]">
      <div>
        <Link to="/" className="text-[#A5A5A9]">
          <p className="pl-6 pt-7 text-[#A5A5A9]">
            {translations[language]?.breadcrumb1 || translations?.en?.breadcrumb1}
          </p>
        </Link>
        <h1 className="text-[#FFF] text-3xl pt-10 pl-6 font-sans">{translations[language]?.navigation.blog || translations?.en?.navigation.blog}</h1>
        <div>
          <div className="container">
            <a className="  mt-8 flex flex-col md:gap-[20px] shadow-sm md:flex-row p-[20px] items-center bg-[#272933]">
              <img
                className="w-full md:max-w-[300px]"
                loading="lazy"
                src="https://terra-rentacar.netlify.app/assets/blog-1-CqRaJa1U.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between mt-[20px] md:mt-0  leading-normal">
                <h5 className=" text-[24px]   lg:text-[36px] font-medium tracking-tight text-white">
                {translations[language]?.topCarsBlog || translations?.en?.topCarsBlog}
                </h5>
                <p className="mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl">
                {translations[language]?.topCarsBlog1 || translations?.en?.topCarsBlog1}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white pt-7"> {translations[language]?.topCarsBlog2 || translations?.en?.topCarsBlog2}</p>
                  <NavLink to="/blog/singleblog">
                    <i
                      style={{ color: "white", fontSize: "30px" }}
                      className="fa-solid fa-circle-chevron-right"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </a>
            <a className="  mt-8 flex flex-col md:gap-[20px]  shadow-sm md:flex-row p-[20px] items-center bg-[#272933]">
              <img
                className="w-full md:max-w-[300px]"
                loading="lazy"
                src="https://terra-rentacar.netlify.app/assets/blog-2-BV6fNMEe.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between mt-[20px] md:mt-0  leading-normal">
                <h5 className="text-[24px] lg:text-[36px] font-medium tracking-tight text-white">
                {translations[language]?.topCarsBlog3 || translations?.en?.topCarsBlog3}
                </h5>
                <p className="mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl">
                {translations[language]?.topCarsBlog4 || translations?.en?.topCarsBlog4}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white pt-7">{translations[language]?.topCarsBlog5 || translations?.en?.topCarsBlog5}</p>
                  <NavLink to="/blog/singleblog2">
                    <i
                      style={{ color: "white", fontSize: "30px" }}
                      className="fa-solid fa-circle-chevron-right"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </a>
            <a className="mt-8 flex flex-col md:gap-[20px]  shadow-sm md:flex-row p-[20px] items-center bg-[#272933]">
              <img
                className="w-full md:max-w-[300px]"
                loading="lazy"
                src="https://terra-rentacar.netlify.app/assets/blog-3-BRfPXlF4.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between mt-[20px] md:mt-0  leading-normal">
                <h5 className="text-[24px]   lg:text-[36px] font-medium tracking-tight text-white">
                {translations[language]?.topCarsBlog6 || translations?.en?.topCarsBlog6}
                </h5>
                <p className="mb-3 text-[16px] lg:text-[20px] font-normal text-white max-w-6xl mt-[10px] md:mt-0">
                {translations[language]?.topCarsBlog7 || translations?.en?.topCarsBlog7}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white pt-7"> {translations[language]?.topCarsBlog8 || translations?.en?.topCarsBlog8}</p>
                  <NavLink to="/blog/singleblog3">
                    <i
                      style={{ color: "white", fontSize: "30px" }}
                      className="fa-solid fa-circle-chevron-right"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogPage);
