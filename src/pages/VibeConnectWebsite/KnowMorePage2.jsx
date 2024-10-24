import React, { useEffect } from "react";
import Knowmorepage2 from '../../../Website Image/knowmorepage2.jpeg'
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


function KnowMorePage2() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      <header className="flex justify-between p-4 bg-transparent absolute top-0 w-full z-10">
        <div></div> {/* Placeholder for logo */}
        {/* <nav className="space-x-6 text-white">
          <a href="#integrations" className="hover:underline">Integrations</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#login" className="hover:underline">Log in</a>
          <a href="#login" className="hover:underline">Get Demo</a>
          <a href="#demo" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Contact Us</a>
        </nav> */}
      </header>

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-purple-900  to-pink-700 text-center py-40">
  <h1 className="text-5xl font-bold text-white mb-4">Employee Productivity & Efficiency</h1>
  
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
      <div className="relative top-10  text-gray-800 relative bottom-10 px-20">
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

       <p className="text-xl  mb-2 text-justify font-serif  text-gray-800 leading-relaxed">Vibe Connect tools is designed to enhance employee productivity, streamline collaboration, and support professional development within organizations. Employee productivity refers to the output generated by an employee within a specific time frame, while efficiency measures how well resources (including time and effort) are utilized to achieve that output. Enhancing both productivity and efficiency is crucial for organizations to improve performance and competitiveness. Key Factors Influencing Productivity and Efficiency:
</p>
<ul className="list-[disc] list-inside "><li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Work Environment </li>
<li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Technology</li>
<li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Work-Life Balance</li>
<li className="text-xl  mb-2 text-justify font-serif text-gray-800 leading-relaxed">Clear Goals and Feedback</li></ul>
	
	
	
  
<p className="text-xl  mb-4 text-justify font-serif  text-gray-800 leading-relaxed">
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
        <h3 className="text-3xl font-bold  mb-2">				Project & Task Management</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Project & Task Planning :</span>   Provides tools for planning projects, managing sub-task dependencies, and tracking progress using Kanban or list views, with milestones. Offers task assignment, tracking, and management of deadlines with reminders for timely completion.  </p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	Integration with Tools like WhatsApp for assigning and reminder of pending task.</p>
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
        <h3 className="text-3xl font-bold  mb-2">			Communication & Collaboration</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">Communication Tools: </span>   Includes instant broadcasts, events, Notices, video conferencing (Zoom, Teams), and email integration, Forums etc for seamless communication. </p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Collaboration Tools:  </span>Facilitates document sharing, team collaboration spaces, and internal chats.</p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">	Calendar Integration:  </span>Supports multiple calendar integration with auto-sync functionality.</p>

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
        <h3 className="text-3xl font-bold  mb-2">				Service & Support:</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Service Desk:  </span>   Features a ticketing system, issue tracking, SLA management, and CAPA compliance for handling service requests. </p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Booking Requests:  </span>Manages travel bookings (cabs, hotels, tickets) and workspace reservations.</p>

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
        <h3 className="text-3xl font-bold  mb-2">			Employee Engagement:</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Employee Portal: </span>  Provides a self-service portal for HR requests, personal information management, and more. </p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">			Digital Business Card:   </span>Enables digital contact sharing and customizable business cards.</p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Field Sense:   </span>Facilitates field data collection with mobile access for sales, business development, and operations teams.</p>

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
        <h3 className="text-3xl font-bold  mb-2">		Skill Grow</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Skill Development: </span>  Offers training programs, certification tracking, and skill assessments to enhance employee capabilities. </p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">		Recognition & Rewards:   </span>Includes reward programs, performance reviews, and recognition badges to boost employee motivation.</p>

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
        <h3 className="text-3xl font-bold  mb-2">			Meeting Management</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
     <span className="font-bold ">	Meeting Tools:</span>   Supports agenda management, minutes of meeting (MOM) transcribing, and follow-up tracking for efficient meetings.  </p>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold ">	MOM Integration: </span>Automates MOM generation and distribution to ensure clear communication post-meetings.</p>
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
        <h4 className="text-3xl font-bold   mb-2">		Reputation Management</h4>
    <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
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
      <div className=" flex flex-col justify-center items-center py-10 bg-gradient-to-r from-purple-900  to-pink-700   ">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
        Vibe Connect: Your All-in-One Command Center 
        </h1>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Get a demo
        </button>
        
        {/* Features List */}
        <div className="mt-4 flex gap-4 text-sm text-white">
          <span>Free 14-day trial</span>
          <span>Easy setup</span>
          <span>Cancel anytime</span>
        </div>
      </div>

   <div className="mt-4">
   <VibeConnectFooter/></div>
    </div>
  );
}

export default KnowMorePage2;
