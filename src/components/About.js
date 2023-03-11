import React from "react";

// import Count up
import CountUp from "react-countup";
//import react intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section mb-24 lg:mb-0" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img area */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text area */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="font-primary tracking-wide font-semibold text-[16px] leading-[30px] mb-6">
              I have experience building web applications using the MERN stack,
              including knowledge of MongoDB, Express.js, React.js Redux JS, and
              Node.js.
            </h3>
            <p className="mb-10">
              I am a quick learner and am always eager to expand my skill set
              and stay up-to-date with the latest technologies. I have a strong
              understanding of front-end technologies such as JavaScript, HTML,
              and CSS.
            </p>

            {/* state */}
            <div className="flex justify-between mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  0{inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={70} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <Link
                to="contact"
                className="btn btn-lg flex justify-center items-center"
              >
                Contact me
              </Link>
              <a href="#" className="text-gradient text-link">
                {" "}
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
