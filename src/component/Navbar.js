import React from "react";
import image2 from "../images/2.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className=" flex justify-between mx-6  items-center border-b">
        <Link to={"/"}>
          <span>
            <img className=" w-36" src={image2} alt="logo" />
          </span>
        </Link>

        <ul className=" flex space-x-8 text-blue-600">
          <Link to={"/"}>
            <li className=" border-transparent border-b hover:border-blue-500 cursor-pointer transition duration-300">
              Home
            </li>
          </Link>

          <li className=" border-transparent border-b hover:border-blue-500 cursor-pointer transition duration-300">
            activite
          </li>
          <li className=" border-transparent border-b hover:border-blue-500 cursor-pointer transition duration-300">
            produits
          </li>
          <li className=" border-transparent border-b hover:border-blue-500 cursor-pointer transition duration-300">
            contactez nous
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
