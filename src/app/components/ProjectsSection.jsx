"use client";
import React, { useState, useRef } from 'react'
import ProyectCard from './ProyectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion";

{/**Información sobre mis proyectos */}

const projectsArray = [
    {
        id: 1,
        title: "Portafolio React | Next.JS",
        description: "Portafolio Web animado con React en el FrontEnd y lógica de BackEnd con Next.Js",
        image: "/images/projects/Portafolio_React_NextJS.png",
        tag: ["All", "Web2"],
        gitUrl: "https://github.com/UVallejos/portafolio-web", 
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Fast4YouBody Laravel | PHP | SQlite",
        description: "Proyecto final de Grado Superior, aplicación web para ayudar a la práctica del ayuno intermitente",
        image: "/images/projects/fast4YouBoddy.png",
        tag: ["All", "Web2"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Portafolio Laravel",
        description: "Portafolio simple realizado con Tailwind CSS , PHP y Laravel",
        image: "/images/projects/Portafolio_Laravel.png",
        tag: ["All", "Web2"],
        gitUrl: "https://github.com/UVallejos/portafolio", 
        previewUrl: "https://github.com/UVallejos/portafolio#readme",
    },
    {
        id: 4,
        title: "Licuadora Javascript",
        description: "Licuadora Animada en Javascript",
        image: "/images/projects/licuadora.png",
        tag: ["All", "Web2"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterdProjects = projectsArray.filter((project)=>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };


  return (
    <section ref={ref}>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>Proyectos</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
            onClick={handleTagChange} 
            name="All"
            isSelected={tag ==="All"} />

            <ProjectTag 
            onClick={handleTagChange} 
            name="Web2"
            isSelected={tag ==="Web2"} />

            <ProjectTag 
            onClick={handleTagChange} 
            name="Web3"
            isSelected={tag ==="Web3"} />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filterdProjects.map((project, index)=> (
                <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProyectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgURL={project.image} 
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection