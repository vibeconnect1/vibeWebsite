import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import pinkBlue from "/PinkBlue.jpg";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const VibePage5 = () => {
  const [textVisible, setTextVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500); // Delay for text animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen  relative bottom-6"
      style={{
        backgroundImage: `url(${pinkBlue})`,
      }}
    >
      {/* Background overlay */}

      <div className="relative p-4 md:p-6 flex items-center justify-center h-screen">
        <div className="text-white  text-center">
          <motion.h1
            className="text-lg md:text-xl lg:text-5xl font-bold mb-4  md:mb-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            Reshape the Customer Experience. Transform Your Business.
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl ml-2 md:ml-4 mb-4 md:mb-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.2, ease: "easeOut" }}
            ref={ref}
          >
            {/* Point A to Point B. The path to making a purchase was predictably linear, finite, and well traveled. */}
          </motion.p>
          <motion.p
            className="text-sm md:text-lg lg:text-2xl ml-2 md:ml-4 px-10 mb-4 md:mb-6 text-justify font-serif  leading-relaxed"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.4, ease: "easeOut" }}
            ref={ref}
          >
           By reshaping the customer experience through personalization, seamless digital integration, proactive communication, and continuous engagement, businesses in the finance and personal management sectors can transform their operations and strengthen customer loyalty. Emphasizing education and empowerment not only enhances customer satisfaction but also drives long-term growth and success in an increasingly competitive landscape.
           <ul className="list-disc pl-5 mt-2 space-y-2">
        <li className="text-white text-lg lg:text-2xl">Seamless Digital Experience - Unified Platforms </li>
        <li className="text-white text-lg lg:text-2xl">Proactive Communication</li>
        <li className="text-white text-lg lg:text-2xl">Dedicated Support Channels</li>
        <li className="text-white text-lg lg:text-2xl">Financial Literacy and Empowerment</li>
        <li className="text-white text-lg lg:text-2xl">Educational Resources</li>
        <li className="text-white text-lg lg:text-2xl">Goal Setting Tools</li>
        <li className="text-white text-lg lg:text-2xl">Enhanced Security Measures</li>
        <li className="text-white text-lg lg:text-2xl">Robust Security Protocols</li>
      </ul>
          </motion.p>
          <motion.p
            className="text-sm md:text-lg lg:text-xl ml-2 md:ml-4"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.6, ease: "easeOut" }}
            ref={ref}
          >
            {/* Join us as we enlist some of the most forward-thinking minds in business, and share their views on what it takes to deliver a comprehensive, holistic, unforgettable customer experience. */}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default VibePage5;
