// src/components/ContactForm.jsx
import React from "react";
import VibeConnectFooter from "./VibeConnectFooter";
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import contact from "../../../Website Image/contact-form.png";
import contact2 from "../../../Website Image/contact3.jpeg";
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const ContactForm = () => {
  return (
    <div className=" flex flex-col">
      <VibeConnectNavbar1 />

      {/* Gradient Background with Shadows and Layout */}
      <div
        className="flex flex-col lg:flex-row justify-center md:px-20  py-20"
        style={{ backgroundColor: "#1a2e64" }}
      >
        {/* Form Section */}
        <div
          className=" p-1 md:px-4 rounded-xl w-full text-white lg:w-3/6 my-8  shadow-2xl transition-all duration-500 ease-in-out transform "
          style={{ backgroundColor: "#223a7a" }}
        >
          <h2 className="text-4xl font-serif  mb-4 text-center text-white leading-tight tracking-wider">
            Contact Us
          </h2>
          {/* <p className="text-center text-gray-600 mb-6">We’d love to hear from you! Reach out with any questions or ideas.</p> */}

          {/* <div className="grid lg:grid-cols-2 gap-2">
           
            <div className="mb-2 relative">
              <label
                className="block  text-white text-medium font-semibold "
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=" Name"
                required
              />
            </div>
            <div className="mb-2">
              <label
                className="block  text-medium text-white  font-semibold "
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            
            <div className="mb-2 relative">
              <label
                className="block  text-medium text-white font-semibold "
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="you@example.com"
                required
              />
            </div>

           
            <div className="mb-2">
              <label
                className="block  text-medium text-white font-semibold "
                htmlFor="company"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="company"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2 col-span-2">
              <label
                className="block  text-medium text-white font-semibold "
                htmlFor="subject"
              >
                Subject
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Subject"
              ></textarea>
            </div>

           
          </div> */}
          <p className="text-base md:text-lg lg:text-xl font-serif mb-4 ">For Enquiries:</p>
          <div className=" flex items-center gap-2">
        <AiOutlineMail className="text-xl text-white" />
        <div className="">
          <p className="text-base md:text-lg lg:text-xl font-serif">Email Us: anurag.sharma@vibecopilot.ai</p>
          {/* <p
            
            className="text-white text-sm md:text-lg lg:text-xl font-serif"
          >
            anurag.sharma@vibecopilot.ai
          </p> */}
        </div>
      </div>
      <p className="font-serif mb-4 text-sm md:text-lg lg:text-xl pl-8">Reach out to us with any questions or to learn more about our services.</p>

      <div className=" flex items-center gap-2">
        <AiOutlinePhone className="text-xl text-white" />
        <div>
          <p className="text-base md:text-lg lg:text-xl font-serif">Call Us:+91 84232 98423</p>
          {/* <a
            
            className="text-white text-sm md:text-lg lg:text-xl "
          >
            +91 84232 98423
          </a> */}
        </div>
      </div>
      <p className="font-serif text-sm md:text-lg lg:text-xl pl-8">We're here to help! Call us directly for immediate assistance.</p>
          <div className="flex items-center justify-center mt-2">
            {/* <button
              type="submit"
              className="text-white font-semibold py-2 px-4 rounded-md shadow-lg transform  bg-blue-500"
              style={{ backgroundColor: "#e93842" }}
            >
              Submit
            </button> */}
          </div>
        </div>

        {/* Optional Illustration or Text Side */}
        <div className="hidden lg:block rounded-xl w-full text-white  max-h-[25rem] max-w-[30rem] my-8  shadow-2xl transition-all duration-500 ease-in-out transform ">
          <img src={contact2} alt="Illustration" className="rounded-xl max-h-[25rem] w-[30rem]" />
        </div>
      </div>

      <VibeConnectFooter />
    </div>
  );
};

export default ContactForm;
