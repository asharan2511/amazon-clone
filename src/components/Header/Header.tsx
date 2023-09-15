import React from "react";
import logo from "../../images/logo.png";
import cart from "../../images/cartIcon.png";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
const Header = () => {
  return (
    <div className=" w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className=" h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <div className=" px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <Image className=" w-28 object-cover" src={logo} alt="LogoImg" />
        </div>
        {/* Delivery */}
        <div className="px-2 items-center gap-1 border border-transparent hover:border-white cursor-pointer duration-300 hidden xl:inline-flex ">
          <SlLocationPin />
          <div className=" text-xs">
            <p>Deliver to</p>
            <p>
              <b>USA</b>
            </p>
          </div>
        </div>
        {/*search Bar  */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className=" w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-y-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder=" Search next_amazon Products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <BiSearch />
          </span>
        </div>
        {/* Sign in Options */}
        <div className=" px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex flex-col items-center justify-center h-[70%]">
          <p className=" text-sm ">Hello,sign in</p>
          <p className=" text-white flex items-center text-sm font-semibold ">
            Accounts & Lists{" "}
            <span>
              <MdOutlineArrowDropDown />
            </span>
          </p>
        </div>
        {/* Favourtites */}
        <div className=" px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex flex-col items-center justify-center h-[70%]">
          <p className="text-sm">Marked</p>
          <p className=" text-white font-bold text-sm">& Favourite</p>
        </div>
        {/* Cart */}
        <div className=" px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] relative">
          <Image
            src={cart}
            alt="cartIcon"
            className=" h-8 w-auto object-cover"
          />
          <p className=" text-white text-xs font-bold mt-3 ">Cart</p>
          <span className=" absolute  text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
