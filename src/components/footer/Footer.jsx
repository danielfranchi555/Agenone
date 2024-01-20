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
                    <p className='text-[#B6B8BC] md:max-w-[300px] md:text-1xl'>We're a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>
                    <p className='text-[#B6B8BC]'>hello@agenone.com</p>
                </div>
                <div className='flex flex-col gap-10 md:flex md:flex-row  md:justify-between '>
                        <ul>
                            <span className='font-bold'>Menu</span>
                            <li className='text-[#B6B8BC]'>home</li>
                            <li className='text-[#B6B8BC]'>Services</li>
                            <li className='text-[#B6B8BC]'>About Us</li>
                            <li className='text-[#B6B8BC]'>Project</li>
                            <li className='text-[#B6B8BC]'>Contact</li>
                        </ul>
                        <ul>
                            <span>Support</span>
                            <li className='text-[#B6B8BC]'>FAQ</li>
                            <li className='text-[#B6B8BC]'>home</li>
                            <li className='text-[#B6B8BC]'>Privacy Policy</li>
                            <li className='text-[#B6B8BC]'>Terms of Service</li>
                        </ul>

                    <ul className=' '>
                        <span className='font-bold'>Social Media</span>
                        <li className='text-[#B6B8BC]'>Linkedin</li>
                        <li className='text-[#B6B8BC]'>Twitter</li>
                        <li className='text-[#B6B8BC]'>Instagram</li>
                        <li className='text-[#B6B8BC]'>Dribble</li>
                        <li className='text-[#B6B8BC]'>Behance</li>
                    </ul>
                </div>
            </div>
            <div className=' py-4 w-[90%] mx-auto text-white text-center border-t'>
                    <p className=''>Copyright © 2023 by Agenone. All rights reserved.</p>
                </div>
        </div>


    )
}

export default Footer
