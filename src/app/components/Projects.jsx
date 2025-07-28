"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData =[
    {
        id: 1,
        title: "Deep CNN Arrhythmia Classifier",
        description: "Published a paper on a this deep-CNN model that can classify 4 types of irregular heartbeats using Wavelet Scalogram Transform. Achieved 96.88% overall accuracy. Revealed age-training Bias on existing models with balanced datasets for medical diagnoses overlooked in traditional literature.",
        image: '/assets/projects/2.png',
        tech: ["/assets/skills/Python.png","/assets/skills/MatLab.png","/assets/skills/TensorFlow.png"],
        tag: ["All", "Web"],
        gitUrl: "https://doi.org/10.48448/a2sy-wn69",
        previewUrl: "https://doi.org/10.48448/a2sy-wn69",
    },
    {
        id: 2,
        title: "Canadian Robotics Competition Portal and Infra",
        description: "Full-stack developement and servicing of the official competition platform for the annual Canada-wide Robotics Competition (CRC). Front-end built in React Native with MongoDB backend. Handles peak traffic of thousands of daily requests during competition days for score tracking, match schedules, and team info.",
        image: '/assets/projects/1.png',
        tech: ["/assets/skills/react.png","/assets/skills/mongodb.png","/assets/skills/html.png","/assets/skills/css.png","/assets/skills/Javascript.png","/assets/skills/figma.png"],
        tag: ["All", "Web"],
        gitUrl: "https://robo-crc.ca/",
        previewUrl: "https://robo-crc.ca/",
    },
    {
        id: 3,
        title: "Robotics",
        description: "Programmed robot control functionalities for the Marianopolis Robotics Team at the Canadian Robotics Competition (CRC). Features include Omnidirectional Movement, Flywheel Shooter & Aiming Systems, Proportional-Derivative-Integral Controller with Quadrature Encoders for arm leveling. Won Bronze Robot Construction Award at CRC.",
        image: '/assets/projects/3.png',
        tech: ["/assets/skills/C++.png","/assets/skills/Arduino.png","/assets/skills/OnShape.png"],
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dwei-exe/2025-Robot-Controls",
        previewUrl: "https://cad.onshape.com/documents/a2734e4784fa8068635b3294/w/16b7b7efe2af4ba885564039/e/841d01ddace3edf723e5a0dc?renderMode=0&uiState=6875c6f51bd008323ed1c823",
    },
    {
        id: 4,
        title: "My Personal Website",
        description: "The website you're currently exploring! It's a fully responsive website for both mobile and desktop screens, so you can check out my work anywhere. Build with React, Next.js, HTML/CSS/JS and designed with Figma.",
        image: '/assets/projects/4.png',
        tech: ["/assets/skills/react.png","/assets/skills/Next.js.png","/assets/skills/html.png","/assets/skills/css.png","/assets/skills/Javascript.png","/assets/skills/figma.png",],
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dwei-exe/website-portfolio-master",
        previewUrl: "https://daniel-wei.vercel.app/",
    },
    {
        id: 5,
        title: "Artificial Intestine Mapper",
        description: "Montreal Science Fair Bronze Award-Provincial Science Fair High Distinction. Custom algorithm creates Patient specific artificial intestines from 3D medical scan to a flat 3D printable exoskeleton ready for easy manufacturing. Folds back into 3D to motorize artificial intestine components.",
        image: '/assets/projects/5.png',
        tech: ["/assets/skills/Javascript.png","/assets/skills/OnShape.png"],
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dwei-exe/website-portfolio-master",
        previewUrl: "https://www.marianopolis.edu/2025/03/28/marianopolis-students-earn-top-honours-at-2025-montreal-regional-science-fair/",
    },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
  <section className='w-full pb-15 bg-[#080808] pb-7' id="projects">
    <div className="max-w-7xl mx-auto px-8 sm:px-12 sm:py-6 md:px-12 lg:px-8">
      <h2 className="pt-4 md:pt-0 xl:pt-0 text-center text-4xl font-bold text-white xl:mt-4 md:mt-4 mt-0">
        My Projects
      </h2>
      <h3 className="pt-4 md:pt-0 xl:pt-0 text-center text-xl font-semibold text-[#908a8d] xl:mt-4 md:mt-4 mt-0">
        Hover on each project card to check them out!
      </h3>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 px">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Projects
