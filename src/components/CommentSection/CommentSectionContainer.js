// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
 const [data] = useState(dummyData);

  return (
    <div>
      {props.comments.map(item=>(
        <div> 
          <Comment comment = {item} />
          
        </div>
      ))}
      {/* /* map through the comments data and return the Comment component 循环中循环*/ }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
