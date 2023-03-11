import React from "react";

//images import here
import Logo from "../assets/logo.png";

//icons
import { BsDownload } from "react-icons/bs";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-32" src={Logo} alt="" />
          </a>

          <button className="btn btn-sm w-36 flex justify-between items-center">
            <p>Resume</p> <BsDownload size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
