import React from "react";

//images import here
import Image from "../assets/avatar3.png";
//Icons Import here
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
//type image animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
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
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[80px] -mt-7 lg:-mt-0"
            >
              Monirul <span>Islam</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-5 text-[23px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]"
            >
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
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a quick learner and am always eager to expand my skill set
              and stay up-to-date with the latest technologies.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                className="btn btn-lg flex justify-center items-center cursor-pointer"
              >
                Contact Me
              </Link>
              <button className="text-gradient btn-link">My Portfolio</button>
            </motion.div>
            {/* social link */}
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 -mt-5 lg:-mt-0"
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/monirul99/"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://github.com/monirul-99"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/MsMonirul"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/moniru.pro"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </motion.div>
          </div>
          {/* images area */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
