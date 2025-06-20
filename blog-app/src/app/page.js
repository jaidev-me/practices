import React from 'react'
import Slider from './components/Slider'
import HomeIntro from './components/HomeIntro'
import Blogposts from './components/Blogposts/Blogposts'
import Label from './components/Label'
import Footer from './components/Footer'



async function page() {
  const url = "http://localhost:3000/api/Blogs";
  let response = await fetch(url);
  let data = await response.json();
  const articles = data.articles;

  const slideData = articles.map((item,index)=>{
    return (
      {
        image: item.image,
        text: item.title
        
      }
    )
  })

  return (
    <>
    <HomeIntro/>
    <Slider slideData={slideData} sidePostsData={slideData}/>
    <Label gapBottom={4} gapTop={2} text={"Latest Posts"}/>
    <Blogposts/>
    <Label gapBottom={4} gapTop={2} text={"Featured"}/>
    <Blogposts/>
    <Label gapBottom={4} gapTop={2} text={"Trending"}/>
    <Blogposts/>
    <Label gapBottom={4} gapTop={2} text={"Most Viewed"}/>
    <Blogposts/>
    <Footer/>
    </>
  )
}

export default page
