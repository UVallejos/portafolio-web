"use client";
import {React, useState} from 'react'
import GitHubIcon from "../../../public/github-mark-white.svg"
import LinkedinIcon from "../../../public/icons8-linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'



const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      const options = {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
  
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };
      

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 relative'>
        {/**Gradiante Blur */}
        <div className='
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        from-primary-900 to-transparent
        rounded-full 
        h-80 w-80 z-0 blur-lg absolute 
        top-3/4 -left-4 
        transform -translate-x-1/2 -traslate-1/2'>

        </div>
        <div className='z-10 '>
            <h2 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-Poppins'>
                  <span className='font-sans text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-400'>
                  Contacto
                  </span>
              </h2>
            <p className='text-[#ADB7BE] mb-4 max-w-md bg-[#121212] rounded-lg font-Poppins'>
                {" "}
                !Hola¡ Puedes contactar conmigo por el siguiente formulario, 
                en el menor tiempo posible te responder&eacute;. <br /><br /> Tambien puedes contactarme por 
                Linkedin y ver todos mis repositorios en GitHub
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/UVallejos/UVallejos" target='_blannk' className='pt-1'>
                    <Image src={GitHubIcon} alt='GitHub Icon' width={50} height={50}></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/ulises-vallejos/" target='_blank'>
                    <Image src={LinkedinIcon} alt='Linkedin Icon' width={60} height={60}></Image>
                </Link>
            </div>
        </div>
        <div>
        {emailSubmitted ? (
          <div class="flex items-center justify-center bg-[#121212] py-5">
          <div class="rounded-lg bg-[#121212]">
            <div class="flex justify-center">
              <div class="rounded-full bg-green-200 p-6">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="items-center justify-center my-4 text-center text-3xl font-semibold text-white">Contacto Recibido!!!</h3>
           <div className='flex items-center justify-center'>
              <p class="w-full text-center font-normal text-[#ADB7BE]">En breves minutos tendrás una confirmación de recepción automatica. Hasta pronto.</p>
           </div>
            <Link 
            href="/#contact" 
            onClick={() => window.location.reload()} 
            className='mx-auto mt-10 block rounded-xl border-4 border-transparent bg-third-400 px-6 py-3 text-center text-base font-medium text-white outline-8 hover:outline hover:duration-300'>
                Volver a Contactar
            </Link>
          </div>
        </div>
        ) : (
            <form className='flex flex-col pt-1' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" type="email" className='text-white mb-2 block text-sm font-medium'>
                        Tu Correo
                    </label>
                    <input
                        name='email' 
                        type="email" 
                        id='email' 
                        required 
                        placeholder='CorreoDeContacto@dominio.com' 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>    
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject" type="email" className='text-white mb-2 block text-sm font-medium'>
                        Asunto
                    </label>
                    <input 
                        name='subject'
                        type="text" 
                        id='subject' 
                        required 
                        placeholder='Dime el Asunto de Contacto' 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                </div>
                <div>
                    <div className='mb-6'>
                        <label 
                        htmlFor="message"
                        className='text-white block text-sm mb-2 font-medium'>
                            Mensaje
                        </label>
                        <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Escribe la duda o consulta que puedas tener'/>

                    </div>
                </div>
                <button type="submit"
                className='bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Enviar Mensaje</button>
            </form>
            )}
        </div>
    </section>
  )
}

export default EmailSection