import React, { useEffect, useState } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import compliance from '../../../Website Image/bg-compliance2.jpg';
import permit from '../../../Website Image/financeimage.jpeg';
import knowledgebase from '../../../Website Image/Knowledge base-1.jpg';
import purchase from '../../../Website Image/purchase.jpg';
import reporting from '../../../Website Image/healthimage.jpeg';
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";
import worklifebalance from '../../../Website Image/worklifebalance.jpeg';
import insurane from '../../../Website Image/insurance.jpeg';
import fitnessandwell from '../../../Website Image/fitnessandwell.jpeg';
import { FaTimes } from "react-icons/fa";
import MultiSelect from "./MultiSelect";
import Calendar from 'react-calendar'; 
// import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { motion } from "framer-motion"; 

function KnowMorePage3() {
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
        <section className="relative  bg-gradient-to-br from-[#662B96] to-[#0B205B] text-center py-40">
          <h1 className="text-xl lg:text-5xl font-bold  text-white p-4 mb-4">Finance & Personal Management</h1>
          {/* <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full">Learn More</button>
            
          </div> */}
          {/* <div className='absolute mt-4 flex justify-center w-full h-full bg-cover bg-center'>
          <img  src={compliance} alt="" className="z-20"/>
          </div> */}
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
        </section>
        {/* Form section */}
      
      </main>
      {/* <div className="flex justify-center text-base font-semibold relative top-44">
      <p className="text-gray-800">The Most Employee Centric and Customer Teams are using our tool VIBE to drive experience.</p>
      </div> */}
      <div className="relative top-18 font-serif text-gray-800 p-8 px-10 lg:px-20">
     
      
     

    
      {/* <h1 className="text-3xl font-bold  mb-4">	Finance & Personal Management </h1> */}
      <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed tracking-tight">Finance & Personal Management
         tools helps    individuals
         manage their finances, bills, insurance,  healthcare, and  wellness, offering comprehensive solutions 
         for personal and financial well-being at one location. Finance and personal management tools provide individuals
          with a centralized platform to effectively manage various aspects of their financial lives.
           These tools encompass a wide range of functionalities designed to simplify tasks such as budgeting, bill tracking, 
           insurance management, healthcare coordination,
            and overall wellness. Offering comprehensive solutions for personal finance and wellness in one location, these tools 
            empower individuals to take control of their financial futures, enhance their decision-making, and improve their
             overall quality of life.</p>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">		Financial Management</h3>
    <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    <span className="font-bold ">	Personal Finance: </span>Includes budgeting tools, expense tracking, and savings goal setting to manage personal finances effectively.    </p>

<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Bill Management:</span> Facilitates bill payments, offers reminders, and generates expense reports for better financial oversight.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Insurance Management:</span> Helps track insurance policies, manage claims, and review coverage for optimal protection.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Healthcare Management:</span> Provides tools for managing doctor appointments, health records, and participation in wellness programs.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Advance Salary Management:</span> Supports salary advances, loan management, and payroll integration for financial flexibility.</p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={permit}
            alt="AI Automation"
            className=" h-full w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">		Insurance management</h3>
    <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    <span className="font-bold ">	Comprehensive Policy Management: </span>Easily monitor and manage multiple insurance policies in one place, ensuring clear visibility of coverage and protection against unforeseen risks.    </p>

<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Claims Tracking and Review:</span> Simplify the claims process with seamless tracking, while reviewing existing policies to identify any gaps or opportunities for enhanced coverage.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Automated Reminders and Alerts:</span> Stay on top of critical dates with integrated reminders for policy renewals and claim submission deadlines, minimizing the risk of missed opportunities.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Optimized Coverage Review:</span> Gain insights into your insurance portfolio, allowing for quick adjustments and improvements to ensure optimal protection tailored to individual needs.</p>
{/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Advance Salary Management:</span> Supports salary advances, loan management, and payroll integration for financial flexibility.</p> */}
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={insurane}
            alt="AI Automation"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-xl lg:text-3xl font-bold  mb-2">		Healthcare management </h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
   <span className="font-bold ">Fitness Management:</span> Offers fitness tracking through App, online wellness programs, and health challenges to promote physical well-being and encourage a healthy lifestyle. Fitness and wellness programs for employees are essential components of a healthy workplace. These initiatives focus on promoting physical health, mental well-being, and overall life balance, ultimately enhancing employee satisfaction and productivity.   </p> */}

<ul >
    <li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Doctor Appointment Scheduling:</span>	 Simplify the process of booking and managing doctor appointments by providing a centralized platform where users can schedule, modify, and track all their healthcare appointments with ease.</li>
<li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Health Records Management:</span>	Keep all your medical records, prescriptions, and test results in one secure location, ensuring easy access and organized storage for both immediate reference and long-term management.

</li>
<li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Wellness Program Participation:</span>	 Encourage proactive healthcare by enabling participation in wellness programs and tracking progress, helping users stay engaged with preventive care and lifestyle improvement initiatives.</li>

<li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Personalized Health Reminders:</span>	 Stay informed with personalized reminders for upcoming appointments, medication schedules, and wellness activities, ensuring that critical healthcare commitments are never missed.</li>


</ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reporting}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl lg:text-3xl font-bold  mb-2">		Work-Life Balance Initiatives</h3>
    <p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    <span className="font-bold ">		Flexible Work Schedules: </span>Offering employees the choice to adjust their working hours helps them balance personal obligations with professional demands, leading to increased job satisfaction and reduced stress levels.    </p>

<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">		Remote Work Options:</span> Allowing employees to work remotely fosters autonomy and flexibility, enabling them to create a work environment that enhances focus and productivity while accommodating personal needs.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">		Wellness Days:</span> Implementing designated wellness days encourages employees to take time off specifically for self-care and mental health, which helps prevent burnout and maintains a sustainable work pace.</p>
<p className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">	Increased Engagement and Retention:</span> By promoting a healthy work-life balance, organizations not only enhance employee morale but also improve retention rates, as individuals feel valued and supported in both their personal and professional lives.</p>
{/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Advance Salary Management:</span> Supports salary advances, loan management, and payroll integration for financial flexibility.</p> */}
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={worklifebalance}
            // alt="AI Automation"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-xl lg:text-3xl font-bold  mb-2">		Fitness & Wellness </h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
   <span className="font-bold ">Fitness Management:</span> Offers fitness tracking through App, online wellness programs, and health challenges to promote physical well-being and encourage a healthy lifestyle. Fitness and wellness programs for employees are essential components of a healthy workplace. These initiatives focus on promoting physical health, mental well-being, and overall life balance, ultimately enhancing employee satisfaction and productivity.   </p> */}

<ul >
    <li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Nutrition and Healthy Eating:</span>	 Wellness programs often include nutrition workshops, healthy eating challenges, and access to healthy snacks in the workplace, encouraging employees to make informed dietary choices.</li>
<li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Work-Life Balance Initiatives:</span>	 Flexible work schedules, remote work options, and wellness days allow employees to prioritize their personal lives alongside their professional responsibilities, reducing burnout.

</li>
<li className="lg:text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Wellness Challenges and Incentives:</span>	 Programs that gamify wellness, such as health challenges and rewards for participation, engage employees and foster a culture of health and fitness.</li>



</ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={fitnessandwell}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
    </div>

   
     

      {/* Call to Action Section */}
      <div className=" flex flex-col justify-center items-center py-10 lg:py-20 bg-gradient-to-br from-[#662B96] to-[#0B205B]  ">
        <h1 className="text-xl md:text-4xl font-bold text-white text-center">
        Vibe Connect: Your All-in-One Command Center 
        </h1>
        {/* <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Get a demo
        </button> */}
        
        {/* Features List */}
        {/* <div className="mt-4 flex gap-4 text-sm text-white ">
          <span>Free 14-day trial</span>
          <span>Easy setup</span>
          <span>Cancel anytime</span>
        </div> */}
      </div>
      <button 
  onClick={toggleModal} 
  className="fixed right-4 top-1/2 transform -translate-y-1/2 translate-x-1/2 rotate-90 bg-gradient-to-r from-[#e98972] to-[#db5354] text-white px-2 py-2 text-sm md:text-lg lg:text-lg font-semibold rounded-md r"
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

export default KnowMorePage3;
