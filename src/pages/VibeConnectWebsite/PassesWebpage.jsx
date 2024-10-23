import React, { useEffect } from "react";
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import pass from '../../../Website Image/pass.jpeg';

import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function PassesWebPage() {
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
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
        <h1 className="text-5xl font-bold  text-white mb-4">Pass Management</h1>
        <div className="flex justify-center">
 
</div>

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
      {/* <div className="flex justify-center text-base font-semibold relative top-64">
      <p className="text-gray-800">The Most Employee Centric and Customer Teams are using our tool VIBE to drive experience.</p>
      </div> */}
      <div className=" relative top-10 text-gray-800 font-serif px-20 ">
     
 
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">	Pass Management </h3>
        <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Manages passes for visitors, vehicles, good in/out and delivery tracking. Pass management is a critical system that oversees the issuance and tracking of passes for visitors, vehicles, goods in/out, and delivery logistics within a company. Its significance can be summarized in several key areas:</p>       
        
        <ul >
    <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Enhanced Security:</span>	 By controlling access to facilities, pass management helps ensure that only authorized individuals and vehicles enter the premises, reducing security risks.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Visitor Tracking:</span>	 Efficiently managing visitor passes allows companies to monitor who is on-site at any given time, enhancing accountability and emergency preparedness.

</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold">Streamlined Operations:</span>	 Effective pass management simplifies the process of receiving and dispatching goods, improving logistics and reducing wait times for deliveries.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Inventory Control:</span> By tracking goods in and out, companies can maintain better oversight of inventory levels, minimizing losses and ensuring timely restocking.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Data Collection:</span> A digital pass management system can gather valuable data on visitor and delivery patterns, aiding in operational planning and resource allocation.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Compliance and Reporting:</span> Maintaining records of access and deliveries can assist with compliance requirements and provide insights for audits and reporting.</li>
<p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	In summary, pass management is essential for enhancing security, streamlining operations, and improving overall efficiency in companies.</p>
</ul>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center px-10">
          <img
            src={pass}
            alt="AI Automation"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
     

     
     
     
     
     
    
     
      
    </div>

   
     

      {/* Call to Action Section */}
      {/* <div className=" flex flex-col justify-center items-center py-8  bg-gradient-to-r from-[#e98972] to-[#db5354] p-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Ready to reach product management mastery?
        </h1>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Get a demo
        </button>
        
        
        <div className="mt-4 flex gap-4 text-sm text-white">
          <span>Free 14-day trial</span>
          <span>Easy setup</span>
          <span>Cancel anytime</span>
        </div>
      </div> */}

   <div className="mt-4">
   <VibeConnectFooter/></div>
    </div>
  );
}

export default PassesWebPage;