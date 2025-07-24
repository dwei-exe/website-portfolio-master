"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";

const Hero = () => {
  return (
  <section className="w-full" id="home">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-8 xl:py-16 md:py-16">
        <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className ="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-5 place-self-center mb-4 lg:mt-0 mt-6 lg:text-xl lg:mr-15 mr-0">
                <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] md:h-[300px] relative">
                    <Image src="/assets/hero/heroImage.png" className=" absolute transform -translate-x-0.5 -translate-y-0.5 top-0.5 left-0.5" alt="Hero Image" width={400} height={400} />
                </div>
            </div>
            <div className="flex-end col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-black mb-4 lg:text-6xl text-4xl sm:text-5xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">Hello, I'm{" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Daniel Wei',
                            4000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Software Engineer',
                            1000,
                            'a Full Stack Developer',
                            1000,
                            'a Robotics Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />

                </h1>
                <p className ="text-black text-lg lg:text-xl mb-6">My passion is building real-world solutions that affect people's lives. Let's drive the future of our technology together.</p>
                <div>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 hover:bg-white text-white font-bold hover:text-black border-2 bg-gradient-to-br from-blue-500 via bg-purple-500 to bg-pink-600 hover:border-black mt-3">
                        <a href="mailto:daniel.wei2006@hotmail.com" target="_blank" rel="noopener noreferrer">
                            Email me
                        </a>
                    </button>
                    <button className="px-6 py-3 font-bold w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-black hover:text-white hover:border-white text-black border-2 border-black mt-3">
                        <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </button>
                    <button className="px-6 py-3 font-bold w-full sm:w-fit rounded-full bg-transparent hover:bg-black hover:text-white hover:border-white text-black border-2 border-black mt-3">
                        <a href="https://www.linkedin.com/in/daniel-wei1" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </button>
                </div>
            </div>
                            
        </motion.div>
    </div>    
    </section>
  )
}

export default Hero
