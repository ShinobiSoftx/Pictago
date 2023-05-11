import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostDetails.css';

const PostDetails = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pins/${props.post.ID_post}/comments`);
        setComments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [props.post.ID_post]);

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
        <h1>Comments</h1>
        <div className="comments">
            {comments.map((comment) => (
              <div key={comment.ID_comment} className="comment">
                <div className="user">user:</div>
                <div className="comment-text styled-comment">{comment.body}</div>
              </div>
            ))}
          </div>
        <div className="comment-input">
          <input type="text" placeholder="Add a comment" />
          <button>Post</button>
        </div>


      </div>
    </div>
  );
};

export default PostDetails;
