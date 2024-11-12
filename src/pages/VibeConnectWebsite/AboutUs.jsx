import React from 'react';
import VibeConnectFooter from './VibeConnectFooter';
import VibeConnectNavbar1 from './VibeConnectNavbar1';
import contact2 from '../../../Website Image/about-us-1.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <VibeConnectNavbar1 />

      {/* Gradient Background with Shadows and Layout */}
      <div className="flex flex-col justify-center">
        <main className="flex-grow">
          
          <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white mb-4">About Us</h1>
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
          </section>
          {/* Form section */}
        </main>

        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row px-4 lg:px-20 relative w-full">
          <div className="p-5 lg:p-10 w-full lg:w-1/2 my-8 bg-white transition-all duration-500 ease-in-out transform">
            {/* <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-4 text-center leading-tight tracking-wider">About Us</h2> */}
            <p className="text-justify text-gray-600 text-base lg:text-xl font-serif mb-6">
              At VIBE CONNECT, we are dedicated to transforming and digitalizing the way businesses and property management function. Our unified tool is designed to streamline operations, enhance efficiency, and simplify the management of both business and property-related tasks.
            </p>
            <p className="text-justify text-gray-600 text-base lg:text-xl font-serif mb-6">
              We cater to a diverse range of users, including employees, business owners, property managers, and administrators, providing them with a comprehensive solution. Our all-in-one platform integrates essential functions such as project management, communication, scheduling, and property management into one intuitive interface.
            </p>
            <p className="text-justify text-gray-600 text-base lg:text-xl font-serif mb-6">
              We eliminate the complexities and inefficiencies associated with using multiple disconnected tools. This unified approach ensures that users can manage their tasks more effectively, reduce administrative overhead, and focus on what truly matters—driving their business and property management goals forward.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 py-8 ">
            <img src={contact2} alt="Illustration" className="p-2 bg-white " />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <VibeConnectFooter />
      </div>
    </div>
  );
};

export default AboutUs;
