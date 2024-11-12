import React, { useEffect, useState } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import compliance from '../../../Website Image/bg-compliance2.jpg';
import permit from '../../../Website Image/Permit.jpg';
import knowledgebase from '../../../Website Image/Knowledge base-1.jpg';
import purchase from '../../../Website Image/purchase.jpg';
import reporting2 from '../../../Website Image/reporting2.jpeg';
import permitnew from '../../../Website Image/permit2.jpeg';

import cost from '../../../Website Image/cost2-remove.png';

import compliancenew from '../../../Website Image/COMPLIANCE.jpeg';
import auditnew from '../../../Website Image/AUDIT100.jpeg';
import reportingnew from '../../../Website Image/document2.jpeg';
import knowledgenew from '../../../Website Image/Knowledge2.jpeg';
import purchasenew from '../../../Website Image/purchase2-remove.png';
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";
import { FaTimes } from "react-icons/fa";
import MultiSelect from "./MultiSelect";
import Calendar from 'react-calendar'; 
import "./Calendar.css";
import { motion } from "framer-motion"; 

function KnowMorePage() {
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
    { value: "Passes", label: "Passes" },
    { value: "Meeting", label: "Meeting" },
    { value: "Personal Financial", label: "Personal Financial" },
    { value: "Purchase", label: "Purchase" },
    { value: "Bill Pay", label: "Bill Pay" },
    { value: "Audit", label: "Audit" },
    { value: "Insurance", label: "Insurance" },
    { value: "Advance Salary", label: "Advance Salary" },
    { value: "Other Bills", label: "Other Bills" },
    { value: "Project & Task Management", label: "Project & Task Management" },
    { value: "Calendar", label: "Calendar" },
    { value: "Communication", label: "Communication" },
    { value: "Birthday", label: "Birthday" },
    { value: "Fitness", label: "Fitness" },
    { value: "Doctor Appointment", label: "Doctor Appointment" },
    { value: "Skill Grow", label: "Skill Grow" },
    { value: "Suppliers Management", label: "Suppliers Management" },
    { value: "Document Pro", label: "Document Pro" },
    { value: "Service PR/WO", label: "Service PR/WO" },
    { value: "Asset Management", label: "Asset Management" },
    { value: "Soft Services Management", label: "Soft Services Management" },
    { value: "Service Desk", label: "Service Desk" },
    { value: "Transportation", label: "Transportation" },
    { value: "Food & Beverage", label: "Food & Beverage" },
    { value: "Integration", label: "Integration" },
    { value: "Permit", label: "Permit" },
    { value: "Incident", label: "Incident" },
    { value: "Employee Onboarding", label: "Employee Onboarding" },
    { value: "Payroll Management", label: "Payroll Management" },
    { value: "Attendance Tracking", label: "Attendance Tracking" },
    { value: "Roster Management", label: "Roster Management" },
    { value: "Reports and Analytics", label: "Reports and Analytics" },
    { value: "Leave Management", label: "Leave Management" },
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
      <VibeConnectNavbar1/>
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative  bg-gradient-to-r from-blue-500 to-purple-800 text-center py-40">
          <h1 className="text-xl lg:text-5xl font-bold  text-white mb-4">MANAGEMENT & COMPLIANCE</h1>
          
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
        </section>
        {/* Form section */}
      
      </main>
      
      <div className=" relative top-2 text-gray-800 font-serif px-10 lg:px-20 ">
      {/* First Section */}
      {/* <h1 className="text-4xl font-bold font-serif leading-relaxed text-gray-800 mb-2">Management & Compliance </h1> */}
{/* <p className="text-xl  mb-4 text-justify font-serif w-1/2 leading-relaxed ">Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible.</p> */}
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold mb-2 font-serif leading-relaxed text-gray-800">Compliance & Tracking</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    Features tools for tracking regulatory compliance and generating compliance reports. Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible.
    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={compliancenew}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-xl lg:text-3xl font-bold  mb-2 text-gray-800">Audit Management</h4>
    <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    Supports internal and external audits with features for audit trails, training audits, and logs. Simplify your audit processes with Vibe Connect. Our Audit Management feature keeps all your records organized and accessible, tracks compliance, and helps you prepare for audits with ease. Be it a operational audit, technical audit , internal audit, vendor audit for Service or asset or training – our system allow to you give Weightage against each point and completely configurable. Stay ahead of potential issues and ensure a smooth audit process with a system designed to keep everything in check.
    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={auditnew}
            alt="Team Taskforce"
            // className=" h-80 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">Permit Tracking</h3>
    <p className="text-sm md:text-xl lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    
    The Permit Tracking feature enables the digitalization of permit management processes, allowing organizations to efficiently monitor permit statuses and ensure compliance. This tool facilitates the tracking of renewals by providing timely notifications for upcoming expirations, thus preventing lapses in compliance. By sending expiry alerts, it helps organizations proactively manage their permits, ensuring that all necessary documentation is up to date and in order. This streamlined approach not only enhances operational efficiency but also minimizes the risk of penalties associated with expired permits.
    </p>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={permitnew}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
     
      <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">Centralized Resource Hub</h3>
        <p className=" md:text-xl lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        The knowledge base serves as a comprehensive repository for essential information, FAQs, and training materials, ensuring employees can easily access the resources they need.
        </p>
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">Learning Management System (LMS)</h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        The LMS defines clear learning paths, guiding employees through various courses and materials tailored to their development needs.
        </p>
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">Progress Tracking</h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Both the knowledge base and LMS track learner progress, enabling managers to monitor employee growth and identify areas for improvement.
        </p>
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">Knowledge Sharing Culture</h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        By providing accessible training materials and resources, the system fosters a culture of knowledge sharing, encouraging collaboration and continuous learning among employees.
        </p>



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={knowledgenew}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
     
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">Purchase Order Management </h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Manages purchase and work orders, goods received (GRN) and dispatched (GDN), and inventory. Streamline your procurement and operational processes with Vibe Connect. Easily create and track Purchase Orders and Work Orders from our system to onboarding vendor. Monitor payments and progress in real-time and manage every detail from a single, centralized dashboard. Simplify your operations and boost productivity with a unified solution that keeps procurement and work orders running smoothly.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={purchasenew}
            alt="AI Automation"
            // className=" h-full w-4/5 "
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">	Cost Management </h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Includes systems for cost approvals, budget tracking, expense reporting, and bill payments. Our tool simplifies the entire cost approval process, From small maintenance tasks to larger, costlier repairs, our system routes approvals based on cost thresholds, ensuring the right level of authorization is met. With multiple layers of approval, Vibe Connect ensures that all approval flow are respected through system, while speeding up the approval process so nothing gets held up.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={cost}
            alt="AI Automation"
            // className=" h-full w-4/5"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      {/* <h1 className="text-4xl font-bold   mb-8">	Documentation & Reporting</h1> */}
    
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold mb-2 ">	Document Management   </h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Facilitates document storage, version control, and access management. Simplify document management with Vibe Connect’s Documents Pro. Efficiently organize, access, and secure all your important documents in one centralized location. Vibe connect Implements robust document storage solutions, streamline retrieval processes, and enhance collaboration with seamless sharing features. Maintain control and security over your documents, ensuring they are always at your fingertips when you need them.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reportingnew}
            alt="AI Automation"
            // className=" h-full w-4/5"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="lg:text-3xl font-bold mb-2 ">	Reporting  </h3>
        <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Provides AI/BI dashboards, custom and scheduled reports for comprehensive insights. Vibe Connect’s AI Dashboard & Reports deliver real-time analytics and comprehensive insights to drive your business decisions. Monitor key metrics, visualize trends, and generate detailed reports with ease, all from a single, user-friendly interface. Our advanced system transforms complex data into clear, actionable insights, helping you stay informed and make smarter decisions effortlessly.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reporting2}
            alt="AI Automation"
            className=" h-full w-4/5"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
    </div>

   
     

      {/* Call to Action Section */}
      <div className="py-20 flex flex-col justify-center items-center  bg-gradient-to-r from-blue-500 to-purple-800  ">
        <h1 className="text-xl md:text-4xl font-bold text-white text-center">
        Vibe Connect: Your All-in-One Command Center 
        </h1>
        {/* <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Get a demo
        </button> */}
        
        {/* Features List */}
        {/* <div className="mt-4 flex gap-4 text-sm text-white">
          <span>Free 14-day trial</span>
          <span>Easy setup</span>
          <span>Cancel anytime</span>
        </div> */}
      </div>
      <button 
  onClick={toggleModal} 
  className="fixed right-4 top-1/2 transform -translate-y-1/2 translate-x-1/2 rotate-90 bg-gradient-to-r from-[#e98972] to-[#db5354] text-white px-2 py-2 text-sm md:text-lg lg:text-lg font-bold rounded-md r"
>
  Book Demo
</button>



      
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
                      <button key={slot} onClick={() => setSelectedSlot(slot)} className={`px-2 py-2 border border-black font-semibold text-sm rounded-md ${selectedSlot === slot ? 'bg-blue-500 text-white' : 'border-gray-300'}`}>
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
          Your WhatsApp Number *
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
          Your Company Name *
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
  <p className="block text-base font-semibold mb-2">Your Company Size *</p>
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
        <p className="block text-base font-semibold mb-2">Select Modules</p>
       
        <MultiSelect
              options={supervisors}
              //  title={"Select"}
               handleSelect={handleSelect}
               handleSelectAll={handleSelectAll}
               selectedOptions={selectedOptions}
               setSelectedOptions={setSelectedOptions}
               setOptions={setSupervisors}
               searchOptions={supervisors}
            />
      </div>

              <button onClick={toggleModal} className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                Book Demo
              </button>
            </div>
          )}
        </motion.div>
      )}
   <div className="">
   <VibeConnectFooter/></div>
    </div>
  );
}

export default KnowMorePage;
