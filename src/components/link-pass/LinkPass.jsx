import React from 'react'
import { Link } from 'react-router-dom';

const LinkPass = ({title}) => {
  return (
    <>
      <Link
        className={`group ${title === "ALL CARS" ? "mx-auto"  :"mx-0"} md:mx-0 text-[14px] sm:text-[16px] md:text-[18px] w-[150px]  hover:text-red-600 transition-colors duration-300 flex items-center gap-[10px] font-[500] mt-[30px] text-white`}
        to="/cars"
      >
        {title}
        <svg
          data-v-727266f5
          className="border-white  border rounded-full group-hover:translate-x-[20px] transition-transform duration-300 transition-colors group-hover:border-red-600"
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
    </>
  );
}

export default LinkPass