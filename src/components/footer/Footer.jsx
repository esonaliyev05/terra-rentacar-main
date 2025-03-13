import React from "react";
import { useSelector } from "react-redux";
import { translations } from "../../data";
import { Link } from "react-router-dom";

const Footer = () => {
    const language = useSelector((state) => state?.language.language);

  return (
    <footer className="footer relative pt-[60px] pb-[60px] bg-[url('/footer/footer-main.png')] bg-contain bg-bottom  sm:bg-[300px_60px]  xl:bg-[600px_60px] bg-no-repeat">
      <div className="container relative z-10 flex-col md:flex-row mx-auto gap-[60px] px-[20px] flex">
        <div className="w-[260px] mx-auto text-center md:text-left md:mx-0">
          <a className="w-[130px] inline-block mb-[20px]" href="/">
            <img className="w-full" src="/footer/logo.png" alt="logo" />
          </a>
          <h1 className="text-white text-[38px] leading-[40px] mb-[20px] font-bold">
            {translations[language]?.luxuryCarRental ||
              translations?.en?.luxuryCarRental}
          </h1>
          <p className="text-white">
            {translations[language]?.sportdesc || translations?.en?.sportdesc}
          </p>
          <a
            className="border-[2px] text-center transition-colors duration-300 border-solid border-white px-[40px] py-[30px] inline-block mt-[20px] rounded-[12px] text-white hover:bg-red-500 hover:border-red-500 "
            href="tel:+998937550412"
          >
            {translations[language]?.getBestOffer ||
              translations?.en?.getBestOffer}
          </a>
        </div>
        <div className="flex flex-col w-full md:w-[70%]">
          <div className="flex flex-col sm:flex-row text-center sm:text-left mt-[30px] gap-[20px] justify-between w-full">
            <ul className="flex flex-col gap-[30px]">
              <li>
                <a className="text-white text-[18px]" href="/cars">
                  {translations[language]?.navigation?.cars ||
                    translations?.en?.navigation?.cars}
                </a>
              </li>
              <li>
                <a className="text-white text-[18px]" href="/blog">
                  {translations[language]?.navigation?.blog ||
                    translations?.en?.navigation?.blog}
                </a>
              </li>
              <li>
                <a className="text-white text-[18px]" href="/services">
                  {translations[language]?.navigation?.service ||
                    translations?.en?.navigation?.service}
                </a>
              </li>
              <li>
                <a className="text-white text-[18px]" href="/about">
                  {translations[language]?.navigation?.aboutUs ||
                    translations?.en?.navigation?.aboutUs}
                </a>
              </li>
              <li>
                <a className="text-[18px] text-white" href="/contact">
                  {translations[language]?.navigation?.contacts ||
                    translations?.en?.navigation?.contacts}
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-[30px]">
              <li className="text-white">
                {translations[language]?.navigation?.contacts ||
                  translations?.en?.navigation?.contacts}
              </li>
              <li className="text-gray-300">
                {" "}
                {translations[language]?.city1 || translations?.en?.city1}
              </li>
              <li className="text-gray-300">
                {" "}
                {translations[language]?.city2 || translations?.en?.city2}
              </li>
              <li className="text-gray-300">
                {" "}
                {translations[language]?.city3 || translations?.en?.city3}
              </li>
              <li className="text-gray-300">+998 99 0000441</li>
              <li className="text-gray-300">workingHours</li>
            </ul>
            <ul className="flex flex-col gap-[30px]">
              <li className="text-white">
                <a href="/about">
                  {" "}
                  {translations[language]?.navigation?.aboutUs ||
                    translations?.en?.navigation?.aboutUs}
                </a>
              </li>
              <li className="text-white">
                <a href="/about">OUR TEAM</a>
              </li>
              <li className="text-white">
                <a href="/faq">
                  {" "}
                  {translations[language]?.faaq || translations?.en?.faaq}
                </a>
              </li>
              <li className="text-white">
                {translations[language]?.followUs || translations?.en?.followUs}
              </li>
              <li className="text-white flex justify-between items-center">
                <a href="/">
                  <img src="/footer/media-1.svg" alt="media" />
                </a>
                <a href="/">
                  <img src="/footer/media-2.svg" alt="media" />
                </a>
                <a href="/">
                  <img src="/footer/media-3.svg" alt="media" />
                </a>
              </li>
            </ul>
          </div>
          <span className="h-[1px] w-full bg-red-500 mt-[30px] mb-[5px]"></span>
          <ul className="flex justify-between gap-[20px] items-center">
            <li className="text-white">
              © 2024 {translations[language]?.city || translations?.en?.city}.
            </li>
            <li className="text-white">
              {" "}
              <Link to="/conditions/#conditions">
                {translations[language]?.termsAndConditions ||
                  translations?.en?.termsAndConditions}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute overlay w-full h-full top-0 z-0"></div>
    </footer>
  );
};

export default Footer;
