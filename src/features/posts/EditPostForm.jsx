import React, { useState } from "react";
//third party libraries;
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from "react-router-dom";
import {postUpdated} from "./postsSlice";

const EditPostForm = () => {

  const {id} =  useParams()

  const post = useSelector((state)=> state.posts.find((post)=> post.id === id))

  const [title, setTitle] = useState(post.title);
  const [content, setContent] =useState(post.content);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSavePost = ()=> {
    if(title && content) {
      dispatch(postUpdated(id, title, content))
      history.push(`/posts/${id}`)
    }
  }

  console.log(content)

  return(
    <section>
      <h2>Güncelleme Formu</h2>
      <form>
        <label htmlFor="postTitle">Başlık</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Aklında ne geçiyor?"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">İçerik</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="button" onClick={onSavePost}>Kaydet</button>
      </form>
    </section>
  )
};

export default EditPostForm;