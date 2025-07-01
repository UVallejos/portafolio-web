"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section id='home' className='lg:py-10'>
        <div className="grid grid-cols-1 lg:grid-cols-12" >
            {/* Animación que aparece el texto desde el fondo */}
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-Poppins'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-third-200'>
                        ¡Hola!, Soy {" "}
                    </span>
                    <br /> 
                    {/*Animación de Texo Inicial */}
                        <TypeAnimation
                        sequence={[
        
                            'Ulises Vallejos',
                            700, 
                            'Desarrollador Web',
                            700,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                        />

                </h1>
                <p className='text-white text-sans sm:text-lg mb-6 lg:text-xl font-Poppins'>
                    Programador Web con experiencia en desarrollo frontend y backend, busco seguir creciendo,<br></br> aportar valor con cada proyecto y solucionar los problemas de mis clientes.
                </p>
                <div>

                    <Link
                        href="#contact"
                        className="font-Poppins px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
                        bg-gradient-to-br from-primary-500 to-third-500 hover:bg-slate-200 text-white"
                        >
                        Cont&aacute;ctame
                    </Link>
                   {/* Descarga de CV */}
                    <Link
                        target='_blank'
                        download={"UVAS_CV.pdf"}
                        href="\assets\UVAS_CV.pdf"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br 
                        from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                        <span className="font-Poppins block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Descargar CV
                        </span>
                    </Link>
                </div>    
            </motion.div>
            {/* Animación que aparece la foto desde el fondo */}
            <motion.div 
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/Hero.webp"
                    alt='Perfil Image'
                    className='avatar absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                    width={300}
                    height={300}
                    />  
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
