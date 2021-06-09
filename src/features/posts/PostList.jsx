import React from 'react';
// third party libraries
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
// custom component
import PostAuthor from "../posts/PostAuthor";

const PostList = () => {

  const posts = useSelector((state)=> state.posts)

  const renderedPost = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content?.substring(0, 100)}</p>
      <PostAuthor userId={post.user} />
      <Link  to={`/posts/${post.id}`} className="button muted-button">Detay</Link>
    </article>
  ))

  return (
    <section>
      <h2>Post</h2>
      {renderedPost}
    </section>
  )
}

export default PostList;