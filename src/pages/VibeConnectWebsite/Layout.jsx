import React, { useState, useEffect } from "react";
import VibePage3 from "./VibePage3";
import VibePage2 from "./VibePage2";
import ProfilesPage from "./ProfilesPage";
import VibePage from "./VibePage";
import ProfileCard from "./ProfileCard";
import VibePage1 from "./VibePage1";
import ProfileCard1 from "./ProfileCard1";
import VibePage4 from "./VibePage4";
import VibeConnectFooter from "./VibeConnectFooter";
import ProfileCard2 from "./ProfileCard2";
import VibePage5 from "./VibePage5";

const Layout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Array of page components
  const pages = [
    <VibePage3 />,
    <VibePage4 />,
    <VibePage2 />,
    <ProfilesPage />,
    <VibePage />,
    <ProfileCard />,
    <VibePage1 />,
    <ProfileCard1 />,
    <VibePage5 />,
    <ProfileCard2 />,
  ];

  const scrollToPage = (index) => {
    setCurrentPage(index);
    const pageElement = document.getElementById(`page-${index}`);
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: "smooth" });
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const handleScroll = () => {
    if (isScrolling) return; // Don't update during smooth scroll

    const sections = pages.map((_, index) =>
      document.getElementById(`page-${index}`)
    );
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Find the current section in view
    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentPage(index);
        }
      }
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <div className="relative h-screen">
      {/* Fixed dots navigation */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50  p-2  bg-black bg-opacity-30 rounded-full">
        {pages.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToPage(index)}
            // className={`w-3 h-3 my-2 p-1 rounded-full cursor-pointer ${
            //   currentPage === index
            //     ? "bg-black border-white border-4 p-1"
            //     : "bg-white p-1 border-4 border-black border-opacity-80"
            // }`}
            className={`w-3 h-3 my-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentPage === index
                ? "bg-white border-2 border-white"
                : "bg-white opacity-50"
            }`}
            
          />
        ))}
      </div>

      {/* Page components */}
      {pages.map((PageComponent, index) => (
        <div key={index} id={`page-${index}`} className="h-screen">
          {PageComponent}
        </div>
      ))}
    </div>
  );
};

export default Layout;
