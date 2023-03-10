import React from "react";

// import Count up
import CountUp from "react-countup";
//import react intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* img area */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text area */}
          <div>
            <h2>About me.</h2>
            <h3>
              I am a quick learner and am always eager to expand my skill set
              and stay up-to-date with the latest technologies.{" "}
            </h3>
            <p>
              I have experience building web applications using the MERN stack,
              including knowledge of MongoDB, Express.js, React.js Redux JS, and
              Node.js. I also have a strong understanding of front-end
              technologies such as JavaScript, HTML, and CSS.
            </p>

            {/* state */}
            <div className="flex gap-x-6 lg:ga-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                  +k
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  +k
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
