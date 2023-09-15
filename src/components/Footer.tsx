import Image from "next/image";
import React from "react";
import logo from "../images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-amazon_light h-40 flex items-center justify-center gap-3">
      <div className="w-20 mt-4">
        <Image src={logo} alt="Logo" />
      </div>
      <p className=" text-slate-300">All rights are reserved </p>
      <div className=" text-slate-300 italic hover:text-white">
        <Link href="https://github.com/asharan2511" target="_blank">
          @AkashGithub
        </Link>
      </div>
    </div>
  );
};

export default Footer;
