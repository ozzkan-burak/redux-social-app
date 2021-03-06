import React from "react";
import { useSelector } from "react-redux";

const PostAuthor = ({userId}) => {

  const author = useSelector(state => state.users.find((user)=> user.id === userId));
  
  return(
    <span>{author ? author.name : 'Kayıtlı olmayan yazar'} tarafından</span>
  )
}

export default PostAuthor;