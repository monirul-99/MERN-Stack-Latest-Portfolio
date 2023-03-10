import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import {} from "framer-motion";
//variant
import { fadeIn } from "../variants";

// service Data
const serviceData = [
  {
    name: "Shop Ex Website",
    description:
      "I have experience building web applications using the MERN stack, including knowledge of MongoDB, Express.js, React.js Redux JS, and Node.js.",
    link: "learn more",
  },
  {
    name: "Brands Plants Website",
    description:
      "I have experience building web applications using the MERN stack, including knowledge of MongoDB, Express.js, React.js Redux JS, and Node.js.",
    link: "learn more",
  },
  {
    name: "Communication Website",
    description:
      "I have experience building web applications using the MERN stack, including knowledge of MongoDB, Express.js, React.js Redux JS, and Node.js.",
    link: "learn more",
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <div className="flex-1 lg:bg-services lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I have experience building web applications using the MERN
              stack,including knowledge of MongoDB, Express.js, React.js Redux
              JS, and Node.js.
            </h3>
            <button className="btn btn-sm">See My Works</button>
          </div>

          <div>
            {serviceData.map((service, index) => {
              const { name, description } = service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
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
                </div>
              );
            })}
            service
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
