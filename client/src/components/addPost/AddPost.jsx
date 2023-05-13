import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Image } from 'cloudinary-react';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddPost.css"

function AddPost({fetchData}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category,setCategory]=useState("")
    const [imageFile, setImageFile] = useState(null);
    const [loadings, setLoadings] = useState(false)
    
    const uploadImageToCloudinary = (picture) => {
        setLoadings(true)
        const formData = new FormData();
        formData.append("file", picture);
        formData.append("upload_preset", "hzk4s7oh");

        // Upload the image file to Cloudinary
        axios.post("https://api.cloudinary.com/v1_1/dxoyhsag8/image/upload", formData)
        .then(response => {
            // Retrieve the uploaded image's URL
            const imageUrl = response.data.secure_url;
            setImageFile(imageUrl)
        

        
       setLoadings(false); 
      });
    }
const handleUpload= async ()=>{
    const currentDate = new Date();
    const created_at = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    const body = {
        title: title,
        description: description,
        image_url: imageFile,
        category:category,
        created_at,
    };

    const {data } = await axios.post("http://localhost:5000/addpost", body)
    console.log(data)
    window.location.href = "/";
    toast.dark("Posted!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        window.location.href = "/posts";
      }
    });
}

return (
  <div className="add-post-form">
 <ToastContainer />
  <div className="selected-image-container image-container">
    {imageFile && (
      <Image cloudName="dxoyhsag8" publicId={imageFile} width="300" crop="scale" />
    )}
    {!imageFile && (
      <div className="no-image-text">No image selected</div>
    )}
  </div>
  <div className="form-container">
    <div className="form-group">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="form-group">
  <label htmlFor="category">Category:</label>
  <select
    id="category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="form-control"
  >
    <option value="">Select a category</option>
    <option value="anime">Anime</option>
    <option value="games">Games</option>
    <option value="fashion">Fashion</option>
    <option value="travel">Travel</option>
    <option value="cooking">Cooking</option>
    <option value="fitness">Fitness</option>
    <option value="music">Music</option>
    <option value="decoration">Decoration</option>
    <option value="vehicles">Vehicles</option>
  </select>
</div>
    <div className="image">
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        onChange={(e) => uploadImageToCloudinary(e.target.files[0])}
        className="form-control-file"
      />
    </div>
    {loadings ? (
      <div className="loader">Loading...</div>
    ) : (
      <button onClick={handleUpload} className="btn btn-primary custom-button">
      Create
    </button>
    
    )}
  </div>
</div>

    );
}

export default AddPost;