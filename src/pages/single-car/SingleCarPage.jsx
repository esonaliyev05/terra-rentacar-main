import { useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { MdCalendarToday } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { MdOutlineSpeed } from "react-icons/md";
import { LiaUserSlashSolid } from "react-icons/lia";
import { VscSymbolColor } from "react-icons/vsc";
import { PiEngine } from "react-icons/pi";
import { PiPianoKeys } from "react-icons/pi";
import { TbCar4Wd } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { SlInfo, SlPhone } from "react-icons/sl";
import { BiLogoTelegram } from "react-icons/bi";

const SingleCarPage = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { pathname } = useLocation();

  const car = location.state?.car;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    period: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7815564274:AAHyAdtGAmgvVSFUXUblgLPF4jhJLmY_7rI";
    const chatId = "6992354984";

    const text = `
  📝 <b>Yangi buyurtma!</b> 
  
  👤 <b>Ism:</b> ${formData.name} 
  📞 <b>Telefon:</b> ${formData.phone} 
  📅 <b>Davr:</b> ${formData.period} kun
  📌 <b>Tafsilotlar:</b> ${formData.details}
  🚗 <b>Mashina:</b> ${car.brand.title} ${car.model.name} (${car.color})
  🎂 <b>Yili:</b> ${car.year}
  ⏳ <b>Tezlanish:</b> ${car.seconds} sek
  🚀 <b>Maksimal tezlik:</b> ${car.max_speed} km/h
  👥 <b>O‘rindiqlar soni:</b> ${car.max_people}
  🔧 <b>Motor:</b> ${car.motor}
  ⚙️ <b>Uzatmalar qutisi:</b> ${car.transmission}
  ⛽ <b>Yoqilg‘i turi:</b> ${car.petrol}
  💰 <b>Kunlik narx:</b> AED ${car.price_in_aed_sale} / ${car.price_in_usd_sale} USD
  💳 <b>Depozit:</b> AED ${car.deposit}
  📍 <b>Joylashuv:</b> ${car?.city?.name} Cars
    `;

    const messageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const photoUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

    try {
      const response = await fetch(messageUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        throw new Error("Xabar yuborishda xatolik yuz berdi.");
      }

      // Mashina rasmlarini yuborish
      if (car.images && car.images.length > 0) {
        for (const img of car.images) {
          await fetch(photoUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              photo: img.image,
            }),
          });
        }
      }

      setModalOpen(true);
      setFormData({ name: "", phone: "", period: "", details: "" });
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Tarmoq xatosi yuz berdi.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Sahifa yuqoriga qaytadi
  }, []);

  if (!car)
    return (
      <p className="text-white text-center">Mashina ma'lumoti topilmadi!</p>
    );

  const images = car.car_images.map(
    (img) => `https://realauto.limsa.uz/api/uploads/images/${img.image.src}`
  );

  return (
    <section>
      <div className="container gap-[50px] min-h-[650px] mx-auto px-[50px] text-white my-[50px]">
        <div className="w-full h-auto flex flex-col lg:flex-row gap-[30px] justify-between">
          {/* Chap tomon - Slayder */}
          <div className="max-w-[650px] w-full py-[50px]">
            <h1 className="text-[45px] font-bold uppercase my-[10px]">
              {car.brand.title} {car.model.name} ({car.color})
            </h1>

            <Splide
              ref={mainSliderRef}
              options={{
                type: "fade",
                heightRatio: 0.5,
                pagination: false,
                arrows: true,
                cover: true,
                isNavigation: false,
              }}
              onMove={(splide) => {
                if (thumbSliderRef.current) {
                  thumbSliderRef.current.go(splide.index);
                }
              }}
            >
              {images.map((img, index) => (
                <SplideSlide key={index}>
                  <img
                    src={img}
                    alt={`Car ${index}`}
                    className="w-full max-h-[500px] object-cover rounded-lg drop-shadow-2xl mt-4"
                  />
                </SplideSlide>
              ))}
            </Splide>

            {/* Thumbnail Slayder */}
            <Splide
              ref={thumbSliderRef}
              options={{
                fixedWidth: 150,
                fixedHeight: 100,
                gap: 10,
                focus: "center",
                isNavigation: true,
                pagination: false,
                cover: true,
                type: "loop",
              }}
              onMove={(splide) => {
                if (mainSliderRef.current) {
                  mainSliderRef.current.go(splide.index);
                }
              }}
              className="mt-4"
            >
              {images.map((img, index) => (
                <SplideSlide key={index}>
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover cursor-pointer rounded-md border-2 border-gray-500 hover:border-white transition "
                  />
                </SplideSlide>
              ))}
            </Splide>

            <h2 className="text-[32px] mt-4 font-[700]">
              Good to know about {car.model.name} ({car.color}){" "}
            </h2>
            <p className="text-gray-400 mt-2">Kilometrage limit per day</p>
            <p className="text-lg ">
              {" "}
              {car.max_speed} KM (Every extra km will be charged{" "}
              {car.price_in_aed} AED/km)
            </p>

            <div className="mt-[25px]">
              <p className="text-gray-400 mt-2">Car rental deposit amount</p>
              <p className="text-lg ">
                {" "}
                The deposit is refunded within {car.deposit} days
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg my-[50px] ">
            <div className="w-full flex flex-wrap justify-between items-center  ">
              <h2 className="w-[240px] text-[22px] font-[600]">
                AED {car.price_in_aed_sale}{" "}
                <span>/ {car.price_in_usd_sale}</span>{" "}
                <span className="text-[15px] text-gray-600">per day</span>{" "}
                <span className="text-[15px] text-gray-600">Deposit</span>{" "}
                <br />{" "}
              </h2>

              <h2 className="w-[240px] text-[22px] font-[600]">
                AED {car.deposit} <br />{" "}
                <span className="text-[15px] text-gray-600">
                  AED 5000 for credit cards payment
                </span>{" "}
              </h2>

              <h2 className="w-[280px] text-[22px] font-[600]">
                {" "}
                <span className="text-[22px] font-[600] line-through">
                  AED {car.premium_protection} / {car.price_in_usd}
                </span>{" "}
                <span className="text-[15px] text-gray-600">
                  Premium protection
                </span>{" "}
              </h2>

              <h2 className="w-[220px] text-[22px] font-[600]">
                {" "}
                AED {car.premium_protection} <br />{" "}
                <span className="text-[15px] text-gray-600">
                  AED 5000 for price for 1 day
                </span>{" "}
              </h2>
            </div>

            <hr className="text-[#fff] my-[30px]" />

            <div className="w-full flex justify-between gap-[25px] flex-wrap  md:flex-nowrap lg:flex-wrap gap-y-[25px]">
              <div className="w-[100px] flex flex-col justify-center items-center">
                <MdCalendarToday className="text-[25px] gap-[15px]" />
                {car.year}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <TfiTimer className="text-[25px] gap-[10px]" />
                {car.seconds}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <MdOutlineSpeed className="text-[25px] gap-[10px]" />
                {car.max_speed}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <LiaUserSlashSolid className="text-[25px] gap-[10px]" />
                {car.max_people}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <VscSymbolColor className="text-[25px] gap-[10px]" />
                {car.color}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <PiEngine className="text-[25px] gap-[10px]" />
                {car.motor}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <PiPianoKeys className="text-[25px] gap-[10px]" />
                {car.transmission}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <TbCar4Wd className="text-[25px] gap-[10px]" />
                {car.drive_side}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <LuFuel className="text-[25px] gap-[10px]" />
                {car.petrol}
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center">
                <IoCarSportOutline className="text-[25px] gap-[10px]" />
                {car?.city?.name} Cars
              </div>
            </div>

            <hr className="text-[#fff] my-[30px]" />

            <div className="w-full flex  justify-center items-center gap-[25px]">
              <div className="text-[#fff] bg-[#5AEC5A] flex justify-center items-center w-[80px] h-[60px] rounded-[15px] text-[35px]">
                <FaWhatsapp />
              </div>
              <div className="text-[#fff] bg-[#2374F8] flex justify-center items-center w-[80px] h-[60px] rounded-[15px] text-[35px]">
                <BiLogoTelegram />
              </div>
              <div className="text-[#fff] bg-[#FFB630] flex justify-center items-center w-[80px] h-[60px] rounded-[15px] text-[35px]">
                <SlPhone />
              </div>
            </div>

            <div className="max-w-[380px] w-full min-h-[170px] border-white border-2 m-auto mt-[50px] p-[25px]">
              <p>
                {" "}
                {car.brand.title} {car.model.name} ({car.color})
              </p>

              <form
                onSubmit={handleSubmit}
                className="w-full my-6 flex flex-col justify-center gap-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-14 bg-white text-black p-3 focus:outline-none border border-gray-300"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-14 bg-white text-black p-3 focus:outline-none border border-gray-300"
                  required
                  min={0}
                />
                <input
                  type="number"
                  name="period"
                  placeholder="Period"
                  value={formData.period}
                  onChange={handleChange}
                  className="w-full h-14 bg-white text-black p-3 focus:outline-none border border-gray-300"
                  required
                  min={0}
                />
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full h-14 bg-white text-black p-3 focus:outline-none border border-gray-300"
                />
                <button
                  type="submit"
                  className="w-36 h-12 bg-orange-600 text-white text-lg rounded-md"
                >
                  Submit
                </button>
              </form>

              {/* MODAL */}
              {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-lg z-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold text-gray-800">
                      ✅ Xabar muvaffaqiyatli yuborildi!
                    </p>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="w-auto text-start mt-[40px] text-gray-600 text-[14px]">
              <p>
                The price doesn't include additional 5% VAT. <br />
                There is a 3% transaction fee when paying by credit/debit card.{" "}
                <br />
                There is a 7% transaction fee when paying with American Express.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full gap-[35px] ">
          <h1 className="text-[32px] font-[600] my-[25px]">SIMILAR OFFERS</h1>
          <div className="w-full grid  mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center md:justify-start gap-[20px] ">
            {images.map((item) => (
              <div
                key={item.id}
                className="max-w-[360px] w-full h-[410px] bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] px-2 rounded-[10px] hover:bg-gradient-to-tl transition-all duration-1000"
              >
                {/* Bu yerga ma'lumotlar qo'shish mumkin */}
                <img
                  src={`https://realauto.limsa.uz/api/uploads/images/${car?.car_images[0]?.image?.src}`}
                  alt="Car"
                  className="w-[90%] max-w-[100%] h-[200px] max-h-[200px] object-cover m-auto mt-[25px] rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                />
                <h3 className="text-white text-start text-[20px] mt-4">
                  {car?.brand?.title}{" "}
                  <span className="pl-[10px]">{car?.model?.name}</span>
                </h3>

                <hr className="text-white my-[25px]" />

                <h2 className="text-white text-[20px]">
                  AED {car.price_in_aed} /{" "}
                  <span className="text-gray-500 text-[17px]">
                    {car.price_in_aed_sale}
                  </span>
                </h2>
                <span className="text-gray-500 pl-[10px]">per day</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCarPage;
