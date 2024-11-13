import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import LoginOTP from "./LoginOTP";
import LogoSvg from "../../Logo/Logo.svg";
import BlackSvg from "../../Logo/BlackLogo.svg";
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

const VibeConnectNavbar1 = () => {
  const sections = [
    {
      title: "FINANCE",
      links: [
        { name: "Personal Financial", url: "/Personal-Financial" },
        { name: "Purchase", url: "/Purchase" },
        { name: "Bill Pay", url: "/billpay" },
        { name: "Audit", url: "/audit" },
        { name: "Insurance", url: "/insurance" },
        { name: "Advance Salary", url: "/advance-salary" },
        { name: "Other Bills", url: "/other-bills" },
      ],
    },
    {
      title: "EMPLOYEE",
      links: [
        {
          name: "Project & Task Management",
          url: "/project-management",
        },
        // { name: "Task Management", url: "/task-management-website" },
        { name: "Calendar", url: "/calendar" },
        { name: "Communication", url: "/Communication" },
        { name: "Birthday", url: "/birthday" },
        { name: "Fitness", url: "/fitness" },
        { name: "Doctor Appointment", url: "/doctor-appointment" },
        { name: "Skill Grow", url: "/Skill-Grow" },
        { name: "Document Pro", url: "/DocumentPro" },
      ],
    },
    {
      title: "OPERATIONS",
      links: [
        { name: "Suppliers Management", url: "/suppliers" },
        { name: "Service PR/WO", url: "/Servicepr-wo" },
        { name: "Asset Management", url: "/Asset" },
        { name: "Soft Services Management", url: "/SoftServices" },
        { name: "Service Desk", url: "/Service-desk" },
        { name: "Transportation", url: "/Transportation" },
        { name: "Food & Beverage", url: "/fb" },
        { name: "Integration", url: "/Integration" },
        { name: "Passes(VMS)", url: "/Passes" },
        { name: "Permit", url: "/Permit" },
        // { name: "Attendance", url: "/Attendance-website" },
        { name: "Incident", url: "/Incident" },
        { name: "Meeting", url: "/Meeting" },
      ],
    },
    {
      title: "WORKFORCE",
      links: [
        { name: "Employee Onboarding", url: "/employee-onboarding" },
        { name: "Payroll Management", url: "/payroll-management" },
        { name: "Attendance Tracking", url: "/attendance-tracking" },
        { name: "Roster Management", url: "/roster-management" },
        { name: "Reports and Analytics", url: "/reports-analytics" },
        { name: "Leave Management", url: "/leave-management" },
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
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setNavbarBackground("bg-white");
        setTextColor("text-black");
      } else {
        setNavbarBackground("bg-transparent");
        setTextColor("text-white");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${navbarBackground}`}
      >
        <header className="relative">
          <div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-14 w-full px-4 sm:px-8 lg:px-20 py-6 lg:py-6  bg-white/95 z-40 border border-gray-200 shadow-lg"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, index) => (
                      <motion.div
                        key={section.title}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        <h3 className="font-bold text-base md:text-lg text-black sm:text-lg mb-2 border-b-2 w-64  border-gray-400">
                          {section.title}
                        </h3>

                        <ul>
                          {section.links.map((link) => (
                            <li
                              key={link.url}
                              className="py-1   font-serif text-base md:text-lg hover:text-gray-800  leading-relaxed"
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

            <div className="flex justify-between items-center mr-4 py-1 z-20">
              <h1
                className={`text-xl font-sans font-bold ${textColor}  md:ml-10 z-10 mt-3`}
              >
                <Link to="/home">
                  {/* <div className=" z-50 absolute top-5 left-10 "> */}
                  {textColor === "text-white" ? (
                    <img src={LogoSvg} alt="Logo" width="125" height="125" />
                  ) : (
                    <img src={BlackSvg} alt="Logo" width="125" height="125" />
                  )}
                </Link>
                {/* </div> */}
              </h1>

              {/* <div className="md:flex gap-8 hidden">
                <div className="relative">
                  <button className={`font-bold flex ${textColor} items-center`} onClick={toggleDropdown}>
                    Solutions
                    <span className="ml-1">
                      <FaChevronDown size={12} />
                    </span>
                  </button>
                </div>
                <p className={`font-bold ${textColor} z-10`}><Link to="/AboutUs-website">About us</Link></p>
                <p className={`font-bold ${textColor} z-10`}>
                  <Link to="/Contact-website">Contact</Link>
                </p>
              </div> */}

              <div className="md:flex gap-8 hidden z-20">
                <div className="md:flex gap-8 hidden p-2">
                  <div className="relative">
                    <button
                      className={`font-bold flex ${textColor} text-base md:text-lg items-center gap-2`}
                      onClick={toggleDropdown}
                    >
                      Solutions
                      <span>
                        {isDropdownOpen ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </span>
                    </button>
                  </div>
                  <p className={`font-bold ${textColor} text-base md:text-lg z-10`}>
                    <Link to="/AboutUs">About us</Link>
                  </p>
                  <p className={`font-bold ${textColor} text-base md:text-lg z-10`}>
                    <Link to="/Contact-us">Contact us</Link>
                  </p>
                </div>
                {/* <button
                  onClick={openSignInModal}
                  className={`font-bold ${textColor} px-4 py-2   mr-4 z-10 bg-blue-600 text-white  rounded-full hover:bg-blue-500`}
                >
                  Sign in
                </button> */}
              </div>

              <div className="md:hidden flex items-center justify-center mb-2">
                <button onClick={toggleMenu}>
                  <FaBars size={24} className="text-white" />
                </button>
              </div>

              {isMenuOpen && (
                <>
                  {document.body.classList.add("overflow-hidden")}

                  <div className="absolute top-14 right-0 bg-white w-full  md:hidden flex flex-col items-start h-screen overflow-y-auto">
                    {/* Menu items */}
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full px-6 sm:px-8 lg:px-24 py-6 lg:py-10  mb-8"
                      >
                        {/* <button
                          onClick={openSignInModal}
                          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-4 z-10"
                        >
                          Sign in
                        </button> */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-4">
                          {sections.map((section, index) => (
                            <motion.div
                              key={section.title}
                              custom={index}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={dropdownVariants}
                            >
                              <h3 className="font-bold text-sm md:text-lg font-serif border-b-2 border-black w-64 mb-2">
                                {section.title}
                              </h3>
                              <ul>
                                {section.links.map((link) => (
                                  <li
                                    key={link.url}
                                    className="py-1 font-serif text-sm md:text-lg  mb-1 hover:text-gray-800 leading-relaxed"
                                  >
                                    <Link to={link.url} className="text-base md:text-lg">{link.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>
              )}

              {!isMenuOpen && document.body.classList.remove("overflow-hidden")}
            </div>
          </div>
        </header>
      </nav>

      {/* {modalType === "signin" && (
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
      {modalType === "LoginOTP" && <LoginOTP onClose={closeModal} />} */}
    </div>
  );
};

export default VibeConnectNavbar1;
