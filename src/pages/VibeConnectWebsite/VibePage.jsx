import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import CircularProgress from "./CircularProgress";
import green from "../../../Website Image/tactics.png";

// Variants for animation
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const VibePage = () => {
  const textControls = useAnimation();
  const circleControls = useAnimation();
  const textRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === textRef.current) {
            textControls.start("visible");
          }
          if (entry.target === circleRef.current) {
            circleControls.start("visible");
          }
        } else {
          if (entry.target === textRef.current) {
            textControls.start("hidden");
          }
          if (entry.target === circleRef.current) {
            circleControls.start("hidden");
          }
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [textControls, circleControls]);

  return (
    <div
      className="relative bottom-0 flex h-screen items-center justify-center  bg-cover bg-center"
      style={{ backgroundImage: `url(${green})`
      
       }}
    >
 <div className="absolute inset-0 bg-green-900 opacity-60"></div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between text-white  w-full">
        {/* Right side text */}
        <motion.div
          className="flex flex-col justify-between items-center md:absolute md:right-0 p-4 md:w-2/3 w-full"
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            TACTICS &
            TOUCHPOINTS
          </h1>
          <div className="text-sm md:text-lg lg:text-xl font-serif text-justify leading-relaxed z-10 mt-4 text-white  w-full">
            Integrating a Property Management Tool into a Facility Management
            company’s operations is essential for improving efficiency, tenant
            satisfaction, and overall property performance. By utilizing
            targeted tactics and optimizing touchpoints, companies can enhance
            their service delivery and maintain a competitive edge in the
            market. Implementing a Property Management Tool is crucial for
            Facility Management companies to enhance operational efficiency,
            improve tenant satisfaction, and ensure compliance with regulations.
            Key tactics and touchpoints to optimize the tool's usage.
            <ul className="list-disc pl-5 mt-2 gap-2 grid md:grid-cols-2">
              <li className="text-white text-sm md:text-xl lg:text-xl">
                Enhanced Operational Efficiency
              </li>
              <li className="text-white text-sm md:text-xl lg:text-xl">
                Improved Tenant Satisfaction
              </li>
              <li className="text-white text-sm md:text-xl lg:text-xl">
                Data-Driven Decision Making
              </li>
              <li className="text-white text-sm md:text-xl lg:text-xl">
                Regulatory Compliance
              </li>
              <li className="text-white text-sm md:text-xl lg:text-xl">Cost Savings</li>
              <li className="text-white text-sm md:text-xl lg:text-xl">Scalability</li>
            </ul>{" "}
          </div>

          {/* 95% Circle */}
          {/* <motion.div
            className="relative flex flex-col items-center md:mr-20 mb-10"
            ref={circleRef}
            initial="hidden"
            animate={circleControls}
            variants={circleVariants}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className='flex flex-col items-center gap-2 md:relative  ml-0 md:ml-10'>
              <CircularProgress percentage={86} />
              <div>
                <p className=" text-sm md:text-lg text-justify">
                of professionals use multiple platforms for daily tasks,
                  <br />
                    but Vibe Connect unifies  everything into one seamless
                  <br />
                     experience.
                  
                </p>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default VibePage;
