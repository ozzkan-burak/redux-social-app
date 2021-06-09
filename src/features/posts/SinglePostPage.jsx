import React from "react";
// third party libraries
import {useSelector} from "react-redux";
import {useParams , Link} from "react-router-dom";
// custom components
import PostAuthor from "../posts/PostAuthor";

const SinglePostPage = () => {

  const {id} = useParams()

  const post = useSelector((state) => state.posts.find((post)=> post.id === id));

  console.log('POST_TITLE :', post.title)
  
  if(!post) {
    return (
      <section>
        <h2>Gönderi bulunamadı!</h2>
      </section>
    )
  }

  return(
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <p className="post-content">
          {post.content}
        </p>
        <Link to={`/editPost/${post.id}`} >Edit</Link>
      </article>
    </section>
  )
}

export default SinglePostPage;
