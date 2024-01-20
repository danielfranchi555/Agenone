'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { fadeTestimonies } from '../utils/transitions'
const FadeTestmonies = ({ children,className,index }) => {

    const ref = useRef(null)
    const isinView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isinView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }

    }, [isinView])

  return (
       <motion.div 
                ref={ref}
                variants={fadeTestimonies(index)} // Cambiado el nombre de la función
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                className={className}
            >
                {children}
            </motion.div>
  )
}

export default FadeTestmonies
