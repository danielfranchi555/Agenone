"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import iconMenu from "../../../public/icon-menu.svg";
import Ulmobile from "./Ulmobile";
import UlDesktop from "./UlDesktop";
import glow from "../../../public/Glow.png";
import Fade from "../motionTransition/Fade";
import DialogContact from "../Dialog/DialogContact";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <Fade>
      <div div className="">
        <div className=" flex justify-between px-5 py-5 font-medium  lg:w-[90%] lg:mx-auto ">
          <div className="flex items-center">
            <Image src={logo} width={50} height={50} alt="icon" />
            <span className="text-[15px] md:text-[24px] text-white">
              Ageone
            </span>
          </div>
          <UlDesktop />
          <DialogContact />
          <Image
            src={iconMenu}
            onClick={toggle}
            className="md:hidden z-[2]"
            alt="iamge"
          />
        </div>

        {open ? <Ulmobile /> : ""}
      </div>
    </Fade>
  );
};

export default Navbar;
