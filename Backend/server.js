const express = require('express');
const path = require('path');
const cors = require("cors")
const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json())
const connection= require('./database/index');
const { title } = require('process');







app.get('/pins', (req, res) => {
  try {
    const { title, category, saved } = req.query;
    let query = 'SELECT * FROM posts WHERE 1=1';
    const queryParams = [];

    if (title) {
      query += ' AND title LIKE ?';
      queryParams.push('%' + title + '%');
    }

    if (category) {
      query += ' AND category = ?';
      queryParams.push(category);
    }

    if (saved) {
      query += ' AND saved = ?';
      queryParams.push(saved);
    }

    connection.query(query, queryParams, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send('Error querying database');
      } else {
        res.json(result);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send('Error processing request');
  }
});




app.get('/pins/:ID_post', (req, res) => {
  const { ID_post } = req.params;
  connection.query(
    'SELECT * FROM posts WHERE ID_post = ?', [ID_post], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0]);
      }
    }
  );
});



app.post("/addpost", (req, res) => {
  const { title, description, created_at, category, image_url } = req.body;
  connection.query(
    "INSERT INTO posts SET ?",
    { title, description, created_at, image_url, category, saved: 0 },
    (err) => {
      if (err) return res.send(err);
      res.send("post added");
    }
  );
});







app.delete("/deletePost/:ID_post", (req, res) => {
  const { ID_post } = req.params;
  connection.query(
    "DELETE FROM comments WHERE posts_ID_post = ?",
    ID_post,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting comments");
        return;
      }
      connection.query(
        "DELETE FROM posts WHERE ID_post = ?",
        ID_post,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error deleting post");
            return;
          }
          res.send("Post and comments deleted");
        }
      );
    }
  );
});


app.put('/updatePost/:ID_post', (req, res) => {
  const {ID_post} = req.params;
  const {title,description} = req.body;
  connection.query(
    "UPDATE posts SET title = ?, `description` = ? WHERE ID_post = ?",
    [title,description,ID_post],
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

app.put('/updateSaved/:ID_post', (req, res) => {
  const {ID_post} = req.params;
  const {saved} = req.body;
  connection.query(
    "UPDATE posts SET saved = ? WHERE ID_post = ?",
    [saved, ID_post],
    (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`post saved: ${ID_post}`);
        res.send('post saved');
      }
    }
  );

  




  
});
app.get('/pins/:ID_post/comments', (req, res) => {
  const ID_post = req.params.ID_post;
  connection.query(
    'SELECT * FROM comments WHERE posts_ID_post = ?',
    [ID_post],
    function(err, result) {
      if (err) {
        console.log(err)
        res.status(500).send('Error fetching comments for post')
      }
      res.send(result)
    }
  )
});


app.post('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  const commentBody = req.body.body;
  connection.query(
    'INSERT INTO comments (posts_ID_post, body) VALUES (?, ?)',
    [postId, commentBody],
    function(err, result) {
      if (err) {
        console.log(err)
        res.status(500).send('Error adding comment to post')
      }
      res.send('Comment added to post')
    }
  )
})

app.delete('/deleteComment/:ID_comment/comments',(req,res)=>{

const{ID_comment}=req.params
connection.query('DELETE FROM comments WHERE ID_comment=?',ID_comment,(err) => {
  if (err) {console.log(err)}
else {res.send("comment deleted")}
}

)

})

app.listen(PORT,()=>console.log(`Server listening on port : ${PORT}`))
