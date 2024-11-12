import React, { useEffect } from "react";
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import purchasenew from '../../../Website Image/purchase2.jpeg';
import auditnew from '../../../Website Image/BillPay.jpeg';

import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function BillpayWebPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
        <h1 className="text-2xl lg:text-5xl font-bold  text-white mb-4">Bill Pay</h1>
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
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        {/* <h3 className="text-3xl font-bold  mb-2">				Audit Management</h3> */}

        <p className="lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Managing payments becomes effortless with Vibe Connect's streamlined solution, allowing users to handle bills, invoices, and payment schedules with ease. The feature is designed to simplify the financial process, offering automated reminders for upcoming payments and real-time tracking of financial transactions. It integrates seamlessly with other tools, ensuring that all payment-related information is stored in one place for easy access and management. Users can set up recurring payments, track multiple vendors, and generate reports for better financial oversight. This feature reduces the risk of missed payments and late fees, keeping businesses organized and in control of their financial obligations with minimal effort.  </p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={auditnew}
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

export default BillpayWebPage;
