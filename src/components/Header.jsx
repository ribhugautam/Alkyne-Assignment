import React from "react";
import logo from "/logo.svg";
function Header() {
  return (
    <div className="fixed text-center border-b-2 z-10 w-full py-2 text-white font-inter font-medium text-md leading-5 ">
      <div className="flex flex-row p-1 items-center w-[90%] mx-auto justify-between">
          <ul className="uppercase gap-8 flex justify-between items-center flex-row ">
            <li className="cursor-pointer h-full">Projects</li>
            <li className="cursor-pointer h-full">Expertise</li>
            <li className="cursor-pointer h-full">About us</li>
            <li className="cursor-pointer h-full">people</li>
          </ul>
        <img src={logo} alt="logo" width={106} height={106} className="-ml-64"  />
        <ul className="uppercase gap-8 flex flex-row ">
          <li>Careers</li>
          <li>AU</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
