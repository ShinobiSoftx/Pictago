const conn = require('./model.js')


module.exports={
    getAll:(req,res)=>{
        conn.getAll((err,result)=>{
            err? res.status(500).send(err):res.status(200).send(result)
        })
    },

    addPost:(req,res)=>{
        conn.addPost((err,result)=>{
            err? res.status(500).send(err):res.status(201).send(result)},
            [req.body.title,req.body.description,req.body.user_ID_user,req.body.url_image])

    },
    deletePost:(req,res)=>{
        conn.deletePost((err,result)=>{
            err? res.status(500).send(err):res.status(200).send(result)
        },req.params.id)
},
updatePost:(req,res)=>{
    conn.updatePost((err,result)=>{
        err? res.status(500).send(err):res.status(200).send(result)
    },req.params.id,req.body.title,req.body.description)
}
}