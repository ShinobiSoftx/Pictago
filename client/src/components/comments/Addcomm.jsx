import React,{useState} from 'react';
import axios from 'axios';


function AddComment() {


    

const[body,setBody]=useState("")



    const add=(ID_post)=>{

axios.post(`http://localhost:5000/posts/${ID_post}/comments`,body)

.catch(err=>{console.log(err)} )  

}

    

        
  


    return (
        <div>
            <input type="text" id="body" value={body} onChange={(e) => setBody(e.target.value)} />

        </div>
    );


}



export default AddComment;