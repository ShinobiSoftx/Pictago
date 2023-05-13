import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./updatePost.css"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePost = () => {
  const { ID_post } = useParams();
  const [post, setPost] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/pins/${ID_post}`)
      .then(res => {
        setPost(res.data);
        setFormData({
          title: res.data.title,
          description: res.data.description,
          
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, [ID_post]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/updatePost/${post.ID_post}`,formData)
      .then(res => {
        console.log(res);
        toast.dark("Post updated !", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="update-container">
      <div className="image-container">
        <img src={post.image_url} alt={post.title} />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="update-form">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={()=>console.log(formData.title)}>Update</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdatePost;