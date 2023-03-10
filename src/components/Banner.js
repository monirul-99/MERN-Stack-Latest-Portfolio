import React from "react";

//images import here
import Image from "../assets/avatar.svg";
//Icons Import here
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//type image animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text area*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Monirul <span>Islam</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "React JS Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis corrupti perferendis at non quas sed libero debitis,
              reprehenderit quibusdam.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
              <a className="text-gradient btn-link" href="#">
                My Portfolio
              </a>
            </div>
            {/* social link */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </div>
          </div>
          {/* images area */}
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
