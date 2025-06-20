import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Post({link, imgUrl,title,category,description }) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-2">
    <Link href={link}>
    <div className="bg-transparent border border-black p-2 rounded-lg h-full dark:border-white w-full">
      <img className="h-50 rounded w-full object-cover object-center mb-6" src={imgUrl} alt={title}/>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{category}</h3>
      <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">{title}</h2>
      <p className="leading-relaxed text-base text-gray-900 dark:text-gray-200">{description.substring(0, 250)}</p>
    </div>
    </Link>
  </div>
  )
}

export default Post
