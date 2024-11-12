import React, { useEffect } from "react";
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import asset from '../../../Website Image/supplier4.jpeg';

import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function SupplierPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white mb-4">Supplier Management</h1>
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
      {/* <div className="flex justify-center text-base font-semibold relative top-64">
      <p className="text-gray-800">The Most Employee Centric and Customer Teams are using our tool VIBE to drive experience.</p>
      </div> */}
      <div className=" relative top-10 text-gray-800 font-serif px-10 lg:px-20 ">
     
 
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-1 lg:mb-0">
        {/* <h3 className="text-3xl font-bold  mb-2">			Supplier Management</h3> */}

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Managing suppliers is a crucial element of effective operations, and Vibe Connect makes it effortless by centralizing all supplier-related activities in one place. It enables businesses to maintain accurate supplier profiles, track orders, and manage contracts with precision, while providing a clear overview of supplier performance and history. This comprehensive module ensures that all communications, transactions, and documentation with suppliers are efficiently recorded and accessible. With its ability to automate recurring orders and provide real-time updates, this feature strengthens relationships by fostering transparency and accountability. Businesses can also benefit from analytics-driven insights, allowing them to make informed decisions about supplier partnerships and optimize procurement processes. This results in a well-organized supplier network that supports smoother operations and strategic growth.</p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={asset}
            alt="AI Automation"
            // className=" h-96 w-full p-4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
     

     
     
     
     
     
    
     
      
    </div>

   
     

      

   <div className="mt-4">
   <VibeConnectFooter/></div>
    </div>
  );
}

export default SupplierPage;
