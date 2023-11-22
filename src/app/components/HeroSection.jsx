"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";



const HeroSection = () => {


    
  return (
    <section className='lg:py-10' id='about'>
        <div className="grid grid-cols-1 lg:grid-cols-12" >
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-third-200'>
                        ¡Hola!, Soy {" "}
                    </span>
                    <br /> 
                    {/*Animación de Texo Inicial */}
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Ulises Vallejos',
                            700, // wait 1s before replacing "Mice" with "Hamsters"
                            'Desarrollador Web',
                            700,
                            'Desarrollador Blockchain',
                            700,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                        />

                </h1>
                <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                    Soy un Desarrollador Junior apasionado por miprimera experiencia laboral en este sector.
                </p>
                <div>
                    <Link
                        href="#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-third-500 hover:bg-slate-200 text-white"
                        >
                        Cont&aacute;ctame
                    </Link>
                   
                    <Link
                        target='_blank'
                        download={"CV_UV.pdf"}
                        href="/assets/CV_UV.pdf"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Descargar CV
                        </span>
                    </Link>
                </div>    
            </motion.div>
            <motion.div 
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/Hero.jpeg"
                    alt='Perfil Image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
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
