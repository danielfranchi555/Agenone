import Image from 'next/image'
import logo from '../../public/logo.svg'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import glow from '../../public/Glow.png'
import Services from '@/components/services/Services'
import Proyects from '@/components/proyects/Proyects'
import Testimonial from '@/components/testmonials/Testimonial'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div className='w-full'>

      <div className='bg-[#0C111F] relative'>
        <header className='  '>
          <Navbar />
          <Hero />
        </header>
      </div>
      <main>
        <Services />
        <Proyects />
        <Testimonial />
        <Footer />
      </main>
    </div>
  )
}
