import React from 'react'
import Image from 'next/image'
import { data } from './data'
import FadeTestmonies from '../motionTransition/FadeTestmonies'
const Testimonial = () => {
    return (
        <div className='w-[90%] mx-auto text-black mt-[60px] flex flex-col gap-5 md:grid md:grid-cols-2 mb-[60px]'>
            {data.map((item, index) => (
                <FadeTestmonies  key={index} index={index}>
                    <div className='bg-[#F8F8F8] px-5 py-3 flex flex-col gap-4 rounded-xl border'>
                        <p className='text-[#6D7079] h-[190px] md:h-[100px]'>{item.description}</p>
                        <div className='flex gap-2'>
                            <Image src={item.image} width='auto' height='auto' className='w-[50px]' />
                            <div>
                                <span className='text-1xl font-bold'>{item.name}</span>
                                <p className='text-[13px] text-[#6D7079]'>{item.job}</p>
                            </div>
                        </div>
                    </div>
                </FadeTestmonies>

            ))}

        </div>
    )
}

export default Testimonial
