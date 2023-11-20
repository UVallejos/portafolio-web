"use client";
import React, { useState } from 'react'
import ProyectCard from './ProyectCard'
import ProjectTag from './ProjectTag'

{/**Información sobre mis proyectos */}

const projectsArray = [
    {
        id: 1,
        title: "React Portafolio Website",
        description: "Project 1 Descripcion",
        image: "/images/Hero.jpeg",
        tag: ["All", "Web2"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Angular E-commerce App",
        description: "Project 2 Descripcion",
        image: "/images/Hero.jpeg",
        tag: ["All", "Web3"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Mobile Expense Tracker App",
        description: "Project 3 Descripcion",
        image: "/images/Hero.jpeg",
        tag: ["All", "Web3"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Node.js Blogging Platform",
        description: "Project 4 Descripcion",
        image: "/images/Hero.jpeg",
        tag: ["All", "Web2"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Python Data Analysis Tool",
        description: "Project 5 Descripcion",
        image: "/images/Hero.jpeg",
        tag: ["All", "Web2"],
        gitUrl: "/", 
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Vue.js Dashboard",
        description: "Project 6 Descripcion",
        image: "/images/Hero.jpeg",
        tag: ["All", "Web2",],
        gitUrl: "/", 
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterdProjects = projectsArray.filter((project)=>
        project.tag.includes(tag)
    );


  return (
    <>
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
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filterdProjects.map((project)=> 
                <ProyectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgURL={project.image} 
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
                )}
        </div>
    </>
  )
}

export default ProjectsSection