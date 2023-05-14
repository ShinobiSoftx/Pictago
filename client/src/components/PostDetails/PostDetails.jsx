import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , useParams } from 'react-router-dom';
import './PostDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostDetails = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [comments, setComments] = useState([]);
  const[commentBody,setCommentBody]=useState("")
  const [post, setPost] = useState(null);
  const { ID_post } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/pins/${ID_post}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [ID_post]);


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pins/${ID_post}/comments`);
        setComments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [ID_post],comments);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

 

  const handleDeleteClick = async (ID_post) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/deletePost/${post.ID_post}`);
        toast.dark('Post deleted !', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: '#1E1E1E',
            color: '#FFFFFF',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          },
        });
        setTimeout(() => {
          window.location.href = '/posts';
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }
  };

    const handleCommentPost = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/posts/${post.ID_post}/comments`, { body: commentBody });
        setComments([...comments, response.data]);
        setCommentBody("");
        window.location.reload()
        
      } catch (error) {
        console.error(error);
      }
    };

    const handleCommentDelete = async (ID_comment) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
       if (confirmDelete) {
      try{
        await axios.delete(`http://localhost:5000/deleteComment/${ID_comment}/comments`);
        window.location.reload()
      } catch(error){
        console.error(error);
      }
    }
  }

  return (
    <div className="post-details-container">
    {post && (
      <>
        <div className="post-actions">
          <button className="dropdown-btn" onClick={handleMenuClick}>
            <img src="/assets/images/dots.png" alt="menu" />
          </button>
          {showMenu && (
            <div className="dropdown-menu">
              <Link to={`/update/${post.ID_post}`} className="dropdown-menu-button">
                Edit
              </Link>
              <button onClick={handleDeleteClick} className="dropdown-btn">
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="post-image">
          {post.image_url && <img src={post.image_url} alt={post.title} />}
        </div>
        <div className="post-content">
          <div className="post-header">
            <h2>{post.title}</h2>
          </div>
          <div className="post-date">
            Posted on {post.created_at && new Date(post.created_at).toLocaleDateString()}
          </div>
          <div className="post-category">Category: {post.category}</div>
          <p>{post.description}</p>
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
                  <button>
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
      </>
    )}
    <ToastContainer />
  </div>
  
  );
};

export default PostDetails;