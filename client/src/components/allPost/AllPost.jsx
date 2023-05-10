import React from "react"
import { useState ,useEffect } from "react"
import axios from "axios"


function AllPost(){




const [data,setData]=useState([])

  const fetchData=()=>{
    axios.get('http://localhost:5000/user').then(res=>{
      setData(res.data)
    })
  }
  useEffect(()=>{fetchData()},[])

  return (


<div id="container">
    <h1>All Posts</h1>
    
  {data.map(post=>{
   return (

    <div id="card" key={post.ID_post}>

     <img src={post.url_image}/>
      </div>
  )})}
  




</div>
);
}

export default AllPost;