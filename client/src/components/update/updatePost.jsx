import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        window.location.href = '/';
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Update {formData.title}</h1>
    <form onSubmit={handleSubmit}>
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
  );
};

export default UpdatePost;