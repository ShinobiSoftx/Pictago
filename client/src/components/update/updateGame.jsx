import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UpdatePost = () => {
  const { title } = useParams();
  const [Posts, setPost] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/`)
      .then(res => {
        setPost(res.data);
        setFormData({
          title: res.data.title,
          description: res.data.desc,
         
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, [title]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/update/${id}`, formData)
      .then(res => {
        console.log(res);
        window.location.reload()
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Update {title}</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Description</label>
        <textarea className="form-control" id="desc" name="desc" value={formData.desc} onChange={handleChange} required></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </div>
  );
};

export default UpdatePost;
