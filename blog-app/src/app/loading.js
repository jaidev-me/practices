import React from 'react'
import LoadingCircle from './components/LoadingCircle'

function loading() {
  return (
   <div className='w-full h-[100vh] flex justify-center items-center'>
    <LoadingCircle/>
   </div>
  )
}

export default loading
