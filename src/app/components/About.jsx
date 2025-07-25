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
    title: "Mcgill",
    location: "Montreal, CA",
    description: "This is where I studied for my BEng",
    icon: "/assets/skills/css.png",
    date: "2019-2023",
  },
  {
    title: "Mcgill",
    location: "Montreal, CA",
    description: "This is where I studied for my BEng",
    icon: "/assets/skills/css.png",
    date: "2019-2023",
  },
  {
    title: "Mcgill",
    location: "Montreal, CA",
    description: "This is where I studied for my BEng",
    icon: "/assets/skills/css.png",
    date: "2019-2023",
  },
]

const Education_Data =[
  {
    title: "Mcgill",
    location: "Montreal, CA",
    description: "This is where I studied for my BEng",
    icon: "/assets/skills/css.png",
    date: "2019-2023",
  },
  {
    title: "Mcgill",
    location: "Montreal, CA",
    description: "This is where I studied for my BEng",
    icon: "/assets/skills/css.png",
    date: "2019-2023",
  },
  {
    title: "Mcgill",
    location: "Montreal, CA",
    description: "This is where I studied for my BEng",
    icon: "/assets/skills/css.png",
    date: "2019-2023",
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
            contentStyle={{ background: '#f5f5f7',boxShadow: "none", border:"1px solid #d1d1d6"}}
            contentArrowStyle={{ borderRight: '7px solid #d1d1d6' }}
            date={experienceItem.date}
            iconStyle={{ background: 'white' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={experienceItem.icon}
                  alt={experienceItem.title}
                  width={60}
                  height={60}
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title text-xl md:text-2xl xl:text-2xl font-bold text-black">
              {experienceItem.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#6e6e73] text-lg mt-2">
              {experienceItem.location}
            </h4>
            <p className="text-[#585858] mt-2">
              {experienceItem.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-dict pl-2 text-center">
        <li>McGill University</li>
        <li>Marianopolis College</li>
      </ul>
    ),
  },
  /*{
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-dict pl-2 text-center">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },*/
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
                <p className=" text-slate-200 md:text-lg xl:text-xl ">
                    I am a software developer with experience deploying a variety of applications. My background includes building web solutions, optimizing user experiences, and working with modern technologies to deliver reliable and scalable products.
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