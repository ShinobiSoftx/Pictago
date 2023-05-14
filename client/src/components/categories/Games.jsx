import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Games({handleSavePost}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pins?category=games")
      .then((response) => {
        const GamesPosts = response.data.filter(
          (post) => post.category === "games"
        );
        setPosts(GamesPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        post.category === "games" ? (
          <div className="post" key={post.ID_post}>
            <div className="post-image">
            <Link to={`/post/${post.ID_post}`}> <img
          src={post.image_url}
          alt={post.title}
        /> </Link>
               <div className="post-buttons">
          <button className="save-button" onClick={() => handleSavePost(post.ID_post)} >Save</button>
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

export default Games;
