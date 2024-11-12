import React, { useEffect } from "react";
import communicationimage from '../../../Website Image/communicationimage1.jpeg';
import knowledgebase from '../../../Website Image/employeeengagementimage1.jpeg';
import meetingimage from '../../../Website Image/meetingimage1.jpeg';
import reputationimage from '../../../Website Image/reputationimage1.jpeg';
import serviceimage from '../../../Website Image/serviceimage1.jpeg';
import taskimage from '../../../Website Image/taskimage1.jpeg';
import skill from '../../../Website Image/skillgrowimage1.jpeg';
import asset from '../../../Website Image/attendancetracking.jpeg';

import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function AttendancemanagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white mb-4">Attendance Management</h1>
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
        {/* <h3 className="text-3xl font-bold  mb-2">			Attendance Management</h3> */}

        <p className="md:text-lg lg:text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Efficient attendance tracking is crucial for modern organizations, and Vibe Connect offers a comprehensive solution that simplifies this process without the need for additional hardware. By leveraging advanced geofencing technology, employees can easily check in and out from designated locations, ensuring accurate tracking while maintaining flexibility. The system allows managers to monitor attendance in real-time, providing valuable insights into workforce patterns and productivity. With Vibe Connect, organizations can effectively manage attendance data, reducing the risk of inaccuracies associated with manual processes. This integration not only enhances accountability but also fosters a culture of trust within the workplace. By eliminating the complexities of traditional attendance management, Vibe Connect empowers teams to focus on their core responsibilities, driving overall performance and engagement. </p>

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

export default AttendancemanagementPage;
