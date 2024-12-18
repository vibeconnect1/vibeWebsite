import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import LoginOTP from "./LoginOTP";
const dropdownVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
  exit: { opacity: 0, y: 20 },
};
const VibeConnectNavbar = () => {
  const sections = [
    {
      title: "FINANCE",
      links: [
        { name: "Personal Financial", url: "/Personal-Financial-website" },
        { name: "Purchase", url: "/Purchase-website" },
        { name: "Bill Pay", url: "/billpay-website" },
        { name: "Audit", url: "/audit-website" },
        { name: "Insurance", url: "/insurance-website" },
        { name: "Advance Salary", url: "/advance-salary-website" },
        { name: "Other Bills", url: "/other-bills-website" },
      ],
    },
    {
      title: "Employee",
      links: [
        { name: "Project Management", url: "/project-management-website" },
        { name: "Task Management", url: "/task-management-website" },
        { name: "Calendar", url: "/calendar-website" },
        { name: "Communication", url: "/Communication-website" },
        { name: "Birthday", url: "/birthday-website" },
        { name: "Fitness", url: "/fitness-website" },
        { name: "Doctor Appointment", url: "/doctor-appointment-website" },
      ],
    },
    {
      title: "Operations",
      links: [
        { name: "Suppliers", url: "/suppliers-website" },
        { name: "Service PR/WO", url: "/Servicepr-wo-website" },
        { name: "Asset", url: "/Asset-website" },
        { name: "Soft Services", url: "/SoftServices-website" },
        { name: "Service Desk", url: "/Service-desk-website" },
        { name: "Transportation", url: "/Transportation-website" },
        { name: "F&B", url: "/fb-website" },
      ],
    },
    {
      title: "HUMAN RESOURCES",
      links: [
        { name: "HRMS", url: "/HRMS-website" },
        { name: "Integration", url: "/Integration-website" },
        { name: "Passes", url: "/Passes-website" },
        { name: "Permit", url: "/Permit-website" },
        { name: "Attendance", url: "/Attendance-website" },
        { name: "Incident", url: "/Incident-website" },
        { name: "Meeting", url: "/Meeting-website" },
      ],
    },
  ];
  const [modalType, setModalType] = useState(null);
  const openSignInModal = () => setModalType("signin");
  const openSignUpModal = () => setModalType("signup");
  const openForgotPasswordModal = () => setModalType("forgotPassword");
  const openLoginOTPModal = () => setModalType("LoginOTP");
  const closeModal = () => setModalType(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showNavbar, setShowNavbar] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY.current || currentScrollY <= 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`fixed top-0 z-50 w-full bg-white/2 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="relative ">
          <div className="  ">
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 w-full px-4 sm:px-8 lg:px-36 py-6 lg:py-14 bg-white border border-gray-200 shadow-lg"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    {sections.map((section, index) => (
                      <motion.div
                        key={section.title}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        <h3 className="font-bold text-base sm:text-lg mb-2">
                          {section.title}
                        </h3>
                        <ul>
                          {section.links.map((link) => (
                            <li
                              key={link.url}
                              className="py-1 font-medium text-sm mb-1 hover:text-gray-800"
                            >
                              <Link to={link.url}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between items-center  px-8 py-1 z-20">
              <h1 className="text-xl font-sans font-bold text-white ml-10 z-10">
                <Link to="/home">Vibe Connect</Link>
              </h1>

              <div className="md:flex gap-8  hidden">
                <div className="relative">
                  <button
                    className="font-bold flex text-white items-center"
                    onClick={toggleDropdown}
                  >
                    Apps
                    <span className="ml-1">
                      <FaChevronDown size={12} />
                    </span>
                  </button>
                </div>
                <p className="font-bold text-white z-10">About us</p>

                <p className="font-bold text-white z-10">
                  <Link to="/contact">Contact</Link>
                </p>
              </div>

              <div className="md:flex hidden z-20">
                <button
                  onClick={openSignInModal}
                  className="font-bold text-white px-4 py-2 rounded-md mr-4 z-10"
                >
                  Sign in
                </button>

                {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-md z-10">Try it free</button> */}
              </div>

              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu}>
                  <FaBars size={24} />
                </button>
              </div>

              {isMenuOpen && (
                <>
                  {/* Prevent background scroll */}
                  {document.body.classList.add("overflow-hidden")}

                  <div className="absolute top-10 right-0 bg-white w-full  p-4 md:hidden flex flex-col items-start h-screen overflow-y-auto">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full px-4 sm:px-8 lg:px-24 py-6 lg:py-10  "
                      >
                        <button
                          onClick={openSignInModal}
                          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-4 z-10"
                        >
                          Sign in
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                          {sections.map((section, index) => (
                            <motion.div
                              key={section.title}
                              custom={index}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={dropdownVariants}
                            >
                              <h3 className="font-bold text-base sm:text-lg mb-2">
                                {section.title}
                              </h3>
                              <ul>
                                {section.links.map((link) => (
                                  <li
                                    key={link.url}
                                    className="py-1 font-medium text-sm mb-1 hover:text-gray-800"
                                  >
                                    <Link to={link.url}>{link.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    {/*       
      <p className="font-bold mb-2">Community</p>
      <p className="font-bold mb-2">Contact</p>
      <button onClick={openSignInModal} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full mb-2">Sign in</button> */}
                  </div>
                </>
              )}

              {/* Remove the class when the menu is closed */}
              {!isMenuOpen && document.body.classList.remove("overflow-hidden")}
            </div>
          </div>
        </header>
      </nav>
      {modalType === "signin" && (
        <SignInModal
          onSignUpClick={openSignUpModal}
          onForgotPasswordClick={openForgotPasswordModal}
          onLoginOTPClick={openLoginOTPModal}
          onClose={closeModal}
        />
      )}
      {modalType === "signup" && (
        <SignUpModal onSignInClick={openSignInModal} onClose={closeModal} />
      )}
      {modalType === "forgotPassword" && (
        <ForgotPasswordModal onClose={closeModal} />
      )}
      {modalType === "LoginOTP" && <LoginOTP onClose={closeModal} />}
    </div>
  );
};

export default VibeConnectNavbar;
