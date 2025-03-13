import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Homecars = () => {
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsResponse = await axios.get("https://realauto.limsa.uz/api/cars");
        setCars(carsResponse?.data?.data || []);

        const categoriesResponse = await axios.get("https://realauto.limsa.uz/api/categories");
        setCategories(categoriesResponse?.data?.data || []);
      } catch (error) {
        setError(error);
        console.error("Xatolik:", error);
      }
    };

    fetchData();
  }, []);

  if (error) return <p className="text-red-500 text-center">Xatolik yuz berdi: {error.message}</p>;

  return (
    <div className="container mx-auto px-[50px]">
      <div className="w-full min-h-[550px] m-auto flex-wrap flex justify-around gap-[25px]">
        {categories.map((category) => {
          const categoryCars = cars.filter(car => car.category_id === category.id).slice(0, 3);

          if (categoryCars.length === 0) return null;

          return (
            <div key={category.id} className="w-full">
              <Link to={"/cars"}
                className="w-full flex items-center justify-between gap-2 text-white text-lg font-medium mt-6 hover:text-red-600 transition"
                onClick={() => navigate(`/cars/${category.id}`, { state: { category } })}
              >
                <span className="text-[45px] uppercase group-hover:-translate-x-2 transition-transform">
                  {category.name_en}
                </span>
                <svg
                  className="w-9 h-9 border border-white rounded-full hover:border-red-600 transition"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="fill-white hover:fill-red-600 transition" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z" />
                  <circle cx="16" cy="16" r="15.5" stroke="white" />
                </svg>
              </Link>

              <div className="flex gap-[20px] justify-start flex-wrap">
                {categoryCars.map((item) => {
                  if (item?.car_images?.length > 0) {
                    return (
                      <div
                        key={item.id}
                        className="w-[310px] h-[400px] px-2 rounded-[10px] border-[#e5e7eb] my-4 hover:bg-gradient-to-tl transition-all duration-1000 bg-gradient-to-br from-[#29292944] via-[#29292944] to-[#95979727]"
                      >
                        <img
                          src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images?.[0]?.image?.src}`}
                          alt={item?.model?.name}
                          className="w-[90%] h-[200px] object-cover m-auto mt-[25px] rounded-lg cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => navigate(`/cars/${item.id}`, { state: { car: item } })}
                        />
                        <h3 className="text-white text-[20px] mt-4">
                          {item?.brand?.title} <span className="pl-[10px]">{item?.model?.name}</span>
                        </h3>
                        <h2 className="text-white text-[20px]">
                          AED {item.price_in_aed} / <span className="text-gray-500 text-[17px]">{item.price_in_aed_sale}</span>
                        </h2>
                        <span className="text-gray-500">per day</span>
                      </div>
                    );
                  } else {
                    return (
                      <div key={item.id} className="w-[310px] h-[150px] px-2 rounded-[10px] border-[#e5e7eb] my-4 flex flex-col justify-center items-center">
                        <h3 className="text-white text-[20px] mt-4">
                          {item?.brand?.title} <span className="pl-[10px]">{item?.model?.name}</span>
                        </h3>
                        <h2 className="text-white text-[20px]">
                          AED {item.price_in_aed} / <span className="text-gray-500 text-[17px]">{item.price_in_aed_sale}</span>
                        </h2>
                        <span className="text-gray-500">per day</span>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homecars;
