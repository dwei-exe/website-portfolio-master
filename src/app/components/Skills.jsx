"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
    <div className='container'>
    <div className='flex overflow-hidden [mask-image:linear-gradient(to_right, bg-transparent, black, bg-transparent)]'>
      <motion.div className='flex sm:gap-8 gap-14 pr-14 flex-none' animate={{translateX:"-50%"}} transition ={{duration:20, repeat: Infinity, repeatType:'loop', ease:"linear"}}>
        <div><Image src="/assets/skills/css.png" height={60} width = {60} alt="css"/><p className='text-[#7f7f83] text-xl text-center'>CSS</p></div>
        <div><Image src="/assets/skills/figma.png" height={60} width = {60} alt="figma"/><p className='text-[#7f7f83] text-xl text-center'>Figma</p></div>
        <div><Image src="/assets/skills/html.png" height={60} width = {60} alt="html"/><p className='text-[#7f7f83] text-xl text-center'>HTML</p></div>
        <div><Image src="/assets/skills/mongodb.png" height={60} width = {60} alt="mongodb"/><p className='text-[#7f7f83] text-xl text-center'>MongoDB</p></div>
        <div><Image src="/assets/skills/node.png" height={60} width = {60} alt="node"/><p className='text-[#7f7f83] text-xl text-center'>Node.js</p></div>

        {/* Second set of logos for aniumation */}
        <div><Image src="/assets/skills/css.png" height={60} width = {60} alt="css"/><p className='text-[#7f7f83] text-xl text-center'>CSS</p></div>
        <div><Image src="/assets/skills/figma.png" height={60} width = {60} alt="figma"/><p className='text-[#7f7f83] text-xl text-center'>Figma</p></div>
        <div><Image src="/assets/skills/html.png" height={60} width = {60} alt="html"/><p className='text-[#7f7f83] text-xl text-center'>HTML</p></div>
        <div><Image src="/assets/skills/mongodb.png" height={60} width = {60} alt="mongodb"/><p className='text-[#7f7f83] text-xl text-center'>MongoDB</p></div>
        <div><Image src="/assets/skills/node.png" height={60} width = {60} alt="node"/><p className='text-[#7f7f83] text-xl text-center'>Node.js</p></div>
      </motion.div>
    </div>
    </div>
    </div>
  )
}

export default Skills
