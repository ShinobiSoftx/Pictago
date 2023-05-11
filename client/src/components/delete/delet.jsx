import React from 'react';
import axios from 'axios';


function DeletePost(){
    const Delete = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/pin/delete/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };

      return (<></>)
}



export default DeletePost;