import React, { useState } from 'react';
import './PostDetails.css';
import axios from 'axios';

const PostDetails = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

 

  const handleDeleteClick = async (ID_post) => {
      try {
        console.log("dazdaz",props.post.ID_post);
        await axios.delete(`http://localhost:5000/deletePost/${props.post.ID_post}`);
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    };
     
  

  return (
    <div className="post-details-container">
      <div className="post-actions">
        <button className="dropdown-btn" onClick={handleMenuClick}>
          <img src="/assets/images/dots.png" alt="menu" />
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <button>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}
      </div>
      <div className="post-image">
        <img src={props.post.image_url} alt={props.post.title} />
      </div>
      <div className="post-content">
        <div className="post-header">
          <h2>{props.post.title}</h2>
        </div>
        <p>{props.post.description}</p>
        <div className="comment-input">
          <input type="text" placeholder="Add a comment" />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
