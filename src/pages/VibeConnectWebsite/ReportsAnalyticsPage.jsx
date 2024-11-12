import React, { useEffect } from "react";
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import asset from '../../../Website Image/reportsanalytics.jpeg';

import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function ReportsAnalyticsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white mb-4">Reports and Analytics</h1>
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
      
      <div className=" relative top-10 text-gray-800 font-serif px-10 lg:px-20 ">
     
 
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        {/* <h3 className="text-3xl font-bold  mb-2">			Reports and Analytics</h3> */}

        <p className="md:text-lg lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Reports and analytics management is a crucial aspect of Vibe Connect, empowering organizations to transform raw data into actionable insights. This feature offers robust analytical tools that enable businesses to monitor performance metrics, track key indicators, and generate comprehensive reports with ease. By consolidating data from various sources, Vibe Connect allows users to visualize trends and patterns, facilitating informed decision-making. With customizable dashboards and intuitive reporting capabilities, organizations can assess their operational efficiency and identify areas for improvement. Furthermore, this functionality supports collaborative efforts by sharing insights across teams, fostering a data-driven culture that enhances accountability and strategic planning. </p>

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

export default ReportsAnalyticsPage
