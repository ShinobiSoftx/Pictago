import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PostDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const PostDetails = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [comments, setComments] = useState([]);
  const[commentBody,setCommentBody]=useState("")
  const [refresh, setRefresh] = useState(false)

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

 

  const handleDeleteClick = async (ID_post) => {
      try {
        console.log("dazdaz",props.post.ID_post);
        await axios.delete(`http://localhost:5000/deletePost/${props.post.ID_post}`);
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    };

    const handleCommentPost = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/posts/${props.post.ID_post}/comments`, { body: commentBody });
        setComments([...comments, response.data])
        setRefresh(!refresh);
        
      } catch (error) {
        console.error(error);
      }
    };

    const handleCommentDelete = async (ID_comment) => {
      try{
        await axios.delete(`http://localhost:5000/deleteComment/${ID_comment}/comments`);
      } catch(error){
        console.error(error);
      }
    }

  return (
    <div className="post-details-container">
      <div className="post-actions">
        <button className="dropdown-btn" onClick={handleMenuClick}>
          <img src="/assets/images/dots.png" alt="menu" />
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <Link to={`/update/${props.post.ID_post}`}>Edit</Link>
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
        {comments.map((comment, i) => (
  <div key={i} className="comment">
    <div className="user">user:</div>
    <div className="comment-text styled-comment">{comment.body}</div>
    <div className="icons">
      <button onClick={() => handleCommentDelete(comment.ID_comment)}> 
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <div className="icon-space"></div>
      <button > 
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  </div>
))}
</div>
<div className="comment-input">
  <input type="text" placeholder="Add a comment" onChange={(event) => setCommentBody(event.target.value)} />
  <button onClick={handleCommentPost}>Post</button>
</div>
      </div>
    </div>
  );
};

export default PostDetails;