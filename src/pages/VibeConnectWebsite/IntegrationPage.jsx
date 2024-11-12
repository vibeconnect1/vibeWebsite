import React, { useEffect } from "react";
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import permitnew from '../../../Website Image/Integration.jpeg';

import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function IntegrationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white mb-4">Integrations</h1>
        <div className="flex justify-center">
 
</div>

          
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
        </section>
        {/* Form section */}
      
      </main>
      
      <div className=" relative top-1 text-gray-800 font-serif px-10 lg:px-20 ">
     
 
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  ">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        {/* <h3 className="text-3xl font-bold mb-2 ">Integrations</h3> */}
    <p className="md:text-lg lg:text-xl  mb-4 text-justify font-serif  leading-relaxed">
    
    Vibe Connect’s Integration module brings together your organization’s various communication channels, connecting email platforms, social media accounts, and other messaging tools within a single interface. This comprehensive integration fosters a cohesive environment, eliminating the need to switch between multiple applications and reducing the chance of missed updates or fragmented conversations. By centralizing all communication, the Integration module strengthens team connectivity, allowing members to easily access all relevant information and collaborate effectively. This unified approach enhances organizational alignment, providing a clear and organized communication experience that empowers teams to manage interactions with greater focus and efficiency.
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

export default IntegrationPage;
