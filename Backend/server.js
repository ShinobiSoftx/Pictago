const express = require('express');
const path = require('path');
const cors = require("cors")
const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json())
const connection= require('./database/index');


app.get('/pins',(req,res) => {
 connection.query('SELECT * FROM posts',function(err, result) {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})



app.post("/addpost", (req,res) => {
const {title,description,created_at,image_url} = req.body
  connection.query("INSERT INTO posts SET ?",{title,description,created_at,image_url},(err) => {
    if (err) return res.send(err)
    res.send("post added")
  });
});






app.delete("/deletePost/:ID_post" , (req , res ) => {
  const {ID_post} = req.params
connection.query("DELETE from posts WHERE ID_post = ?" , ID_post  , (err) => {
  if (err) {  console.log(err);}
else {res.send("post deleted ") }

}) 
})


app.put('/updatePost/:ID_post', (req, res) => {
  const { ID_post } = req.params;
  const { title, description ,created_at,image_url } = req.body;
  connection.query(
    "UPDATE posts SET title = ?, `description` = ?, created_at = ?, image_url = ? WHERE ID_post = ?",
    [title, description ,created_at,image_url,ID_post],
    (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`post updated: ${title}`);
        res.send('post updated');
      }
    }
  );
});




app.listen(PORT,()=>console.log(`Server listening on port : ${PORT}`))