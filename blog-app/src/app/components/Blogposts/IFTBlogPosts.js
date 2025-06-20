"use client";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import LoadingCircle from "../LoadingCircle";

const IFTBlogPosts = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    if (posts.length >= 50) {
      setHasMore(false);
      return;
    }
    const url = "http://localhost:3000/api/Blogs";
    let response = await fetch(url);
    let data = await response.json();
    let newPosts = data.articles;
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingCircle />}
        endMessage={
          <p className="font-bold py-3 text-center dark:invert">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <section className="body-font w-full">
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
      </InfiniteScroll>
    </>
  );
};

export default IFTBlogPosts;
