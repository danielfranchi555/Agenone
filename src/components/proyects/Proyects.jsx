'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from './data';
import Companies from './Companies';

const Proyects = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('UX/UI');

    const handleClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    const productsFilter = categoriaSeleccionada
        ? data.filter((item) => item.categoria === categoriaSeleccionada)
        : data.slice(0, 2);

    return (
        <div className='bg-[#0C111F] flex flex-col gap-10 items-center justify-center bg-svg bg-cover'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-4xl text-center mt-10 lg:text-6xl font-bold text-[#ffff]  '>
                    Our Project Have Been <span className='h1'>Done</span>
                </h3>
                <p className='text-[#B6B8BC] text-1xl text-center px-4'>
                    Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive business growth.
                </p>
            </div>

            <div className='bg-[#F3F3F3] flex px-1 py-1 gap-3 rounded-full w-auto'>
                <span
                    onClick={() => handleClick('UX/UI')}
                    className={`cursor-pointer text-[#6D7079] text-[13px] md:text-[15px] py-3 px-4 flex items-center justify-center  ${categoriaSeleccionada === 'UX/UI' ? 'card text-white rounded-full px-1' : ''
                        }`}>
                    UX/UI
                </span>
                <span
                    onClick={() => handleClick('Design')}
                    className={`cursor-pointer text-[#6D7079] text-[13px] md:text-[15px] py-3 px-4 flex items-center justify-center  ${categoriaSeleccionada === 'Design' ? 'card text-white rounded-full px-1' : ''
                        }`}>
                    Design
                </span>
                <span
                    onClick={() => handleClick('SMM')}
                    className={`cursor-pointer text-[#6D7079] text-[13px] md:text-[15px] py-3 px-4 flex items-center justify-center  ${categoriaSeleccionada === 'SMM' ? 'card text-white rounded-full px-1' : ''
                        }`}>
                    SMM
                </span>
                <span
                    onClick={() => handleClick('Dev')}
                    className={`cursor-pointer text-[#6D7079] text-[13px] md:text-[15px] py-3 px-4 flex items-center justify-center  ${categoriaSeleccionada === 'Dev' ? 'card text-white rounded-full px-1' : ''
                        }`}>
                    Dev
                </span>
            </div>

            <AnimatePresence>

                <div className='flex flex-col justify-center items-center gap-10 w-[90%] mx-auto sm md:flex md:flex-row  md:w-[90%] md:mx-auto   '>
                    {productsFilter.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 3 }}
                            transition={{ duration: 1.0 }}
                            className='bg-[#181D2A] flex flex-col  gap-2 px-4 py-3  md:w-[400px]  '>
                            <Image src={item.image} widh='auto' height='auto' className='rounded-xl w-full h-[300px] object-cover' />
                            <p className='text-start text-[#FFFF] font-bold text-1xl'>{item.title}</p>
                            <p className='text-[#B6B8BC] text-1xl'>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>

            <Companies />
        </div>
    );
};

export default Proyects;
