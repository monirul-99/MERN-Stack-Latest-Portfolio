import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

// service Data
const serviceData = [
  {
    name: "Web Development",
    description:
      "Designs, builds and maintains websites and web applications using programming languages and web frameworks.",
    link: "learn more",
  },
  {
    name: "Front End Developer",
    description:
      "Specializes in creating and interactive elements of websites and web applications using HTML, CSS and JavaScript.",
    link: "learn more",
  },
  {
    name: "MERN Stack Developer",
    description:
      "Uses a combination of MongoDB, Express, React, and Node.js to create full-stack web applications with JavaScript.",
    link: "learn more",
  },
  {
    name: "Full Stack Developer",
    description:
      "Responsible for developing both the front-end and back-end of web applications, using a combination of programming languages, databases, and web frameworks.",
    link: "learn more",
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <div className="h-full flex flex-col justify-end -mt-20">
              <h2 className="h2 text-accent mb-6">What I Do</h2>
              <h3 className="font-primary font-semibold text-[18px] leading-[36px] max-w-[455px] mb-16">
                I have experience building web applications using the MERN
                stack,including knowledge of MongoDB, Express.js, React.js Redux
                JS, and Node.js.
              </h3>
              <Link
                to="work"
                smooth={true}
                spy={true}
                className="btn btn-sm w-56 flex justify-center items-center cursor-pointer"
              >
                See My Works
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {serviceData.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[20px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a className="capitalize text-gradient text-sm" href="#">
                      {link}{" "}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
