import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Subheader = () => {
  return (
    <div className=" bg-amazon_light w-full h-full flex">
      <div className=" text-white flex gap-3 p-2 items-center mx-5 ">
        <p className=" px-2 flex  gap-1 hover:border-white border border-transparent cursor-pointer duration-300 items-center">
          <span className=" font-bold">
            <GiHamburgerMenu />
          </span>
          All
        </p>
        <div className=" px-2 gap-1 hidden mdl:inline-flex  hover:border-white border border-transparent cursor-pointer duration-300 items-center">
          <p>Todays Deal</p>
        </div>
        <div className="px-2 gap-1 hidden mdl:inline-flex  hover:border-white border border-transparent cursor-pointer duration-300 items-center">
          <p>Customer Service </p>
        </div>
        <div className="px-2 gap-1 hidden mdl:inline-flex  hover:border-white border border-transparent cursor-pointer duration-300 items-center">
          <p>Registry</p>
        </div>
        <div className=" px-2 gap-1 hidden mdl:inline-flex  hover:border-white border border-transparent cursor-pointer duration-300 items-center">
          <p>Gift Cards</p>
        </div>
        <div className=" px-2 gap-1 hidden mdl:inline-flex  hover:border-white border border-transparent cursor-pointer duration-300 items-center">
          <p>Sell</p>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
