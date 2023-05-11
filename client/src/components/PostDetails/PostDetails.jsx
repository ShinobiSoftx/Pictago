import React, { useState } from 'react';
import './PostDetails.css';

const PostDetails = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEditClick = () => {
    // code to handle edit button click
  };

  const handleDeleteClick = () => {
    // code to handle delete button click
  };

  return (
    <div className="post-details-container">
      <div className="post-actions">
        <button className="dropdown-btn" onClick={handleMenuClick}>
          <img src="/assets/images/dots.png" alt="menu" />
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={handleEditClick}>Edit</button>
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
        <div className="post-date">
        Posted on {new Date(props.post.created_at).toLocaleDateString()}
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
