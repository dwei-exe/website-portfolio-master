"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

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
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
            >
        <div className='justify-items-center'><Image src="/assets/skills/css.png" height={60} width = {60} alt="css" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>CSS</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/figma.png" height={60} width = {60} alt="figma" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Figma</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/html.png" height={60} width = {60} alt="html" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>HTML</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/mongodb.png" height={60} width = {60} alt="mongodb" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>MongoDB</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/node.png" height={60} width = {60} alt="node" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Node.js</p></div>

        {/* Second set of logos for aniumation */}
        <div className='justify-items-center'><Image src="/assets/skills/css.png" height={60} width = {60} alt="css" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>CSS</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/figma.png" height={60} width = {60} alt="figma" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Figma</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/html.png" height={60} width = {60} alt="html" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>HTML</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/mongodb.png" height={60} width = {60} alt="mongodb" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>MongoDB</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/node.png" height={60} width = {60} alt="node" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Node.js</p></div>
      </motion.div>
          </div>
        </div>
        <h3 className="text-center text-2xl font-semibold text-white mb-8">
          Frameworks
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
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
            >
        <div className='justify-items-center'><Image src="/assets/skills/css.png" height={60} width = {60} alt="css" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>CSS</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/figma.png" height={60} width = {60} alt="figma" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Figma</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/html.png" height={60} width = {60} alt="html" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>HTML</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/mongodb.png" height={60} width = {60} alt="mongodb" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>MongoDB</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/node.png" height={60} width = {60} alt="node" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Node.js</p></div>

        {/* Second set of logos for aniumation */}
        <div className='justify-items-center'><Image src="/assets/skills/css.png" height={60} width = {60} alt="css" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>CSS</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/figma.png" height={60} width = {60} alt="figma" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Figma</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/html.png" height={60} width = {60} alt="html" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>HTML</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/mongodb.png" height={60} width = {60} alt="mongodb" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>MongoDB</p></div>
        <div className='justify-items-center'><Image src="/assets/skills/node.png" height={60} width = {60} alt="node" className='justify-items-center'/><p className='text-[#7f7f83] text-xl text-center'>Node.js</p></div>
      </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills
