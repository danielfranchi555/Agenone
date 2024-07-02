import Link from "next/link";
import React from "react";

const UlDesktop = () => {
  return (
    <ul className="hidden md:flex  items-center gap-10 text-[15px] text-[#fff] leading-[14px] ">
      <Link href="#">Inicio</Link>
      <Link href="#servicios">Servicios</Link>
      <Link href="#proyectos">Proyectos</Link>
      <Link href="#acercade">Acerca de</Link>
    </ul>
  );
};

export default UlDesktop;
