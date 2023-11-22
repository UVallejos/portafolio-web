"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => {
      return import("react-animated-numbers");
    },
    { ssr: false }
  );

  
const skilList = [
    {
      metric: "Años",
      value: "27",

    },
    
    {
      metric: "Bootcamps",
      value: "2",
    },
    {
      metric: "Años de Experiencia Laboral",
      value: "8",
    },
  ]

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <div className='bg-[#121212] sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
            {skilList.map((skill, index)=>{
                return(
                    <div key={index} className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'>
                        <h2 className='text-white text-4xl font-bold flex flex-row'>
                            {skill.prefix}
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(skill.value)}
                            locale="en-US"
                            className="text-white text-4xl font-bold"
                            configs={(_, index) => {
                                return {
                                mass: 1,
                                friction: 100,
                                tensions: 140 * (index + 1),
                                };
                            }}
                            />
                            {skill.postfix}
                        </h2>
                        <p className='text-[#ADB7BE] text-base'>{skill.metric}</p>

                    </div>
                );
            })}
        </div>
        
    </div>
    );
}

export default AchievementsSection