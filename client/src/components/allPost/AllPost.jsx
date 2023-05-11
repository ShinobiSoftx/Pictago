import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "../PostDetails/PostDetails";
import './AllPost.css'

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/pin").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const handleClick = (post) => {
    setSelectedPost(post);
  };

  if (selectedPost) {
    return <PostDetails post={selectedPost} />;
  }

  return (
    <div class="post-container">
    {posts.map((post) => (
      <div class="post" key={post.ID_post}>
        <div class="post-image">
          <img
            src={post.url_image}
            alt={post.title}
            onClick={() => handleClick(post)}
          />
        </div>
      </div>
    ))}
  </div>



  );
}

export default AllPost;
