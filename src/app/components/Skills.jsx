"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
    <div className='container'>
    <div className='flex overflow-hidden [mask-image:linear-gradient(to_right, bg-transparent, black, bg-transparent)]'>
      <motion.div className='flex gap-14 pr-14 flex-none' animate={{translateX:"-50%"}} transition ={{duration:20, repeat: Infinity, repeatType:'loop', ease:"linear"}}>
        <div><Image src="/assets/skills/css.png" alt="css"/><p>CSS</p></div>
        <div><Image src="/assets/skills/figma.png" alt="figma"/><p>Figma</p></div>
        <div><Image src="/assets/skills/html.png" alt="html"/><p></p>HTML</div>
        <div><Image src="/assets/skills/mongodb.png" alt="mongodb"/><p>MongoDB</p></div>
        <div><Image src="/assets/skills/node.png" alt="node"/><p>Node.js</p></div>

        {/* Second set of logos for aniumation */}
        <div><Image src="/assets/skills/css.png" alt="css"/><p>CSS</p></div>
        <div><Image src="/assets/skills/figma.png" alt="figma"/><p>Figma</p></div>
        <div><Image src="/assets/skills/html.png" alt="html"/><p></p>HTML</div>
        <div><Image src="/assets/skills/mongodb.png" alt="mongodb"/><p>MongoDB</p></div>
        <div><Image src="/assets/skills/node.png" alt="node"/><p>Node.js</p></div>
      </motion.div>
    </div>
    </div>
    </div>
  )
}

export default Skills
