'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '../ui/accordion'
import { data } from './data'
import MotionTransition from '../motionTransition/MotionTransition'
import CountUp from 'react-countup';

const Services = () => {
    return (
        <div id='servicios' className='mt-[60px]' >
            <div  className='w-[90%] mx-auto flex flex-col  gap-8'>
                <h2  className='text-3xl font-bold text-center'>Los servicios que ofrecemos <span className='h1'>Para Ti</span></h2>
                <Accordion type="single" collapsible className="w-full flex flex-col gap-5 ">
                    {data.map((item, index) => (
                        <MotionTransition key={index}>
                            <AccordionItem key={index} value={item.id} className='bg-[#F8F8F8] rounded-xl px-3'>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent>
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        </MotionTransition>
                    ))}
                </Accordion>
            </div>


            <div className='background-services px-4  flex flex-col gap-5 mt-[60px] py-20   '>
                <div id='acercade' className='w-[90%] mx-auto flex flex-col gap-5'>
                    <p className=' text-1xl text-start md:text-3xl'>Nos apasiona ayudar a las empresas a crecer y tener éxito en la era digital. Nos enorgullece nuestro trabajo y nos esforzamos por superar tus expectativas en cada ocasión.</p>
                    <div className='card flex flex-col justify-center items-center py-4  gap-5 text-white rounded-xl md:flex md:flex-row md:justify-around '>
                        <div className='flex flex-col gap-1 items-center '>
                            <div className='flex  items-center'>
                                <CountUp duration={1.5} enableScrollSpy start={0} end={13} className='font-bold text-5xl '></CountUp>
                                 <span className='text-[40px] font-bold'>+</span>
                            </div>
                            <span>Años de Experiencia</span>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                        <div className='flex  items-center'>
                                <CountUp duration={1.5} onPauseResume={0}   enableScrollSpy start={0} end={261} className='font-bold text-5xl '></CountUp>
                                 <span className='text-[40px] font-bold'>+</span>
                            </div>                            <span>Proyectos Completados</span>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                        <div className='flex  items-center'>
                                <CountUp duration={1.5} enableScrollSpy start={0} end={270} className='font-bold text-5xl '></CountUp>
                                 <span className='text-[40px] font-bold'>+</span>
                            </div>                            <span>Clientes Satisfechos </span>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                        <div className='flex  items-center'>
                                <CountUp duration={1.5} enableScrollSpy start={0} end={10} className='font-bold text-5xl '></CountUp>
                                 <span className='text-[40px] font-bold'>+</span>
                            </div>                            <span>Premios Obtenidos</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
