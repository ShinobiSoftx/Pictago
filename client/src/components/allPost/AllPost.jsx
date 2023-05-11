import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "../PostDetails/PostDetails";
import './AllPost.css'

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/pins").then((res) => {
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
    <div className="post-container">
    {posts.map((post) => (
      <div className="post" key={post.ID_post}>
        <div className="post-image">
          <img
            src={post.image_url}
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
