import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-[#33353F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Image src="/assets/logo.png" alt="DW logo" width={48} height={8}/>
          </div>
          
          <div className="flex flex-row items-center gap-4">
            <a href="mailto:daniel.wei2006@hotmail.com" target="_blank" rel="noopener noreferrer">
              <EnvelopeIcon className="h-8 w-8 text-gray-700 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-wei1" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" className='fill-black-100' height={30} width={25} />
            </a>
            <a href="https://github.com/dwei-exe" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/contact/githubIcon.png" alt="Github Icon" className='fill-black-100' height={30} width={25} />
            </a>
          </div>

          <p className="text-slate-600 text-center sm:text-right">
            Copyright © 2025 Daniel Wei.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;