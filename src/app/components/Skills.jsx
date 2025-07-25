import React from 'react'
import Image from "next/image";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
    <div className='container'>
    <div className='flex overflow-hidden [mask-image:linear-gradient(to_right, bg-transparent, black, bg-transparent)]'>
      <motion.div className='flex gap-14 pr-14 flex-none' animate={{translateX:"-50%"}} transition ={{duration:20, repeat:Loop, ease:"linear"}}>
        <Image src="/assets/skills/css.png" alt="css"/>
        <Image src="/assets/skills/figma.png" alt="figma"/>
        <Image src="/assets/skills/html.png" alt="html"/>
        <Image src="/assets/skills/mongodb.png" alt="mongodb"/>
        <Image src="/assets/skills/node.png" alt="node"/>

        {/* Second set of logos for aniumation */}
        <Image src="/assets/skills/css.png" alt="css"/>
        <Image src="/assets/skills/figma.png" alt="figma"/>
        <Image src="/assets/skills/html.png" alt="html"/>
        <Image src="/assets/skills/mongodb.png" alt="mongodb"/>
        <Image src="/assets/skills/node.png" alt="node"/>
      </motion.div>
    </div>
    </div>
    </div>
  )
}

export default Skills
