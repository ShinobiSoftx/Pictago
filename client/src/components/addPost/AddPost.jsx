import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Image } from 'cloudinary-react';

const  AddPost=({fetchData})=> {

    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const add = () => {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "ncx8lv8p");

        // Upload the image file to Cloudinary
        axios.post("https://api.cloudinary.com/v1_1/dp6jqmcwp/image/upload", formData)
        .then(response => {
            // Retrieve the uploaded image's URL
            const imageUrl = response.data.secure_url;

            // Add the post with the retrieved image URL
            const body = {
                title: title,
                description: description,
                url_image: imageUrl
            };

            axios.post("http://localhost:5000/user/add", body)
            .then((res)=>{
                console.log(res.data)
            })
            .then(() => fetchData())
            .catch((err)=>{
                console.log("hello", err)
            });
        })
        .catch(error => {
            console.log(error);
        });
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
                <input type="file" id="image" onChange={(e) => setImageFile(e.target.files[0])} />
            </div>
            {imageFile && (
                <div>
                    <p>Selected image:</p>
                    <Image cloudName="dp6jqmcwp" publicId={imageFile.name} width="200" />
                </div>
            )}
            <button onClick={add}>Add Post</button>
        </div>
    )}

    export default AddPost;