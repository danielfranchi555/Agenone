import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { data } from './data'
import MotionTransition from '../motionTransition/MotionTransition'
import Fade from '../motionTransition/Fade'



const Hero = () => {
    return (
        <div className=''>

            <div className='w-[90%] mx-auto  flex flex-col justify-center items-center gap-5 py-5 '>
                <Fade>
                    <div className='w-[90%] mx-auto  flex flex-col justify-center items-center gap-5 py-5'>
                        <span className='span-hero text-white text-[10px] px-4 py-3 rounded-full'>AGENCIA DIGITAL CREATIVA NÚMERO UNO </span>
                        <div className='flex flex-col items-center justify-center  gap-2 '>
                            <h1 className='text-4xl  lg:text-6xl font-bold text-[#ffff] text-center flex flex-col'> <span className='h1'>Elección inteligente </span> para el crecimiento de tu negocio </h1>
                            <p className='text-[#B6B8BC] text-[14px] text-center lg:text-1xl lg:max-w-[700px]'>Somos un equipo de diseñadores, desarrolladores y especialistas en marketing con experiencia, apasionados por ofrecer soluciones digitales excepcionales.</p>
                        </div>
                        <Link href='' className='button px-5 py-3 rounded-full block max-w-max text-white text-[15px]'>Contact Us</Link>
                    </div>
                </Fade>



                {/* SECTION MOBILE */}
                <div className='card max-w-[300px] mx-auto flex flex-col gap-5 py-5 rounded-xl text-white sm:hidden'>
                    <span className='text-center px-5 font-semibold text-[18px] '>Beneficios de mejorar tu negocio </span>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full  flex flex-col  gap-5"
                    >
                        <CarouselContent>
                            {data.map((item, index) => (
                                <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3  flex flex-col items-center justify-center">
                                    <div className="p-1  flex flex-col items-center justify-center gap-5">
                                        <Image className="text-3xl font-semibold w-[70px]" src={item.logo} width='auto' height='auto' />
                                        <span className='text-[24px] font-normal'>{item.title}</span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className='flex justify-center items-center gap-5'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>

                    </Carousel>
                </div>
                {/* SECTION MOBILE */}
                <MotionTransition className='hidden sm:flex sm:flex-col card mb-[50px] text-white rounded-xl  items-center py-5 px-5  gap-5 lg:w-[75%] lg:mx-auto lg:py-2 lg:justify-between lg:px-0 w-auto'>
                    <span className='text-center px-5 font-semibold text-[18px] lg:text-2xl  '>Beneficios de mejorar tu negocio</span>
                    <div className=' hidden sm:flex sm:justify-center  gap-5   lg:w-auto lg:gap-20   '>
                        {data.map((item, index) => (
                            <div key={index} className='flex flex-col items-center gap-2 justify-center w-[140px] lg:w-[150px]   '>
                                <Image src={item.logo} width='auto' height='auto' className='w-[60px] lg:w-[90px]' />
                                <span className='text-[11px]  text-center flex justify-center lg:text-[14px]'>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </MotionTransition>








            </div>
        </div>
    )
}

export default Hero
