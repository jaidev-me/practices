import React from "react";
import Post from "./Post";

async function Blogposts() {
  const url = "http://localhost:3000/api/Blogs";
  let response = await fetch(url);
  let data = await response.json();
  let posts = data.articles;

  return (
    <>
      <section className="text-gray-600 body-font w-full">
        <div className="flex flex-wrap w-full py-4 px-1">
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                link={post.url}
                imgUrl={post.image}
                title={post.title}
                description={post.description}
                category={post.source.name}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blogposts;
