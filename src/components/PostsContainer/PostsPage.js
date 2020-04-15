//Complete the necessary code in this file
import React,{useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

// pass the data from App.js down as props then map through the data

const PostsPage = ({data}) => {
  
  return (
    <div className="posts-container-wrapper">
      {data.map(item =>(
      <div>
        <Post post = {item} key = {item.timestamp}/>
      </div>))/* map through data here */}
    </div>
  );
};

export default PostsPage;

