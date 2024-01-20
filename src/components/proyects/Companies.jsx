import React from 'react'
import Image from 'next/image'
import { data } from './dataCompanies'
import FadeIndex from '../motionTransition/FadeIndex'

const Companies = () => {


  return (
    <div className='  border-t bg-[#0C111F]  w-full'>
      <div className='flex  flex-wrap justify-between items-center  w-[90%] mx-auto md:flex md:flex-row md:justify-between '>
        {data.map((item,index) => (
          <FadeIndex index={index} key={index} >
            <Image src={item.imagen} width='auto' height='auto' className='w-[110px] ' />
          </FadeIndex>
        ))}
      </div>

    </div>
  )
}

export default Companies
