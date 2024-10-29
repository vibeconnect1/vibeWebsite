import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const VibeConnectFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 relative z-10 flex justify-center">
      <div className="w-full md:px-20 p-2">
        <p className="text-2xl text-white text-center mb-4 font-bold font-mono">
          {/* Vibe Connect */}
        </p>
        <div className="container  md:px-6">
          <div className="flex md:flex-row flex-col  justify-between w-full">
            {/* <div className="w-full sm:w-1/2 md:w-1/4 ">
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
            </div> */}
            {/* <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-bold mb-2">Open Source</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Download
                  </a>
                </li>
                
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
            </div> */}
            <div>
              <h2 className="flex items-center gap-2 text-white font-bold">
                <MdLocationPin />
                Address
              </h2>
              <p className="w-96 md:pl-5">
                314, SAMRUDDHI BUSINESS PARK BEHIND EVERSHINE MALL, New Link Rd,
                Chincholi Bunder, Malad West, Mumbai, Maharashtra 400064.
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-bold mb-2">Features</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/management-compliance-tools"
                    className="hover:text-white"
                  >
                    Management and compliance tools
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/property-management-tools"
                    className="hover:text-white"
                  >
                    Property Management tools
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/employee-productivity-and-efficiency"
                    className="hover:text-white"
                  >
                    Employee Productivity & Efficiency
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/finance-and-personal-management"
                    className="hover:text-white"
                  >
                    Finance & Personal Management
                  </a>
                </li>
                {/* <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li> */}
                {/* <li className="mb-2"><a href="#" className="hover:text-white">Podcast</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Customers</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Legal + Privacy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Security</a></li> */}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 className="text-white font-bold mb-2">Useful Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="/FAQ" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/AboutUs" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/Contact-us" className="hover:text-white">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Case studies
                  </a>
                </li>
                {/* <li className="mb-2"><a href="#" className="hover:text-white">Find an Accountant</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Find a Partner</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Become a Partner</a></li> */}
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
