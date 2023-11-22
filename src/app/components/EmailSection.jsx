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
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
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
            <h5 className='text-xl font-bold text-white my-2'>Contacta conmigo</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md bg-[#121212] rounded-lg'>
                {" "}
                !Hola¡ Puedes contactar conmigo dejandome llenando el siguiente formulario, 
                en el menor tiempo posible te reponder&eacute;. <br /><br /> Tambien puedes contactarme por 
                Linkedin y ver todos mis repositorios en GitHub
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/UVallejos" target='_blannk' className='pt-1'>
                    <Image src={GitHubIcon} alt='GitHub Icon' width={50} height={50}></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/ulises-vallejos/" target='_blank'>
                    <Image src={LinkedinIcon} alt='Linkedin Icon' width={60} height={60}></Image>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col pt-5' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" type="email" className='text-white mb-2 block text-sm font-medium'>
                        Tu Correo
                    </label>
                    <input
                        name='email' 
                        type="email" 
                        id='email' 
                        required 
                        placeholder='tucorreo@gmail.com' 
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
                        placeholder='Dime con quien tendré en gusto de comunicarme' 
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
                        placeholder='Contacta por cualquier duda o consulta'/>

                    </div>
                </div>
                <button type="submit"
                className='bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Enviar Mensaje</button>
            </form>

        </div>
    </section>
  )
}

export default EmailSection