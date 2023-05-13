import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "../PostDetails/PostDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cooking({handleSavePost}) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pins?category=cooking")
      .then((response) => {
        const cookingPosts = response.data.filter(
          (post) => post.category === "cooking"
        );
        setPosts(cookingPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (post) => {
    setSelectedPost(post);
  };
  if (selectedPost) {
    return <PostDetails post={selectedPost} />;
  }

  const handleShare = (imageUrl) => {
    navigator.clipboard.writeText(imageUrl);
    toast.dark(`Image URL copied to clipboard: ${imageUrl}`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="post-container">
      {posts.map((post) =>
        post.category === "cooking" ? (
          <div className="post" key={post.ID_post}>
            <div className="post-image">
              <img
                src={post.image_url}
                alt={post.title}
                onClick={() => handleClick(post)}
              />
               <div className="post-buttons">
               <button className="save-button" onClick={() => handleSavePost(post.ID_post)}>Save</button>
          <button className="share-button" onClick={() => handleShare(post.image_url)}>
                <FontAwesomeIcon icon={faLink} />
              </button>
        </div>
            </div>
          </div>
        ) : null
      )}
      <Link to="/add" className="add-button">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
<ToastContainer />
    </div>
  );
}

export default Cooking;
