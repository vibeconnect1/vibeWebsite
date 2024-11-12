import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import auditnew from '../../../Website Image/AUDIT100.jpeg';
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";
import { FaTimes } from "react-icons/fa";
import MultiSelect from "./MultiSelect";
import Calendar from 'react-calendar'; 
import "react-calendar/dist/Calendar.css";

function AuditWebPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState("calendar"); // Tracks modal steps
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Toggle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setStep("calendar"); // Reset to calendar step when modal reopens
  };

  // Available slots for a date
  const availableSlots = ["10:00 AM", "2:00 PM", "4:00 PM"];
  const allSupervisors = [
    { value: "Customer Support", label: "Customer Support" },
    { value: "Bulk Broadcasting", label: "Bulk Broadcasting" },
    { value: "Ecommerce Automation", label: "Ecommerce Automation" },
    { value: "Automating Notifications", label: "Automating Notifications" },
    { value: "Chatbot Automation", label: "Chatbot Automation" }
  ];
    
  const [supervisors, setSupervisors] = useState(allSupervisors);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option, isSelected) => {
    console.log(`${option} ${isSelected ? 'selected' : 'deselected'}`);
  };

  const handleSelectAll = (isSelected) => {
    console.log(`All options ${isSelected ? 'selected' : 'deselected'}`);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1 />
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
          <h1 className="text-2xl lg:text-5xl font-bold text-white mb-4">Audit Management</h1>
          <div className="flex justify-center"></div>
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>
      </main>

      {/* Content Section */}
      <div className="relative top-10 text-gray-800 font-serif px-10 lg:px-20">
        <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
          {/* Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-xl lg:text-3xl font-bold mb-2">Audit Management</h3>
            <p className="lg:text-xl mb-4 text-justify font-serif text-gray-800 leading-relaxed">
              Supports internal and external audits with features for audit trails, training audits, and logs. 
              Simplify your audit processes with Vibe Connect. Our Audit Management feature keeps all your records 
              organized and accessible, tracks compliance, and helps you prepare for audits with ease.
              Be it an operational audit, technical audit, internal audit, vendor audit for Service or asset or 
              training – our system allows you to give weightage against each point and is completely configurable.
              Stay ahead of potential issues and ensure a smooth audit process with a system designed to keep everything in check.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img src={auditnew} alt="AI Automation" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4">
        <VibeConnectFooter />
      </div>

      {/* Support Button */}
      {/* <button 
  onClick={toggleModal} 
  className="fixed right-4 top-1/2 transform -translate-y-1/2 translate-x-1/2 rotate-90 bg-gradient-to-r from-[#e98972] to-[#db5354] text-white px-2 py-2 text-sm md:text-xl lg:text-xl font-semibold rounded-md r"
>
  Book Demo
</button> */}



      
{isModalOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3 }} className="fixed top-0 right-0 w-full lg:w-96 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
          <button onClick={toggleModal} className="text-gray-600 text-xl absolute top-4 right-4">
            <FaTimes size={20}/>
          </button>
          
          {step === "calendar" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a Date & Time</h2>
              <Calendar onChange={setSelectedDate} value={selectedDate} />
              
              {selectedDate && (
                <div className="mt-4">
                  <p className="text-lg font-semibold mb-2">Available Slots</p>
                  <div className="flex gap-2">
                    {availableSlots.map((slot) => (
                      <button key={slot} onClick={() => setSelectedSlot(slot)} className={`px-3 py-2 border rounded ${selectedSlot === slot ? 'bg-blue-500 text-white' : 'border-gray-300'}`}>
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <button onClick={() => setStep("details")} disabled={!selectedSlot} className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-gray-300">
                Next
              </button>
            </div>
          )}

          {step === "details" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
               {/* Name Field */}
      <div className="mb-4">
        <label className="block text-base font-semibold mb-1" htmlFor="name">
          Name *
        </label>
        <input
          type="text"
          id="name"
          className="w-full border rounded-md px-3 py-2 focus:outline-none border-black "
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-base font-semibold mb-1" htmlFor="email">
          Email *
        </label>
        <input
          type="email"
          id="email"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-black "
          placeholder="Enter your email"
          required
        />
      </div>

      {/* WhatsApp Number Field */}
      <div className="mb-4">
        <label className="block text-base font-semibold mb-1" htmlFor="whatsapp">
          Your WhatsApp Number
        </label>
        <input
          type="tel"
          id="whatsapp"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-black"
          placeholder="Enter your WhatsApp number"
        />
      </div>

      {/* Company Name Field */}
      <div className="mb-4">
        <label className="block text-base font-semibold mb-1" htmlFor="company">
          Your Company Name
        </label>
        <input
          type="text"
          id="company"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-black"
          placeholder="Enter your company name"
        />
      </div>

      {/* Company Size Radio Buttons */}
      <div className="mb-4">
  <p className="block text-base font-semibold mb-2">Your Company Size</p>
  <div className="space-y-2">
    <label className="flex items-center">
      <input type="radio" name="companySize" value="1-10" className="text-blue-500 focus:ring-blue-500" />
      <span className="ml-2">1-10 Employees</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="companySize" value="20-50" className="text-blue-500 focus:ring-blue-500" />
      <span className="ml-2">20-50 Employees</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="companySize" value="50-200" className="text-blue-500 focus:ring-blue-500" />
      <span className="ml-2">50-200 Employees</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="companySize" value="200+" className="text-blue-500 focus:ring-blue-500" />
      <span className="ml-2">200+ Employees</span>
    </label>
  </div>
</div>


      {/* WhatsApp Marketing Requirements Checkboxes */}
      <div className="mb-4">
        <p className="block text-base font-semibold mb-2">Your WhatsApp Marketing Requirements</p>
       
        <MultiSelect
              options={supervisors}
               title={"Select"}
               handleSelect={handleSelect}
               handleSelectAll={handleSelectAll}
               selectedOptions={selectedOptions}
               setSelectedOptions={setSelectedOptions}
               setOptions={setSupervisors}
               searchOptions={supervisors}
            />
      </div>

              <button onClick={toggleModal} className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                Schedule Event
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default AuditWebPage;
