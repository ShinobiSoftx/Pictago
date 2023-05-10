import React from 'react';
import './PostDetails.css';

const PostDetails = (props) => {
  return (
    <div className="post-details-container">
      <div className="post-image">
        <img src={props.post.url_image} alt={props.post.title} />
      </div>
      <div className="post-content">
        <h2>{props.post.title}</h2>
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
