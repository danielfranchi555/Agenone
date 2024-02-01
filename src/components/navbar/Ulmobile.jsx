import Link from 'next/link'
import React from 'react'

const Ulmobile = () => {
  return (
    <ul className='text-white px-5 py-5 flex flex-col gap-5 md:hidden  '>
      <Link href='#'>Inicio</Link>
      <Link href='#servicios'>Servicios</Link>
      <Link href='#proyectos'>Proyectos</Link>
      <Link href='#acercade'>Acerca de</Link>
    </ul>
  )
}

export default Ulmobile
