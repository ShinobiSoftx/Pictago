import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Image } from 'cloudinary-react';

function AddPost({fetchData}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
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
        created_at,
    };

    const {data } = await axios.post("http://localhost:5000/addpost", body)
    console.log(data)
}

return (
        <div>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(e) => uploadImageToCloudinary(e.target.files[0])} />
            </div>
             {imageFile && (
             <div>
                    <p>Selected image:</p>
                    <Image cloudName="dxoyhsag8" publicId={imageFile.name} width="200" />
                </div>
            )} 
           { loadings ? "loading..." :<button onClick={handleUpload}>Add Post</button>}
        </div>
    );
}

export default AddPost;