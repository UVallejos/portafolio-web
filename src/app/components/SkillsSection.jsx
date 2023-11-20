"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => {
        return import ("react-animated-numbers");
    },
    {ssr: false}
);
const skilList = [
    {
        metric: "Proyects",
        value: "100",
        postfix: "+"
    },
    {
        metric: "Users",
        value: "10",
        postfix: "+",
    },
    {
        metric: "Awards",
        value: "10",

    },
    {
        metric: "Years",
        value: "8",

    },
]

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353f] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
            {skilList.map((skill, index)=>{
                return(
                    <div key={index} className='flex flex-col items-center justify-center mx-4'>
                        <h2 className='text-white text-4xl font-bold'>{skill.value}</h2>
                        <p className='text-[#ADB7BE] text-base'>{skill.metric}</p>
                        <p>{skill.postfix}</p>
                    </div>
                );
            })}
        </div>
        
    </div>
    );
}

export default AchievementsSection