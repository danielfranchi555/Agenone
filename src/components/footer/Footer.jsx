import React from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='bg-[#0C111F]'>
            <div className='w-[90%] mx-auto  text-white px-5 py-5 flex flex-col gap-10 md:grid md:grid-cols-2 md:justify-center md:py-10 md:px-0 '>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-2'>
                        <Image src={logo} />
                        <span className='font-bold text-2xl'>Ageone</span>
                    </div>
                    <p className='text-[#B6B8BC] md:max-w-[300px] md:text-1xl'>Somos un equipo de diseñadores, desarrolladores y especialistas en marketing con experiencia, apasionados por ofrecer soluciones digitales excepcionales.</p>
                    <p className='text-[#B6B8BC]'>hello@agenone.com</p>
                </div>
                <div className='flex flex-col gap-10 md:flex md:flex-row  md:justify-between '>
                        <ul>
                            <li className='text-[#B6B8BC]'>Inicio</li>
                            <li className='text-[#B6B8BC]'>Servicios</li>
                            <li className='text-[#B6B8BC]'>Acerca de</li>
                            <li className='text-[#B6B8BC]'>Projectos</li>
                            <li className='text-[#B6B8BC]'>Contacto</li>
                        </ul>
                        <ul>
                            <span>Support</span>
                            <li className='text-[#B6B8BC]'>FAQ</li>
                            <li className='text-[#B6B8BC]'>Inico</li>
                            <li className='text-[#B6B8BC]'>Privacy Policy</li>
                            <li className='text-[#B6B8BC]'>Terms of Service</li>
                        </ul>

                    <ul className=' '>
                        <span className='font-bold'>Redes Sociales</span>
                        <li className='text-[#B6B8BC]'>Linkedin</li>
                        <li className='text-[#B6B8BC]'>Twitter</li>
                        <li className='text-[#B6B8BC]'>Instagram</li>
                        <li className='text-[#B6B8BC]'>Dribble</li>
                        <li className='text-[#B6B8BC]'>Behance</li>
                    </ul>
                </div>
            </div>
            <div className=' py-4 w-[90%] mx-auto text-white text-center border-t'>
                    <p className=''>Developed - DanielFranchi</p>
                </div>
        </div>


    )
}

export default Footer
