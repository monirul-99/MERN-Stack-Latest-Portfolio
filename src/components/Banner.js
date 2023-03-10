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
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/* text area*/}
          <div>
            <h1>
              Monirul <span>Islam</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">I'm a</span>
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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis corrupti perferendis at non quas sed libero debitis,
              reprehenderit quibusdam.
            </p>
            <div>
              <button>Conatct Me</button>
              <a href="#">My Portfolio</a>
            </div>
          </div>
          {/* images area */}
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
