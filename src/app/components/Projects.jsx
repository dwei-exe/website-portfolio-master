"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData =[
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: '/assets/projects/1.png',
        tech: ["/assets/skills/1.png","/assets/skills/1.png"],
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "Project 2 description",
        image: '/assets/projects/2.png',
        tech: ["/assets/skills/css.png","/assets/skills/HTML.png","/assets/skills/node.png"],
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "React Portfolio Website",
        description: "Project 3 description",
        image: '/assets/projects/3.png',
        tech: ["/assets/skills/1.png","/assets/skills/1.png"],
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
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
  <section className='w-full pb-15 bg-[#080808]' id="projects">
    <div className="max-w-7xl mx-auto px-8 sm:px-12 sm:py-6 md:px-12 lg:px-8">
      <h2 className="pt-4 md:pt-0 xl:pt-0 text-center text-4xl font-bold text-white xl:mt-4 md:mt-4 mt-0">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 px">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
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
