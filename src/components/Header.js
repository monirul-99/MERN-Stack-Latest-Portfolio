import React from "react";

//images import here
import Logo from "../assets/logo.png";

//icons
import { BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="banner" className="cursor-pointer">
            <img className="w-32" src={Logo} alt="" />
          </Link>

          <a
            href="https://drive.google.com/file/d/1TNoZZ2BwYg-4USwr3uxjDwWGJ-nWwnw_/view?usp=share_link"
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm w-36 flex justify-between items-center"
          >
            <p>Resume</p> <BsDownload size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
