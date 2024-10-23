import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const VibeConnectFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 relative z-10 flex justify-center">
      <div className="w-full px-20">
        <p className="text-2xl text-white text-center mb-4 font-bold font-mono">
          Vibe Connect
        </p>
        <div className="container  px-6">
          <div className="flex md:flex-row flex-col  justify-between w-full">
            <div className="w-full sm:w-1/2 md:w-1/4 ">
              <h3 className="text-white font-bold mb-2">Community</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-bold mb-2">Open Source</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Download
                  </a>
                </li>
                {/* <li className="mb-2"><a href="#" className="hover:text-white">Github</a></li> */}
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Runbot
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Translations
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-bold mb-2">Useful Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Upgrade
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Custom Developments
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Education
                  </a>
                </li>
                {/* <li className="mb-2"><a href="#" className="hover:text-white">Find an Accountant</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Find a Partner</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Become a Partner</a></li> */}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-bold mb-2">About Us</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Our Company
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Brand Assets
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Jobs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li>
                {/* <li className="mb-2"><a href="#" className="hover:text-white">Podcast</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Customers</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Legal + Privacy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Security</a></li> */}
              </ul>
            </div>
          </div>
          {/* <div className=" w-full md:w-2/4 mb-2">
            
            <div className="flex gap-4 my-4">
              <FaTwitter size={20} />
              <FaLinkedin size={20} />
              <FaInstagram size={20} />
              <FaFacebook size={20} />
            </div>
          </div> */}
          {/* <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div> */}
          <p className="text-center mb-2">
            Copyright © 2023{" "}
            <a href="https://digielvestech.in/" target="_blank" className="">
              Digielves Tech Wizards Private Limited
            </a>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VibeConnectFooter;
