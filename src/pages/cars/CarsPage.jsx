import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
import { translations } from "../../data";
import { useSelector } from "react-redux";
import LoadingAnimation from "./../../components/loading/index";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    window.scrollTo(0, 0); // Sahifa yuqoriga qaytadi
  }, []);

  // Ma'lumotlarni yuklash
  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsResponse = await axios.get(
          "https://realauto.limsa.uz/api/cars"
        );
        const brandsResponse = await axios.get(
          "https://realauto.limsa.uz/api/brands"
        );
        const categoriesResponse = await axios.get(
          "https://realauto.limsa.uz/api/categories"
        );

        setCars(carsResponse?.data?.data);
        setFilteredCars(carsResponse?.data?.data);
        setBrands(brandsResponse?.data?.data);
        setCategories(categoriesResponse?.data?.data);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!cars.length) return;

    const searchTerm = searchParams.get("search")?.toLowerCase() || ""; // Qidiruv so‘zini olish va kichik harfga o'tkazish
    const filtered = cars.filter(
      (car) =>
        car.brand?.title?.toLowerCase().includes(searchTerm) ||
        car.model?.name?.toLowerCase().includes(searchTerm)
    );

    setFilteredCars(filtered);
  }, [searchParams, cars]);

  const filterUniqueByTitle = (data) => {
    const uniqueTitles = new Set();
    return data.filter((item) => {
      if (!uniqueTitles.has(item.title)) {
        uniqueTitles.add(item.title);
        return true;
      }
      return false;
    });
  };

  // Brendni tanlash
  const handleCategoryChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
    );
  };

  const handleBrandChange = (id) => {
    setSelectedBrands((prev) =>
      prev.includes(id)
        ? prev.filter((brandId) => brandId !== id)
        : [...prev, id]
    );
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  const applyFilter = () => {
    let filtered = cars;

    // 🔹 Kategoriya bo'yicha filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCategories.includes(car.category_id)
      );
    }

    // 🔹 Brend bo'yicha filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((car) =>
        selectedBrands.includes(car.brand_id)
      );
    }

    // 🔹 Model bo'yicha filter
    if (selectedModel) {
      filtered = filtered.filter((car) => car.model.name === selectedModel);
    }

    setFilteredCars(filtered);
  };

  // 🔹 Model tanlanganda avtomatik filter ishlashi uchun useEffect qo‘shamiz
  useEffect(() => {
    applyFilter();
  }, [selectedModel]);

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setFilteredCars(cars); // Asl mashinalar ro'yxatini tiklash
  };

  const uniqueModels = [...new Set(cars.map((car) => car.model.name))];

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <section id="cars" className="pt-[30px] lg:min-h-[1250px]  pb-[30px]">
        <button
          className="block lg:hidden"
          onClick={() => setOpenFilterMenu(true)}
        >
          <img src="/cars/toggle.svg" alt="toggle" />
        </button>
        <div className="container  w-full border-red m-auto flex pl-[5px] my-[50px]">
          <div
            className={` ${
              openFilterMenu
                ? "translate-x-[0%] z-30 top-[105px] w-full"
                : "top-[130px]"
            } absolute left-0  translate-x-[-360%] lg:translate-x-0 translate-transform duration-500  lg:block w-[25%]  bg-[#272933] pt-[35px] pl-[30px] pr-[30px] py-[15px]`}
          >
            <div
              className={`${
                openFilterMenu ? "block" : "hidden"
              } flex items-start justify-between`}
            >
              <img
                className="w-[60%]"
                src="/cars/TerraAvto-CveSQ9CU.png"
                alt="terra"
              />
              <button onClick={() => setOpenFilterMenu(false)}>
                <img src="/cars/close-toggle.svg" alt="close" />
              </button>
            </div>
            <h2 className="text-[#fff] text-[25px] font-[700]">
              {translations[language]?.filterby || translations.en.filterby}{" "}
              <br />
              <span className="font-[350]">
                {translations[language]?.offers || translations.en.offers}
              </span>
            </h2>
            <hr className="text-[#d6d1d1] mt-[25px]" />

            <form>
              <p className="text-[#fff] mt-[20px] mb-[20px]">
                {translations[language]?.cartype || translations.en.cartype}
              </p>
              <div className="flex flex-col gap-[10px]">
                {[
                  ...new Map(
                    categories.map((item) => [item.name_en, item])
                  ).values(),
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center text-[#fff] gap-[15px]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item.id)}
                      onChange={() => handleCategoryChange(item.id)}
                    />
                    <p className="uppercase">{item.name_en}</p>
                  </div>
                ))}
              </div>
            </form>

            <hr className="text-[#d6d1d1] mt-[25px]" />

            <form>
              <p className="text-[#fff] mt-[20px] mb-[20px]">
                {translations[language]?.brand || translations.en.brand}
              </p>
              {[
                ...new Map(brands.map((item) => [item.title, item])).values(),
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center text-[#fff] gap-[15px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(item.id)}
                    onChange={() => handleBrandChange(item.id)}
                  />
                  <p className="uppercase">{item.title}</p>
                </div>
              ))}
            </form>

            <p className="text-[#fff] mt-[20px] mb-[20px]">
              {translations[language]?.model || translations.en.model}
            </p>
            <select
              className="w-[100%] h-[45px] bg-amber-50 outline rounded-[5px]"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">Barcha modelllar</option>
              {[
                ...new Map(
                  cars.map((item) => [item.model.name, item])
                ).values(),
              ].map((item) => (
                <option key={item.model.name} value={item.model.name}>
                  {item.model.name}
                </option>
              ))}
            </select>

            <div className="w-full mt-[25px] flex gap-[25px] justify-between">
              <button
                className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[#fff] border-2 border-white rounded-[4px] cursor-pointer"
                onClick={handleReset}
              >
                {translations[language]?.reset || translations.en.reset}
              </button>
              <button
                className=" pr-[25px] bg-[#009A00] rounded-[4px] text-[#fff] cursor-pointer"
                onClick={() => {
                  applyFilter();
                  setOpenFilterMenu(false);
                }}
              >
                {translations[language]?.applyfilter ||
                  translations.en.applyfilter}
              </button>
            </div>
          </div>

          <div className=" lg:ml-[25%] min-h-[900px]  xl:ml-[23%] lg:w-[77%]">
            <div className="flex pl-[20px] items-center gap-[5px]">
              <a
                className="text-white text-[12px] sm:text-[14px] md:text-[16px] "
                href="/"
              >
                {translations[language]?.link1 || translations.en.link1} /
              </a>
              <a
                className="text-white text-[12px] sm:text-[14px] md:text-[16px]"
                href="/cars"
              >
                {translations[language]?.link2 || translations.en.link2}
              </a>
            </div>
            <div className=" min-h-[680px] flex flex-wrap justify-center sm:justify-between  pt-[25px] gap-[15px] pb-[25px]">
              {loading ? (
                <p className="text-white">Yuklanmoqda...</p>
              ) : filteredCars.length === 0 ? (
                <p className="text-white text-center w-full text-lg">
                  Mos keladigan mashina topilmadi
                </p>
              ) : (
                filteredCars.map((item) => (
                  <div
                    key={item.id}
                    className="max-w-[300px]  sm:max-w-[300px] md:max-w-[350px] xl:max-w-[310px] w-full h-[430px] bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727] border-[#e5e7eb] px-2 rounded-[10px] hover:bg-gradient-to-tl transition-all duration-1000"
                  >
                    <img
                      src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images[0]?.image?.src}`}
                      alt="Car"
                      className="w-[90%] max-w-[100%] h-[200px] max-h-[200px] object-cover m-auto mt-[25px] rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                      onClick={() =>
                        navigate(`/cars/${item.id}`, { state: { car: item } })
                      }
                    />
                    <h3 className="text-white text-start text-[20px] mt-4">
                      {item?.brand?.title}{" "}
                      <span className="pl-[10px]">{item?.model?.name}</span>
                    </h3>
                    <h2 className="text-white text-[20px]">
                      AED {item.price_in_aed} /{" "}
                      <span className="text-gray-500 text-[17px]">
                        {item.price_in_aed_sale}
                      </span>
                    </h2>
                    <span className="text-gray-500 pl-[10px]">per day</span>
                    <div className="w-full flex justify-center gap-[25px] items-center mt-[5px]">
                      <button className="bg-[#00C600] px-[20px] flex gap-1.5 items-center py-[10px] text-white rounded-[5px]">
                        <FaWhatsapp /> Whatsapp
                      </button>
                      <button className="bg-[#2727E0] px-[20px] py-[10px] flex gap-1.5 items-center text-white rounded-[5px]">
                        <RiTelegramFill /> Telegram
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarsPage;
