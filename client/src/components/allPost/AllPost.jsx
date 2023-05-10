import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "../PostDetails/PostDetails";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((res) => {
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
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {posts.map((post) => (
        <div className="col-md-4" key={post.ID_post}>
          <div className="card h-100">
            <img
              src={post.url_image}
              className="card-img-top"
              alt={post.title}
              onClick={() => handleClick(post)} 
              style={{ cursor: "pointer" }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPost;
