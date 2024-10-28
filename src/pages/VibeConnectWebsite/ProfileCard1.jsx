import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VibeConnectFooter from './VibeConnectFooter';
import { Link } from 'react-router-dom';
import projecttask from '../../../Website Image/projecttaskicon.png';
import serviceicon from '../../../Website Image/serviceicon.png';
import skillgrowicon from '../../../Website Image/skillgrowicon.png';
import Employeeengagemnticon from '../../../Website Image/Employeeengagemnticon.png';
import communicationicon from '../../../Website Image/communicationicon.png';

const profiles = [
  {
    id: 1,
    name: '	Project & ',
    title: ' Task Management ',
    description: '	Project & Task Management',
    text1:" Project & Task Planning: Provides tools for planning projects,managing sub-task  dependencies, and tracking progress using Kanban or list views, with milestones. Offers task assignment, tracking, and management of deadlines with reminders for timely completion.",
    text2:"	Integration with Tools like WhatsApp for assigning and reminder of pending task.",
    text:"Vibe Connect tools is designed to enhance employee productivity, streamline collaboration, and support professional development within organizations. Employee productivity refers to the output generated by an employee within a specific time frame, while efficiency measures how well resources (including time and effort) are utilized to achieve that output. ",
    image: projecttask,
  },
  {
    id: 2,
    name: '	Communication & ',
    title: 'Collaboration',
    text:" Communication Tools:Includes instant broadcasts, events, notices, video conferencing (Zoom, Teams), and email integration, forums, etc., for seamless communication. Our platform enables quick dissemination of information, ensuring that all team members stay informed and engaged. 	 ",
    text1:"Collaboration Tools: Facilitates document sharing, team collaboration spaces, and internal chats. With intuitive interfaces, teams can collaborate in real time, driving innovation and enhancing productivity.",
    text2:"Calendar Integration: Supports multiple calendar integration with auto-sync functionality.This feature allows users to schedule meetings and events effortlessly while ensuring that everyone stays up-to-date with their commitments. ",
    description: 'Communication & Collaboration',
    image: communicationicon,
  },
  {
    id: 3,
    name: 'Service & Support',
    title: ' ',
    text:"	Service Desk: Features a ticketing system, issue tracking, SLA management, and CAPA compliance for handling service requests. This centralized platform ensures timely responses and resolutions, enhancing user satisfaction. With comprehensive reporting and analytics, it identifies recurring issues, enabling proactive improvements to service delivery. The intuitive interface streamlines communication between users and support teams, fostering collaboration and transparency.",
    text1:"	Booking Requests: Manages travel bookings (cabs, hotels, tickets) and workspace reservations. This feature simplifies the booking process, allowing employees to secure necessary arrangements efficiently. Automated notifications and confirmations keep users informed, reducing the risk of errors and ensuring a seamless experience. ",
    description: 'Service & Support',
    image: serviceicon,
  },
  {
    id: 4,
    name: '	Employee Engagement ',
    title: '',
    text:"	Employee Portal: Provides a self-service portal for HR requests, personal information management, and more. This centralized platform streamlines communication between employees and HR, allowing for efficient handling of requests and updates.  ",
    text1:"	Digital Business Card: : Enables digital contact sharing and customizable business cards. This feature not only promotes professional networking but also reduces paper waste, aligning with sustainable business practices. ",
    text2:"	Field Sense: Facilitates field data collection with mobile access for sales, business development, and operations teams. This tool enhances real-time data accuracy and enables teams to make informed decisions on the go. ",
    description: '	Employee Engagement',
    image: Employeeengagemnticon,
  },
  {
    id: 5,
    name: 'SKILL GROW ',
    text:"	Skill Development: Offers training programs, certification tracking, and skill assessments to enhance employee capabilities.Our comprehensive approach not only equips employees with essential skills but also fosters a culture of continuous learning and professional growth. Regular skill assessments help identify strengths and areas for improvement, ensuring that training efforts are targeted and effective.  ",
    text1:"	Recognition & Rewards: Includes reward programs, performance reviews, and recognition badges to boost employee motivation.These initiatives are designed to celebrate achievements, encouraging employees to strive for excellence in their roles. Timely performance reviews provide valuable feedback, reinforcing a culture of accountability and growth. ",
    description: 'SKILL GROW',
    image: skillgrowicon,
  },
 
];

const ProfileCard1 = () => {
  const [activeProfile, setActiveProfile] = useState(profiles[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  const handleProfileClick = (id) => {
    setActiveProfile(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className='min-h-screen relative bottom-6'>
    
      <div className="absolute top-0 right-0 w-full lg:w-1/3  text-white px-4 py-2 md:px-8 md:py-2 rounded-bl-2xl shadow-lg bg-[#c61376]" >
        <p className="font-bold text-sm md:text-lg tracking-wide uppercase">Employee Productivity & Efficiency </p>
      </div>
      {/* <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-900  to-pink-700 h-full md:block hidden">
  
</div> */}
<div className="absolute top-0 left-0 bg-[#c61376]  to-pink-700 h-full w-20 md:block hidden">
  
</div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 py-6 lg:py-10">
        {/* Sidebar with Profile Images */}
        <div className="flex flex-col items-start space-y-2 md:space-y-2 py-4 lg:py-8 lg:ml-20 xl:ml-52">
    {profiles.map((profile, index) => (
      <motion.div
        key={profile.id}
        onClick={() => handleProfileClick(profile.id)}
        className={`flex items-center cursor-pointer transition-all duration-300 w-full ${activeProfile === profile.id ? 'opacity-100' : 'opacity-50'}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: activeProfile === profile.id ? 1 : 0.5, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Alternate Layout: Image first or Name and Title first */}
        {index % 2 === 0 ? (
          <>
            {/* Profile Image First */}
            <div className='flex justify-between items-center w-96'>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2  p-2 md:p-1 bg-[#c61376] border-pink-800" >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full p-2 filter invert"
              />
            </div>
            {/* Profile Name and Title */}
            <div className=" ">
              <h2 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy">
                {profile.name}
              </h2>
              <h3 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy">
                {profile.title}
              </h3>
            </div>
            </div>
          </>
        ) : (
          <>
            {/* Profile Name and Title First */}
            <div className='flex justify-between items-center w-96'>
            <div className="">
              <h2 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy ">
                {profile.name}
              </h2>
              <h3 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy ">
                {profile.title}
              </h3>
            </div>
            {/* Profile Image */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2  p-2 md:p-1 bg-[#c61376] border-pink-800" >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full p-2 filter invert"
              />
            </div>
            </div>
          </>
        )}
      </motion.div>
    ))}
  </div>
        {/* Profile Details Section */}
        <div ref={observerRef} className="lg:w-2/5 py-6 md:py-10 px-4 md:px-6 lg:mr-20 xl:mr-14">
          {profiles.map((profile) => (
            profile.id === activeProfile && (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-black uppercase">{profile.description}</h3>
                <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg text-justify font-serif text-gray-800 leading-relaxed">
                  {profile.text}
                 
                </p>
                <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg text-justify font-serif text-gray-800 leading-relaxed">
                  {profile.text1}
                 
                </p>
                <p className="mt-2 md:mt-4 text-sm md:text-base  lg:text-lg text-justify font-serif text-gray-800 leading-relaxed">
                  {profile.text2}
                 
                </p>
                <div className="mb-4">
                  
                  <div className="w-full mt-1  h-0.5 bg-blue-500"></div>
                  <p className="text-center text-blue-500 mt-2 md:mt-4 font-semibold">
                  <a href="/employee-productivity-and-efficiency">More Modules</a>
                  </p>
                </div>
              </motion.div>
            )
          ))}
          
        </div>
       
      </div>
      
     
    </div>
  );
};

export default ProfileCard1

