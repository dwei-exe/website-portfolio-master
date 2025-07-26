"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from './TabButton';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Experience_Data =[
  {
    title: "Software Developer Intern",
    institution: "Center for Research in Computational Thermochemistry (CRCT)",
    location: "Montreal, CA",
    description: "FactSage Software\nLife Cycle Analysis Module for chemical process simulations in FactFlow",
    skills: ["/assets/skills/Python.png","/assets/skills/C++.png","/assets/skills/Qt.png", "/assets/skills/Git.png"],
    icon: "/assets/about/experience/FactSage.png",
    date: "2025-Present",
  },
  {
    title: "Full-Stack Developer",
    institution: "Canadian Robotics Competition",
    location: "Montreal, CA",
    description: `Managr. Competition Management Platform\n• React Native Application for tracking competition events`,
    skills: ["/assets/skills/React.png","/assets/skills/mongodb.png","/assets/skills/TypeScript.png","/assets/skills/html.png","/assets/skills/css.png","/assets/skills/Javascript.png"],
    icon: "/assets/about/experience/CRC.png",
    date: "2023-Present",
  },
  {
    title: "Robotics Engineer",
    institution: "Marianopolis Robotics",
    location: "Montreal, CA",
    description: "Robotics Team Captain | 2024 Canadian Robotics Competition Champions 🏆\n• Sponsorship-Outreach-Organization\n• Arduino and C++ robot control systems\n• Automated Computer Aided Design (CAD) Workflows",
    skills: ["/assets/skills/C++.svg","/assets/skills/Arduino.png","/assets/skills/OnShape.png"],
    icon: "/assets/about/experience/marirobotics.png",
    date: "2023-Present",
  },
]

const Education_Data =[
  {
    title: "BEng - Software Engineering (Co-op)",
    institution: "Mcgill University",
    location: "Montreal, CA",
    description: `Schulich Leaders STEM Scholarship (120k)\n\nRelevant Coursework: Object Oriented Programming, Algorithms and Data Structures, Fundamentals of Programming, Fundamentals of Software Development, Software Systems, Design Principles and Methods`,
    icon: "/assets/about/experience/mcgill.png",
    date: "2025-Present",
  },
  {
    title: "DEC - Honors Pure and Applied Science",
    institution: "Marianopolis College",
    location: "Montreal, CA",
    description: `Director General's Merit Scholarship for Academic Excellence (2023-2025), Dean's List (all 4 semesters), Marianopolis Scholar\n\nChemistry Teaching Assistant, Mathematics/Physics Peer Tutor, Peer Mentor\n\nRelevant Coursework: Calculus I, Calculus II (enriched), Calculus III, Linear Algebra I (enriched), Linear Algebra II, Mechanics, Waves Light and Modern Physics (enriched), Electricity and Magnetism (enriched)`,
    icon: "/assets/about/experience/mari.png",
    date: "2023-2025",
  },
]

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <VerticalTimeline lineColor='#d1d1d6'>
        {Experience_Data.map((experienceItem, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f5f5f7', boxShadow: "none", border:"1px solid #d1d1d6"}}
            contentArrowStyle={{ borderRight: '7px solid #d1d1d6' }}
            date={experienceItem.date}
            iconStyle={{ 
              background: 'white',
              border: '3px solid #d1d1d6',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={experienceItem.icon}
                  alt={experienceItem.title}
                  width={60}
                  height={60}
                  className="rounded-full object-contain p-1"
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title text-xl md:text-2xl xl:text-2xl font-bold text-black">
              {experienceItem.title}
            </h3>
            <h3 className="vertical-timeline-element-title text-xl md:text-2xl xl:text-xl font-semibold text-[#3a3a3c]">
              {experienceItem.institution}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#6e6e73] text-lg mt-2">
              {experienceItem.location}
            </h4>
            <p className="text-[#585858] mt-2 whitespace-pre-line">
              {experienceItem.description}
            </p>
            <div className="flex flex-wrap gap-2 items-center mt-3">
              {experienceItem.skills.map((techImg, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image 
                    src={techImg} 
                    alt={`Technology ${index + 1}`} 
                    width={25} 
                    height={25}
                  />
                  <span className="text-xs text-[#6e6e73] mt-1">
                    {techImg.split('/').pop().split('.')[0].toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <VerticalTimeline lineColor='#d1d1d6'>
        {Education_Data.map((experienceItem, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f5f5f7', boxShadow: "none", border:"1px solid #d1d1d6"}}
            contentArrowStyle={{ borderRight: '7px solid #d1d1d6' }}
            date={experienceItem.date}
            iconStyle={{ 
              background: 'white',
              border: '3px solid #d1d1d6',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={experienceItem.icon}
                  alt={experienceItem.title}
                  width={80}
                  height={80}
                  className="rounded-full object-contain p-1"
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title text-xl md:text-2xl xl:text-2xl font-bold text-black">
              {experienceItem.title}
            </h3>
            <h3 className="vertical-timeline-element-title text-xl md:text-2xl xl:text-2xl font-semibold text-[#3a3a3c]">
              {experienceItem.institution}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#6e6e73] text-lg mt-2">
              {experienceItem.location}
            </h4>
            <p className="text-[#585858] mt-2 whitespace-pre-line">
              {experienceItem.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    ),
  },
];


const About = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const experienceRef = useRef(null);
  const experienceIsInView = useInView(experienceRef, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <div className='w-full' id="about">
      <motion.section 
        ref={ref}
        className="w-full bg-[#121212] py-0 sm:py-12 md:py-16"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-2 xl:items-center xl:justify-center md:items-center md:justify-center gap-0 py-6 xl:pr-30 px-8 md:px-8 xl:gap-1 sm:py-2">
        <div className="flex items-center justify-center h-full">
            <Image src="/assets/about/about.png" alt="About Image" className="rounded" width={500} height={500}/>
        </div>
            <div className="text-center mt-4 md:mt-0 xl:text-left md:text-left flex flex-col h-full md:pl-10 xl:pl-15 sl:pr-15">
                <h2 className='ext-whitefont-bold font-extrabold text-4xl mb-4 xl:mb-10 md:bt-10'>
                    About Me
                </h2>
                <p className=" text-slate-200 md:text-lg xl:text-xl mt-0 md:mt-10 xl:mt-20">
                    I&apos;m a software developer who&apos;s been building real systems since I taught myself to code. My code currently serves researchers analyzing chemical pathways, powers the competition portal for one of Canada&apos;s largest robotics competitions, and builds machine learning models in healthcare. I&apos;m always learning, always building, and always looking for the next challenge.
                </p>
                
            </div>
        </div>
    </motion.section>
    <motion.section 
        ref={experienceRef}
        id="experience"
        initial={{ opacity: 0, y: 100 }}
        animate={experienceIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className='xl:px-0 md:px-0 px-3'
      >
        <div className="flex justify-center flex-row items-center mt-8 xl:pt-10 md:pt-10">
            <TabButton
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
            >
            {" "}
            Experience{" "}
            </TabButton>
            <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
            >
            {" "}
            Education{" "}
            </TabButton>
            {/* <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
            >
            {" "}
            Certifications{" "}
            </TabButton> */}
        </div>
        <div className="mt-8 text-2xl text-black mb-10">
            {TAB_DATA.find((t) => t.id === tab).content}
        </div>
    </motion.section>
    </div>
  );
};
export default About;