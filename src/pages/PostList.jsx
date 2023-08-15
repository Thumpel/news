import React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import "./styles/scssPostList.scss";
export default function PostList() {
  const posts = useSelector((state) => state.posts.post);
  const renderedPosts = posts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <div className="block_content">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      </article>
    );
  });
  return (
    <div>
      <Header />
      <div className="article">
        <div className="header">
          <h2>Posts</h2>
        </div>
       {renderedPosts}
      </div>
    </div>
  );
}
