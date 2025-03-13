import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ To‘g‘ri import
import "swiper/css";
import "swiper/css/pagination";
import axios from 'axios';

function Follows() {
    const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <section id='follow' className="container max-w-screen mx-auto py-8 bg-[#1E1F27]">
      <div className='max-w-[1250px] mx-auto px-5'>
      <h1 className="mx-auto text-white text-3xl font-semibold mb-10">FOLLOW US ON INSTAGRAM</h1>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Telefon
          480: { slidesPerView: 3, spaceBetween: 15 }, // Kichik telefon
          768: { slidesPerView: 4, spaceBetween: 20 }, // Planshet
          1024: { slidesPerView: 5, spaceBetween: 20 }, // Noutbuk
          1280: { slidesPerView: 6, spaceBetween: 25 }, // Katta ekran
        }}
        pagination={{ clickable: true }}
        modules={[ Pagination ]}
        loop={true}
        className="w-full"
      >
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/1T-D45PTDEI.jpg")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/1T-D45PTDEI.jpg" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/2T-B1mJGEs-.jpg")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/2T-B1mJGEs-.jpg" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/3T-BkJVRiBs.webp")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/3T-BkJVRiBs.webp" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/4T-BGQV6HlH.jpg")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/4T-BGQV6HlH.jpg" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/5T-BISrHmDi.jpg")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/5T-BISrHmDi.jpg" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/6T-Bs7OhdEn.webp")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/6T-Bs7OhdEn.webp" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/7T-DB-zL0r0.webp")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/7T-DB-zL0r0.webp" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/8T-Dve_QKXj.webp")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/8T-Dve_QKXj.webp" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/9T-BtgLeMAz.webp")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/9T-BtgLeMAz.webp" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="mb-8 flex items-center justify-center w-full cursor-pointer"
                onClick={() => setSelectedImage("https://terra-rentacar.netlify.app/assets/10T-C3d3mJb9.webp")}>
                <img className="h-46 object-cover" src="https://terra-rentacar.netlify.app/assets/10T-C3d3mJb9.webp" alt="Instagram image" />
              </div>
            </div>
          </SwiperSlide>
      </Swiper>

      {/* Modal - Rasm kattalashtirish */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img className="max-w-[90vw] max-h-[80vh] md:max-w-[70vw] md:max-h-[75vh] lg:max-w-[60vw] lg:max-h-[70vh] xl:max-w-[50vw] xl:max-h-[65vh] rounded-lg object-contain" src={selectedImage} alt="Large preview" />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-opacity-50 rounded-full px-2"
              onClick={() => setSelectedImage(null)}
              >
          ✕  
            </button>
          </div>
        </div>
      )}
     </div>
    </section>
    </div>
  )
}

export default Follows