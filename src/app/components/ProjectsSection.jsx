import React from 'react'
import ProyectCard from './ProyectCard'

const projectsArray = [
    {
        id: 1,
        title: "React Portafolio Website",
        description: "Project 1 Descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Angular E-commerce App",
        description: "Project 2 Descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Mobile Expense Tracker App",
        description: "Project 3 Descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Blockchain"],
    },
    {
        id: 4,
        title: "Node.js Blogging Platform",
        description: "Project 4 Descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Blockchain"],
    },
    {
        id: 5,
        title: "Python Data Analysis Tool",
        description: "Project 5 Descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
    },
    {
        id: 6,
        title: "Vue.js Dashboard",
        description: "Project 6 Descripcion",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
    },
];

const ProjectsSection = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>Proyectos</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsArray.map((project)=> 
                <ProyectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgURL={project.image} 
                    tags={project}
                />
                )}
        </div>
    </>
  )
}

export default ProjectsSection