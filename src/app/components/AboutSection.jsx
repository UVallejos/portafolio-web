"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import Image from 'next/image';


{/*información que mostrarermos en el apartado Sobre Mi */}

const TAB_DATA = [
    {
        title: "Habilidades",
        id: "habilidades",
        content: (
            <ul className='list-disc font-mono font-Poppins'>
                <li>TailwindCSS 3</li>
                <li>Laravel 9</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>Next.JS</li>
                <li>Solidity</li>
            </ul>
        )
    },
    {
        title: "Conocimientos",
        id: "conocimientos",
        content: (
        <ul className='font-Poppins'>
            <li>Bootcamp De Cero a Desarrollador Blockchain</li>
            <li>BlockChainBites</li>
            <li>2023</li>
            <br />
            <li>CFGS Desarrollo De Aplicaciones Web</li>
            <li>ILERNA</li>
            <li>2021 - 2023</li>
            <br />
            <li>Programación moderna con Python</li>
            <li>KeepCoding</li>
            <li>2021</li>
            <br />
            <li>CFGM Actividades Comerciales</li>
            <li>Salesians Badalona</li>
            <li>2016 - 2018</li>
        </ul>
        )
    },
    {
        title: "Experiencia",
        id: "experiencia",
        content: (
            <ul className='font-Poppins'>
                <li>Pr&aacute;cticas Desarrollo Web</li>
                <li>Qualitas Alimentaria</li>
                <li>2023</li>
                <br />
                <li>Atenci&oacute;n al Cliente</li>
                <li>HBO Max</li>
                <li>2019 - 2022</li>
                <br />
                <li>Vendedor</li>
                <li>Decathlon</li>
                <li>2017 - 2018</li>
            </ul>
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
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-6 px-2 xl:gap-16 sm:py-16 bg-[#121212]'>
            <Image
                src={"/images/florFondo.png"}
                width={500}
                height={400}
                alt="Fondo Flor"
            ></Image>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                <h2 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-Poppins'>
                    <span className='font-sans text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-400'>
                        Sobre Mi
                    </span>
                </h2>
                <p className='text-base lg:text-lg font-RobotoCondensed'>
                    Tengo sólidos conocimientos de programación y desarrollo web, adquiridos tanto de forma autodidacta como de manera reglada. 
                    Poseo conocimientos en FrontEnd y BackEnd.
                    Soy una persona en constante evolución y que siempre le gusta aprender sobre nuevas tecnologias que puedan facilitarnos 
                    la forma de interactuar entre las personas.
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
                <div className='mt-8'>
                    {TAB_DATA.find((t)=> t.id === tab).content}
                </div>
            </div>
        </div>

    </section>
)
}

export default AboutSection