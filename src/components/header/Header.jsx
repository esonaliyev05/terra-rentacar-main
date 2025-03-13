import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "./style.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/LanguageSlice";
import { translations } from "../../data";
import { useSearch } from "../SearchContext/SearchContext ";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [brands, setBrands] = useState(null);
  const [resNavbar, setResNavbar] = useState(false);
  const navigate = useNavigate();

  // Global search state
  const { searchTerm, setSearchTerm } = useSearch();

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  // Brands ma'lumotlarini olish
  const getBrand = async () => {
    try {
      const res = await axios.get("https://realauto.limsa.uz/api/brands");
      setBrands(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBrand();
  }, []);

  const location = useLocation();

  return (
    <>
      <header className="navbar relative z-40 h-[100px] flex items-center sm:flex-wrap justify-center">
        <div className="container mx-auto px-[20px] flex justify-between items-center gap-[20px]">
          <div className="flex items-center gap-[10px]">
            {/* Language buttons */}
            <div className="flex gap-[5px] items-center">
              <button onClick={() => dispatch(setLanguage("en"))} className="w-[30px] h-[30px] cursor-pointer">
                <img className="w-full sm:w-auto" src="/header/en-lang.png" alt="en-lang" />
              </button>
              <button onClick={() => dispatch(setLanguage("ru"))} className="w-[30px] h-[30px] cursor-pointer">
                <img className="w-full sm:w-auto" src="/header/rus-lang.png" alt="ru-lang" />
              </button>
            </div>

            {/* Search input */}
            <div className="relative">
              {/* Kichik ekranlar uchun search tugmasi */}
              <button onClick={() => setSearchOpen(!searchOpen)} className="xl:hidden block p-2 rounded-full">
                <img src="/header/search-lang.png" alt="search" className="w-[20px] h-[20px]" />
              </button>

              {/* Search form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className={`absolute xl:static left-0 right-0 mx-auto transition-all duration-300 justify-center ${
                  searchOpen ? "top-[70px] w-[300px] opacity-100 left-[-220%]" : "top-[-100px] opacity-0"
                } xl:opacity-100 xl:top-0 xl:block w-[350px] overflow-hidden rounded-[10px]`}
              >
                <input
                  type="search"
                  placeholder={translations[language]?.searchPlaceholder || "Search..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input h-[50px] pl-[40px] pr-[10px] w-full outline-none text-[18px] placeholder:text-gray-500"
                />
                <NavLink to={"/cars"}>

                <button type="submit" >
                  <img className="absolute top-[14px] left-[10px]" src="/header/search-lang.png" alt="search" />
                </button>
                </NavLink>
              </form>
            </div>
          </div>

          <NavLink className="w-[120px] inline-block" to="/">
            <img src="/header/logo-header-1.png" alt="logo-header" />
          </NavLink>

          <nav className="hidden xl:flex flex-col justify-between h-[75px]">
            <ul className="flex items-center gap-[30px]">
              <li className="pb-[20px]">
                <NavLink
                  className={({ isActive }) =>
                    `transition-transform duration-300 group text-[18px] uppercase ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                  to={"cars"}
                >
                  {translations[language]?.navigation?.cars || translations?.en?.navigation?.cars}
                  <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
                </NavLink>
              </li>
              <li className="relative pb-[20px] group">
                <NavLink
                  className={({ isActive }) =>
                    `transition-transform duration-300 group text-[18px] uppercase ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                  to={"brands"}
                >
                  {translations[language]?.navigation?.brand || translations?.en?.navigation?.brand}
                  <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
                </NavLink>
                <ul className="absolute hidden transition-transform duration-300 rounded-[12px] group-hover:grid grid-cols-3 p-[20px] gap-[30px] w-[600px] top-[40px] left-[-157px] bg-gray-700">
                  {brands?.map((brand) => (
                    <li key={brand?.id}   onClick={() =>
                      navigate(`/singleCarPage/${item.id}`, { state: { car: item } })
                    }>
                      <NavLink className="brand-img flex items-center gap-[10px] brand-link" to={`cars/${brand?.id}` }>
                        <img
                          className="w-[40px]"
                          src={`https://realauto.limsa.uz/api/uploads/images/${brand?.image_src}`}
                          alt="image"
                        />
                        <span className="flex flex-nowrap text-gray-200 font-bold text-[18px]">
                          {brand?.title}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="pb-[20px]">
                <NavLink
                  className={({ isActive }) =>
                    `transition-transform duration-300 group text-[18px] uppercase ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                  to={"services"}
                >
                  {translations[language]?.navigation?.service || translations?.en?.navigation?.service}
                  <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
                </NavLink>
              </li>
              <li className="pb-[20px]">
                <NavLink
                  className={({ isActive }) =>
                    `transition-transform duration-300 group text-[18px] uppercase ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                  to={"about"}
                >
                  {translations[language]?.navigation?.aboutUs || translations?.en?.navigation?.aboutUs}
                  <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
                </NavLink>
              </li>
              <li className="pb-[20px]">
                <NavLink
                  className={({ isActive }) =>
                    `transition-transform duration-300 group text-[18px] uppercase ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                  to={"contact"}
                >
                  {translations[language]?.navigation?.contacts || translations?.en?.navigation?.contacts}
                  <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
                </NavLink>
              </li>
              <li className="pb-[20px]">
                <NavLink
                  className={({ isActive }) =>
                    `transition-transform duration-300 group text-[18px] uppercase ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                  to={"blog"}
                >
                  {translations[language]?.navigation?.blog || translations?.en?.navigation?.blog}
                  <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
                </NavLink>
              </li>
            </ul>
            <a className="text-white self-end" href="tel:+998937550412">
              +998(93)755-04-12
            </a>
          </nav>
          <button onClick={() => setResNavbar(!resNavbar)} className="block xl:hidden">
            <FiMenu className="text-red-600 text-[28px] cursor-pointer" />
          </button>
        </div>
      </header>

      <div
        className={`xl:hidden fixed top-0 left-0 w-full z-50 transition-transform duration-800 h-full bg-gray-500 ${
          resNavbar ? "sm:translate-x-[30%] lg:translate-x-[50%]" : "-translate-x-[-100%]"
        }`}
      >
        <nav className="flex relative flex-col justify-center items-left h-full p-[30px] bg-black">
          <ul className="flex flex-col items-left gap-[30px]">
            <li className="pb-[20px]">
              <NavLink
                onClick={() => setResNavbar(false)}
                className={({ isActive }) =>
                  `transition-transform duration-300 group inline-block text-[24px] uppercase ${
                    isActive ? "text-red-500" : "text-white"
                  }`
                }
                to={"cars"}
              >
                {translations[language]?.navigation?.cars || translations?.en?.navigation?.cars}
                <span className="block h-[1px] mx-auto bg-red-500 transition-all duration-1000 ease-in-out group-hover:max-w-full max-w-[0px] rounded-full"></span>
              </NavLink>
            </li>
            {/* Boshqa navigatsiya elementlari */}
          </ul>
          <a className="text-white self-left text-[24px]" href="tel:+998937550412">
            +998(93)755-04-12
          </a>
          <IoClose onClick={() => setResNavbar(false)} className="absolute right-[15px] sm:right-[35%] lg:right-[53%] top-[30px] cursor-pointer text-[38px] text-red-600" />
        </nav>
      </div>
    </>
  );
};

export default Header;
