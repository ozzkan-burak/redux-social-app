import React, { useState } from 'react'
// third party libraries
import {useDispatch, useSelector} from "react-redux";

// actions
import {postAdded} from "./postsSlice";


const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] =useState('');

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const userOptions = users.map(user=> (
    <option key={user.id} value={user.id} >{user.name}</option>
  ));

  const savePost = () => {
    if(title && content) {
      dispatch(postAdded(title,content, userId));
      setTitle('');
      setContent('');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId) 

  return(
    <section>
      <h2>Yeni paylaşım oluştur</h2>
      <form>
        <label htmlFor="postTitle">Başlık:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label htmlFor ="postAuthor">Yazar:</label>
        <select id="postAuthor" value={userId} onChange={e => setUserId(e.target.value)}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">İçerik:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e)=> setContent(e.target.value)}
        />
        <button type="button" onClick={savePost} disabled={!canSave}>Kaydet</button>
      </form>
    </section>
  )
}

export default AddPostForm