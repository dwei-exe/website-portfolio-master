"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const programmingLanguages = [
  { name: "Python", icon: "/assets/skills/Python.png" },
  { name: "C++", icon: "/assets/skills/C++.png" },
  { name: "MongoDB", icon: "/assets/skills/mongodb.png" },
  { name: "SQL", icon: "/assets/skills/SQL.png" },
  { name: "Typescript", icon: "/assets/skills/TypeScript.png" },
  { name: "HTML", icon: "/assets/skills/html.png" },
  { name: "CSS", icon: "/assets/skills/css.png" },
  { name: "Javascript", icon: "/assets/skills/Javascript.png" },
  { name: "MatLab", icon: "/assets/skills/MatLab.png" },
  { name: "Bash", icon: "/assets/skills/Bash.png" },
];

const frameworks = [
  { name: "React", icon: "/assets/skills/react.png" },
  { name: "Node", icon: "/assets/skills/node.js.png" },
  { name: "TensorFlow", icon: "/assets/skills/TensorFlow.png" },
  { name: "QT", icon: "/assets/skills/Qt.png" },
  { name: "Git", icon: "/assets/skills/Git.png" },
  { name: "Github", icon: "/assets/skills/Github.png" },
  { name: "Arduino", icon: "/assets/skills/Arduino.png"},
  { name: "CAD", icon: "/assets/skills/OnShape.png"},
];

const languages = [
  { name: "English", icon: "/assets/skills/English.png" },
  { name: "Français", icon: "/assets/skills/French.png" },
  { name: "中文", icon: "/assets/skills/Chinese.png" },
  { name: "Español", icon: "/assets/skills/Spanish.png" },
];

const Skills = () => {
  return (
    <section className="w-full bg-[#121212] py-16" id="skills">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-12 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          My Skills
        </h2>
        <h3 className="text-center text-2xl font-semibold text-white mb-8">
          Programming Languages
        </h3>
        <div className="relative overflow-hidden w-full pb-6">
          {/* Create mask container */}
          <div className="relative w-full">
            {/* Add gradient masks */}
            <div className="absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
            
            {/* Skills slider */}
            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatType:'loop',
              }}
            >
              {[...programmingLanguages, ...programmingLanguages].map((language, index) => (
                <div key={index} className='flex flex-col items-center w-[60px]'>
                  <div className='h-[60px] w-[60px] flex items-center justify-center'>
                    <Image 
                      src={language.icon}
                      height={50}
                      width={50}
                      alt={language.name.toLowerCase()}
                      className='object-contain'
                    />
                  </div>
                  <p className='text-[#7f7f83] text-xl text-center'>{language.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <h3 className="text-center text-2xl font-semibold text-white mb-8">
          Frameworks & Tools
        </h3>
        <div className="relative overflow-hidden w-full">
          {/* Create mask container */}
          <div className="relative w-full">
            {/* Add gradient masks */}
            <div className="absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
            
            {/* Skills slider */}
            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType:'loop',
              }}
            >
              {[...frameworks, ...frameworks,...frameworks, ...frameworks].map((language, index) => (
                <div key={index} className='flex flex-col items-center w-[60px]'>
                  <div className='h-[60px] w-[60px] flex items-center justify-center'>
                    <Image 
                      src={language.icon}
                      height={50}
                      width={50}
                      alt={language.name.toLowerCase()}
                      className='object-contain'
                    />
                  </div>
                  <p className='text-[#7f7f83] text-xl text-center'>{language.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <h3 className="text-center text-2xl font-semibold text-white mt-8">
          Spoken Languages
        </h3>
        <div className="flex justify-center items-center w-full">
          <motion.div className="flex gap-8 py-4 justify-center">
              {[...languages].map((language, index) => (
                <div key={index} className='flex flex-col items-center w-[60px]'>
                  <div className='h-[60px] w-[60px] flex items-center justify-center'>
                    <Image 
                      src={language.icon}
                      height={50}
                      width={50}
                      alt={language.name.toLowerCase()}
                      className='object-contain'
                    />
                  </div>
                  <p className='text-[#7f7f83] text-xl text-center'>{language.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Skills
