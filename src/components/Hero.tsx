import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen   bg-no-repeat bg-[url(/baner_bg.png)] bg-cover'
     style={{backgroundSize:'30%', backgroundPosition: 'left 100px top 160px'}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2  h-[calc(90vh-60px)]' >
        <div className='hidden lg:block'></div>
        <div className='text-[70px] sm:text-[80px]  font-bold leading-tight flex justify-center items-center'
         style={{ fontFamily: ' Serif' }}>
          <div>
            <p data-aos='zoom-in-down'>I&apos;m </p>
            <p  data-aos='zoom-in-down'>Muhammad Haziq</p>
            <p  data-aos='zoom-in-down'>Siddiqui</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
