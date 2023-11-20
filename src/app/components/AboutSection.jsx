"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


{/*información que mostrarermos en el apartado Sobre Mi */}

const TAB_DATA = [
    {
        title: "Habilidades",
        id: "habilidades",
        content: (
            <ul>
                <li>TailwindCSS 3</li>
                <li>Bootstrap 5</li>
                <li>Laravel 9</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Solidity</li>
            </ul>
        )
    },
    {
        title: "Conocimientos",
        id: "conocimientos",
        content: (
        <ul>
            <li>CFGS DESARROLLO DE APLICACIONES WEB</li>
            <li>ILERNA</li>
            <li>2021 - 2023</li>
            <br />
            <li>CFGM ACTIVIDADES COMERCIALES</li>
            <li>Salesians Badalona</li>
            <li>2016 - 2018</li>
        </ul>
        )
    },
    {
        title: "Experiencia",
        id: "experiencia",
        content: (
            <ul>
                <li>PRÁCTICAS DESARROLLO WEB</li>
                <li>Qualitas Alimentaria</li>
                <li>2023</li>
                <br />
                <li>ATENCIÓN AL CLIENTE</li>
                <li>HBO Max</li>
                <li>2019 - 2022</li>
                <br />
                <li>VENDEDOR</li>
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
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image
                src={"/images/logo.png"}
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400'>
                        Sobre Mi
                    </span>
                </h2>
                <p className='text-base lg:text-lg '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi necessitatibus 
                    officia pariatur aliquid sunt provident error exercitationem harum quas ea ab eligendi, 
                    cupiditate magnam repudiandae assumenda tempore porro asperiores voluptatem!
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