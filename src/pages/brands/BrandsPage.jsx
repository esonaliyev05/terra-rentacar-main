import axios from "axios";
import React, { memo, useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // To‘g‘ri import
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import LoadingAnimation from "../../components/loading";

const BrandsPage = () => {
  const Forimage = "https://realauto.limsa.uz/api/uploads/images";
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/brands")
      .then((response) => {
        setBrands(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        setLoading(false);
      });
  }, []);

  // Unikal brendlar: har bir brend nomi faqat bir marta ko'rsatiladi
  const uniqueBrands = useMemo(() => {
    const map = new Map();
    brands.forEach((b) => {
      if (!map.has(b.title)) {
        map.set(b.title, b);
      }
    });
    return Array.from(map.values());
  }, [brands]);

  return (
    <section className="bg-[#111219] min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h1 className="font-serif uppercase text-4xl text-white mb-10">Brands</h1>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1280: { slidesPerView: 6, spaceBetween: 25 },
          }}
          autoplay={{ delay: 900, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {uniqueBrands?.map((item) => (
            <SwiperSlide key={item?.id}>
              {/* Yuborilayotgan state: brand nomi */}
              <Link to="/cars" state={{ brand: item.title }} className="block">
                <div className="mb-8 border border-[#393A40] flex flex-col items-center justify-center w-full h-50 bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] hover:bg-gradient-to-tl transition-all duration-500 p-5 animate-pulse">
                  <img
                    src={`${Forimage}/${item?.image_src}`}
                    width={60}
                    alt={item?.title}
                    className="mb-2"
                  />
                  <p className="text-gray-400 text-center">{item?.title}</p>
                </div>
                <div className="border border-[#393A40] flex flex-col items-center justify-center w-full h-50 bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] hover:bg-gradient-to-tl transition-all duration-500 p-5 animate-pulse">
                  <img
                    src={`${Forimage}/${item?.image_src}`}
                    width={60}
                    alt={item?.title}
                    className="mb-2"
                  />
                  <p className="text-gray-400 text-center">{item?.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(BrandsPage);
