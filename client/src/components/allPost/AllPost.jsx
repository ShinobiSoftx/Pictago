import React, { useState } from "react";
import PostDetails from "../PostDetails/PostDetails";
import './AllPost.css'
function AllPost({posts}) {
  const [selectedPost, setSelectedPost] = useState(null);
  
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
