import Image from 'next/image'
import React from 'react'

function HomeIntro() {
  return (
    <>
      <div className='flex flex-col items-center justify-center my-2 slg:flex-row slg:gap-20 xmd:my-8 lg:my-11'>
<div className='h-40 w-40 overflow-hidden relative border-b-2'>
        <Image src="/logo.png" alt="TechieBanda Logo Large"fill sizes="(max-width: 1600px) 160px"/>
</div>
<div className=' font-serif dark:text-white text-center my-3'>
    <h1 className='font-bold text-2xl xmd:mb-2'>
        Welcome to <span className='text-indigo-500'>&lt;TechieBanda/&gt;</span>
    </h1>
    <span>A Place for Techie Peoples</span>
</div>
      </div>
    </>
  )
}

export default HomeIntro
