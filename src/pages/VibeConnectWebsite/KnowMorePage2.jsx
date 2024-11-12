import React, { useEffect, useState } from "react";
import Knowmorepage2 from '../../../Website Image/knowmorepage2-remove.png'
import compliance from '../../../Website Image/bg-compliance2.jpg';
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";
import { FaTimes } from "react-icons/fa";
import MultiSelect from "./MultiSelect";
import Calendar from 'react-calendar'; 
// import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

import { motion } from "framer-motion"; 

function KnowMorePage2() {
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
        <section className="relative bg-gradient-to-r from-purple-900  to-pink-700 text-center py-40">
  <h1 className="text-xl lg:text-5xl font-bold text-white mb-4">Employee Productivity & Efficiency</h1>
  
  {/* <div className='absolute mt-4 flex justify-center w-full h-full bg-cover bg-center'>
    <img src={compliance} alt="" className="z-20"/>
  </div> */}

  {/* Curved bottom using SVG similar to the screenshot */}
  <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
</section>


        {/* Form section */}
      
      </main>
      {/* <div className="flex justify-center text-base font-semibold relative top-22">
      <p className="text-gray-800">The Most Employee Centric and Customer Teams are using our tool VIBE to drive experience.</p>
      </div> */}
      <div className="relative top-10  text-gray-800 relative bottom-10 px-10 lg:px-20">
      {/* First Section */}
      {/* <h1 className="text-3xl font-bold text-red-500 mb-2">Employee Productivity & Efficiency </h1> */}
{/* <p className="text-xl  mb-2 text-justify font-serif  text-gray-800 leading-relaxed">Vibe Connect tools is designed to enhance employee productivity, streamline collaboration, and support professional development within organizations. Employee productivity refers to the output generated by an employee within a specific time frame, while efficiency measures how well resources (including time and effort) are utilized to achieve that output. Enhancing both productivity and efficiency is crucial for organizations to improve performance and competitiveness. Key Factors Influencing Productivity and Efficiency:
</p>
<ul className="list-[disc] list-inside "><li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Work Environment </li>
<li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Technology</li>
<li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Work-Life Balance</li>
<li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Clear Goals and Feedback</li></ul>
	
	
	
  
<p className="text-xl  mb-4 text-justify font-serif w-1/2 text-gray-800 leading-relaxed">
Investing in strategies that enhance employee productivity and efficiency not only benefits the workforce but also drives overall organizational success. By creating a supportive environment and providing the necessary resources, companies can optimize performance and achieve sustainable growth.
  </p> */}
  
  <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        {/* <h3 className="text-3xl font-bold  mb-2">				Project & Task Management</h3> */}

       <p className="lg:text-xl  mb-2 text-justify font-serif  text-gray-800 leading-relaxed">Vibe Connect tools is designed to enhance employee productivity, streamline collaboration, and support professional development within organizations. Employee productivity refers to the output generated by an employee within a specific time frame, while efficiency measures how well resources (including time and effort) are utilized to achieve that output. Enhancing both productivity and efficiency is crucial for organizations to improve performance and competitiveness. Key Factors Influencing Productivity and Efficiency:
</p>
<ul className="list-[disc] list-inside "><li className="lg:text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Work Environment </li>
<li className="lg:text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Technology</li>
<li className="lg:text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Work-Life Balance</li>
<li className="lg:text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Clear Goals and Feedback</li></ul>
	
	
	
  
<p className="lg:text-xl  mb-4 text-justify font-serif  text-gray-800 leading-relaxed">
Investing in strategies that enhance employee productivity and efficiency not only benefits the workforce but also drives overall organizational success. By creating a supportive environment and providing the necessary resources, companies can optimize performance and achieve sustainable growth.
  </p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Knowmorepage2}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
  <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">				Project & Task Management</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Project & Task Planning :</span>   Provides tools for planning projects, managing sub-task dependencies, and tracking progress using Kanban or list views, with milestones. Offers task assignment, tracking, and management of deadlines with reminders for timely completion.  </p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	Integration with Tools like WhatsApp for assigning and reminder of pending task.</p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={taskimage}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">			Communication & Collaboration</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">Communication Tools: </span>   Includes instant broadcasts, events, Notices, video conferencing (Zoom, Teams), and email integration, Forums etc for seamless communication. </p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Collaboration Tools:  </span>Facilitates document sharing, team collaboration spaces, and internal chats.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">	Calendar Integration:  </span>Supports multiple calendar integration with auto-sync functionality.</p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center px-10">
          <img
            src={communicationimage}
            alt="AI Automation"
            // className=" h-72 w-full"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">				Service & Support:</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Service Desk:  </span>   Features a ticketing system, issue tracking, SLA management, and CAPA compliance for handling service requests. This centralized platform ensures timely responses and resolutions, enhancing user satisfaction. With comprehensive reporting and analytics, it identifies recurring issues, enabling proactive improvements to service delivery. The intuitive interface streamlines communication between users and support teams, fostering collaboration and transparency.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Booking Requests:  </span>Manages travel bookings (cabs, hotels, tickets) and workspace reservations. This feature simplifies the booking process, allowing employees to secure necessary arrangements efficiently. Automated notifications and confirmations keep users informed, reducing the risk of errors and ensuring a seamless experience. .</p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={serviceimage}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">			Employee Engagement:</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Employee Portal: </span>  Provides a self-service portal for HR requests, personal information management, and more. This centralized platform streamlines communication between employees and HR, allowing for efficient handling of requests and updates.  </p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">			Digital Business Card:   </span>Enables digital contact sharing and customizable business cards. This feature not only promotes professional networking but also reduces paper waste, aligning with sustainable business practices. </p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Field Sense:   </span>Facilitates field data collection with mobile access for sales, business development, and operations teams. This tool enhances real-time data accuracy and enables teams to make informed decisions on the go.</p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={knowledgebase}
            alt="AI Automation"
            className=" h-full w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">		Skill Grow</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Skill Development: </span>  Offers training programs, certification tracking, and skill assessments to enhance employee capabilities.Our comprehensive approach not only equips employees with essential skills but also fosters a culture of continuous learning and professional growth. Regular skill assessments help identify strengths and areas for improvement, ensuring that training efforts are targeted and effective. </p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Recognition & Rewards:   </span>Includes reward programs, performance reviews, and recognition badges to boost employee motivation.</p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={skill}
            alt="AI Automation"
           className=" h-full w-4/5"
          //  style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">			Meeting Management</h3>

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Meeting Tools:</span>   Supports agenda management, minutes of meeting (MOM) transcribing, and follow-up tracking for efficient meetings.  </p>
<p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">	MOM Integration: </span>Automates MOM generation and distribution to ensure clear communication post-meetings.</p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={meetingimage}
            alt="AI Automation"
            // className=" h-full "
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-xl lg:text-3xl font-bold   mb-2">		Reputation Management</h4>
    <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
   <span className="font-bold ">Online Reputation:</span>	 Monitors social media, analyses brand sentiment, and manages online reviews to safeguard and enhance brand reputation.    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reputationimage}
            alt="Team Taskforce"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
    
      
      
    
    
    </div>



   
     

      {/* Call to Action Section */}
      <div className=" flex flex-col justify-center items-center py-10 lg:py-20 bg-gradient-to-r from-purple-900  to-pink-700   ">
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

export default KnowMorePage2;
