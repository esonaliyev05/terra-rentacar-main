import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkPass from "../../components/link-pass/LinkPass";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { translations } from "../../data";
import Homecars from "../../components/home-cars/Homecars";
import Follows from './../../components/Follows/Follows';
import BrandsPage from "../brands/BrandsPage";
import Locations from "../../components/Locations/Locations";
import LoadingAnimation from "../../components/loading";
import ServicePage from "../services/ServicePage";


const HomePage = () => {
  const language = useSelector((state) => state.language.language);

  const [activeIndex, setActiveIndex] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main>
      <section id="hero" className="pt-[90px] pb-[90px]">
        <div className="container  px-[20px] mb-[40px] mx-auto">
          <h1 className="text-center font-[500] text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-serif">
            {translations[language]?.heroTitle || translations?.en?.heroTitle}
          </h1>
          <h1 className="text-center font-[500] text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-serif">
            №1
          </h1>
          <p className="text-white text-center text-[16px] lg:text-[18px] mt-[15px]">
            {translations[language]?.heroSubtitle ||
              translations?.en?.heroSubtitle}
          </p>
          <Link
            className={`group w-full mx-auto md:mx-0 text-[14px] sm:text-[16px] md:text-[18px] text-center hover:text-red-600 transition-colors duration-300 flex items-center justify-center gap-[10px] font-[500] mt-[30px] text-white`}
            to="/cars"
          >
            <span className="group-hover:-translate-x-[20px] transition-transform duration-300">
              {translations[language]?.heroLink || translations.en.heroLink}
            </span>
            <svg
              data-v-727266f5
              className="border-white w-[36px]  border rounded-full group-hover:translate-x-[10px] transition-transform duration-300 transition-colors group-hover:border-red-600"
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-727266f5
                className="path group-hover:fill-red-600 transition-colors duration-300"
                fill="white"
                d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
              ></path>
              <circle
                data-v-727266f5
                class="circle"
                cx="16"
                cy="16"
                r="15.5"
              ></circle>
            </svg>
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          navigation={true}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }, 
            1280: { slidesPerView: 3 }, 
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex - 1)}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex pt-[90px] relative pb-[90px] md:ml-[20px] lg:ml-0 justify-center pl-[50px] lg:pl-0 lg:pr-0 pr-[50px]"
            >
              <Link to={"/cars"}>
                <img
                  className={`transition-all max-w-[600px] lg:max-w-[700px] w-full duration-300 rounded-lg ${
                    index === (activeIndex + 1) % 4 ? "filter-image" : "image"
                  }`}
                  src={`/home/hero-swiper-${item}.png`}
                  alt={`Slide ${item}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* <LoadingAnimation/> */}

      <section id="brands">
        <BrandsPage />
      </section>
      <section id="cars">
        <Homecars />
      </section>
      <section id="service">
        <ServicePage/>
      </section>
      <section id="about"></section>
      <section id="rental" className="relative pt-[60px] pb-[90px]">
        <img
          className="image-container hidden md:block h-[700px] top-0 absolute left-0"
          src="/home/rental-left.png"
          alt="rental-left"
        />
        <img
          className="image-container hidden md:block h-[700px] top-0 absolute right-0"
          src="/home/rental-right.png"
          alt="rental-left"
        />
        <div className="container relative  z-10 mx-auto px-[20px]">
          <h1 className="text-[24px] sm:text-[28px]  md:text-[36px] lg:text-[42px] text-white font-[500] mb-[5px]">
            {translations[language]?.luxuryCarRental ||
              translations.en.luxuryCarRental}
          </h1>
          <p className="text-white text-[16px] leading-[30px] md:leading-[35px]">
            {translations[language]?.luxuryCarRentalDesc ||
              translations.en.luxuryCarRentalDesc}
          </p>
          <h2 className="mt-[30px] text-[28px] md:text-[42px] text-white font-[500]">
            {translations[language]?.rentalRequirements ||
              translations.en.rentalRequirements}
          </h2>
          <p className="text-white text-[16px] leading-[30px] md:leading-[35px] mt-[5px]">
            {translations[language]?.rentalRequirementsDesc ||
              translations.en.rentalRequirementsDesc}
          </p>
        </div>
      </section>
      <section
        id="sports-car"
        className="bg-gray-950 relative pt-[60px] pb-[60px] md:pb-[100px] lg:pb-[100px] xl:pb-[150px]"
      >
        <img
          className="hidden md:w-[300px] lg:w-[350px] xl:w-[400px] md:block absolute top-0  right-0"
          src="/home/sport-car-left.png"
          alt="sport-car-left"
        />
        <div className="hidden h-[400px] top-[60px]  md:mb-0 md:w-[55%] md:hidden lg:inline-block lg:absolute z-30">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/rsHmvxJ86PA?si=IV1NlzM7QxBEHYow"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="container px-[20px]  gap-[20px]  flex flex-col md:flex-row md:justify-end mx-auto relative z-10">
          <iframe
            className=" w-full lg:hidden"
            height="350"
            src="https://www.youtube.com/embed/rsHmvxJ86PA?si=IV1NlzM7QxBEHYow"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className=" lg:w-[40%]   mx-auto text-center md:mx-0 md:text-left self-right">
            <h1 className="text-white text-[28px] md:text-[42px] leading-[40px] mb-[20px]">
              {translations[language]?.sportsCarRental ||
                translations.en.sportsCarRental}
            </h1>
            <p className="text-white text-[16px] md:text-[18px] leading-[30px]">
              {translations[language]?.sportsCarRentalDesc ||
                translations.en.sportsCarRentalDesc}
            </p>
            <div className=" mx-auto flex justify-center md:justify-start">
              <LinkPass
                title={`${
                  translations[language]?.seeLink || translations.en.seeLink
                }`}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="super-car" className="flex flex-col md:flex-row">
        <div className="h-[300px] md:w-[50%] w-full">
          <img
            className="h-[100%] w-full object-cover"
            src="/home/super-car.webp"
            alt="super-car"
          />
        </div>
        <div className="pt-[40px]  pb-[30px] md:pb-[0] pl-[30px]">
          <h1 className="text-white text-[28px] sm:text-[32px] font-[500] mb-[5px] md:text-[32px] lg:text-[38px] xl:text-[42px]">
            {translations[language]?.superCarRental ||
              translations.en.superCarRental}
          </h1>
          <h2 className="text-white text-[18px]">
            {" "}
            {translations[language]?.superCarRentalDesc ||
              translations.en.superCarRentalDesc}
          </h2>
          <div className=" mx-auto flex justify-center md:justify-start">
            <LinkPass
              title={`${
                translations[language]?.seeLink || translations.en.seeLink
              }`}
            />
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="pt-[90px] pb-[90px] relative  faq bg-cover bg-center"
      >
        <div className="absolute top-0 bg-gray-950 opacity-[0.7] w-full h-full"></div>
        <div className="container relative mx-auto px-[20px]">
          <h1 className="text-center text-white text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-[500]">
            {translations[language]?.faaq || translations.en.faaq}
          </h1>
          <div>
            {(translations[language]?.faq || translations?.en?.faq).map(
              (item, index) => (
                <div
                  key={item.id || index}
                  className="h-[90px] max-w-[900px] w-full mx-auto"
                >
                  {/* Header */}
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex gap-[5px] pb-[20px] pt-[20px] items-center mx-auto justify-center cursor-pointer"
                  >
                    {/* Left Icon */}
                    <span
                      className={`${
                        openIndex === index ? "animate-bounce" : "bounce-x-left"
                      } mr-[20px]`}
                    >
                      <svg
                        width="22px"
                        className={`${
                          openIndex === index ? "rotate-270" : "rotate-180"
                        } transition-transform duration-300 fill-white`}
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_67" data-name="Layer 67">
                          <path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                          <path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                        </g>
                      </svg>
                    </span>

                    {/* Question Text */}
                    <button className="text-white text-center text-[16px] sm:text-[18px] cursor-pointer lg:text-[24px]">
                      {item.questionFaq}
                    </button>

                    {/* Right Icon */}
                    <span
                      className={`${
                        openIndex === index
                          ? "animate-bounce"
                          : "bounce-x-right"
                      } ml-[20px]`}
                    >
                      <svg
                        width="22px"
                        className={`${
                          openIndex === index ? "-rotate-90" : "rotate-0"
                        } transition-transform duration-300 fill-white`}
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_67" data-name="Layer 67">
                          <path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                          <path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>

                  {/* Animated Gradient Border */}
                  <span
                    className={`animated-gradient block h-[2px] bg-gray-500 transition-all duration-500 mx-auto ${
                      openIndex === index ? "w-0" : "w-full"
                    }`}
                  ></span>

                  {/* Answer (Content) */}
                  <div
                    className={`faq-item rounded-[8px] transform transition-all relative z-20 duration-300 bg-gray-700 text-white text-[18px] p-[10px] ${
                      openIndex === index
                        ? "opacity-100 translate-y-[10px] h-auto"
                        : "opacity-0 translate-y-[-20px] h-0 overflow-hidden"
                    }`}
                  >
                    <p>{item.answerFaq}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section id="follow">
        <Follows />
      </section>
      <section id="locations">
        <Locations />
      </section>
    </main>
  );
};

export default HomePage;
