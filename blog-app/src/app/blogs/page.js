import React from 'react'
import IFTBlogPosts from '../components/Blogposts/IFTBlogPosts'

export const metadata = {
    title: 'TechieBanda - Blogs',
    description: 'All blogs by TechieBanda',
  }

async function page() {
  const url = "http://localhost:3000/api/Blogs";
  let response = await fetch(url);
  let data = await response.json();
  let articles = data.articles;
  return (
    <>
      <IFTBlogPosts data={articles}/>    </>
  )
}

export default page
