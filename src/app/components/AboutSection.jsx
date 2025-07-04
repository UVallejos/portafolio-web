"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import Image from 'next/image';


{/*iInformación que mostrarermos en el apartado Sobre Mi */}
const TAB_DATA = [
    {
        title: "Habilidades",
        id: "habilidades",
        content: (
            <div className="grid grid-cols-3 gap-3">
                <div>
                    <ul className='list-disc font-mono font-Poppins'>
                        <li>HTML 5</li>
                        <li>CSS3</li>
                        <li>Boostrap 5</li>
                        <li>jQuey</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-disc font-mono font-Poppins'>
                        <li>PHP</li>
                        <li>Laravel 9</li>
                        <li>NodeJS</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-disc font-mono font-Poppins'>
                        <li>Wordpress</li>
                        <li>GAM</li>
                        <li>Google Api</li>
                        <li>Google App Script</li>
                    </ul>
                </div>
            </div>
            
        )
    },
    {
        title: "Conocimientos",
        id: "conocimientos",
        content: (
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <ul className='font-Poppins'>
                        <li>CFGS Desarrollo De Aplicaciones Web</li>
                        <li>ILERNA</li>
                        <li>2021 - 2023</li>
                    </ul>
                </div>
                <div>
                    <ul className='font-Poppins'>
                        <li>Programación moderna con Python</li>
                        <li>KeepCoding</li>
                        <li>2021</li>
                    </ul>
                </div> 
                <div>
                    <ul className='font-Poppins'>
                        <li>CFGM Actividades Comerciales</li>
                        <li>Salesians Badalona</li>
                        <li>2016 - 2018</li>
                    </ul>
                </div>
            </div>
        
        )
    },
    {
        title: "Experiencia",
        id: "experiencia",
        content: (
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <ul className='font-Poppins'>
                        <li>FULL STACK DEVELOPER & TIC SUPPORT</li>
                        <li>Setdart</li>
                        <li>2024 - 2025</li>
                    </ul>
                </div>
                <div>
                    <ul className='font-Poppins'>
                        <li>Pr&aacute;cticas Desarrollo Web</li>
                        <li>Qualitas Alimentaria</li>
                        <li>2023</li>
                    </ul>
                </div>
                <div>
                    <ul className='font-Poppins'>
                        <li>Atenci&oacute;n al Cliente</li>
                        <li>HBO Max</li>
                        <li>2019 - 2022</li>
                    </ul>
                </div>
            </div>
            
        ),
    },
];


const AboutSection = () => {
    {/*Estado para almacenar la pestaña activa y una función para actualizarla */}
    const [tab, setTab] = useState("habilidades");

    {/*Hook de transición para manejar cambios de estado de manera suave */}
    const [isPending, startTransition] = useTransition();

    {/* Función para manejar cambios de pestaña */}
    const handleTabChange = (id) => {
        startTransition(()=> {
            setTab(id);
        });
    }
  return (
    <section id='about' className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-6 px-2 xl:gap-16 sm:py-16 bg-[#121212]'>
            <Image
                src={"/images/florFondo.webp"}
                width={500}
                height={400}
                alt="Fondo Flor"
            ></Image>
            <div  className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                <h2 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-Poppins'>
                    <span className='font-sans text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-400'>
                        Sobre Mi
                    </span>
                </h2>
                <p className='text-base lg:text-lg font-RobotoCondensed'>
                    Soy Ulises Vallejos Salgado, Programador Web Junior con sede en Barcelona. Cuento con más de un año y medio de experiencia en el desarrollo y mantenimiento de aplicaciones web, utilizando tecnologías como PHP, jQuery, HTML5, CSS3, Bootstrap y MariaDB.
                </p>
                <br></br>
                <p className='text-base lg:text-lg font-RobotoCondensed'>
                    Durante mi trayectoria he trabajado en la implementación de nuevas funcionalidades, optimización de código existente y documentación de herramientas internas. Destaco por haber liderado la migración del correo corporativo a Google Workspace, gestionando reglas de enrutamiento, integraciones con Google Apps Script, hojas de cálculo y la herramienta GAM. También he administrado sitios WordPress, desde instalaciones nuevas hasta la personalización de plugins y temas.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    
                    <TabButton selectTab={() => handleTabChange("habilidades")} active={tab === "habilidades"}>
                        {" "}
                        Habilidades {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("conocimientos")} active={tab === "conocimientos"}>
                        {" "}
                        Conocimientos{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experiencia")} active={tab === "experiencia"}>
                        {" "}
                        Experiencia {" "}
                    </TabButton>
                    
                </div>
                <div  className='mt-8 ml-4'>
                    {TAB_DATA.find((t)=> t.id === tab).content}
                </div>
            </div>
        </div>

    </section>
)
}

export default AboutSection
