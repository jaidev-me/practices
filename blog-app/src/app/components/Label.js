import React from 'react'

function Label({gapTop, gapBottom, text}) {
  return (
    <div className={`px-2 pb-${gapBottom} pt-${gapTop} w-full`}>
    <div className='w-full border-t-2 dark:border-white border-indigo-900'>
      <div className='dark:bg-white bg-indigo-900 font-bold font-serif inline-block rounded-br-full py-1 pr-7 pl-2 rounded-bl-md dark:text-black text-white'>{text}</div>
    </div>
    </div>
  )
}

export default Label
