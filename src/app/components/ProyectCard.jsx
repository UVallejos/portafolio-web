import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

{/* Card Template */}
const ProyectCard = ({ imgURL, title, description, gitUrl, previewUrl }) => {
  return (
    <div className=' shadow-gray-700 shadow-lg'>
        {/* Imagen cover Fondo */}
        <div className='bg-auto h-52 md:h-72 rounded-t-xl relative group '
             style={{
              background: `url(${imgURL})`,
              backgroundSize: 'cover',
            }}>
        <div className='
              items-center
              justify-center
              overlay absolute 
              top-0 left-0
              w-full h-full 
              bg-[#181818] 
              bg-opacity-0 hidden 
              group-hover:flex group-hover:bg-opacity-80 transition-all duration-500
              '>
          {/* Link Code Github */}
          <Link href={gitUrl} className='
            h-14 w-14
            mr-2
            border-2 
            relative 
            rounded-full 
            border-[#ADB7BE] 
            hover:border-white group/link'
            target='_blank'>

              <CodeBracketIcon className='h-10 w-10 
              text-[#ADB7BE] 
              absolute 
              top-1/2 left-1/2 
              transform -translate-x-1/2 -translate-y-1/2
              cursor-pointer group-hover/link:text-white'
              >
              </CodeBracketIcon>

          </Link>
          {/* Link ViewDemo */}
          <Link href={previewUrl} className='
            h-14 w-14
            border-2 
            relative 
            rounded-full 
            border-[#ADB7BE] 
            hover:border-white group/link'
            target='_blank'>
              <EyeIcon className='h-10 w-10 
              text-[#ADB7BE] 
              absolute 
              top-1/2 left-1/2 
              transform -translate-x-1/2 -translate-y-1/2
              cursor-pointer group-hover/link:text-white'>
                
              </EyeIcon>
          </Link>


        </div>
        </div>
        {/* Contenido Texto */}
        <div className='text-white rounded-b-xl bg-[#181818] py-6- px-4'>
            <h3 className='font-2xl font-bold pt-2 font-Poppins'>{title}</h3>
            <p className='text-[#ADB7BE] py-2 font-Poppins'>{description}</p>
        </div>
    </div>
  )
}

export default ProyectCard