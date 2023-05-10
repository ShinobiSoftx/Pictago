const conn=require("./database/index")
module.exports={


getAll:(callBack)=>{
    const sql="SELECT * FROM post "

    conn.query(sql,function(err,result){
        callBack(err,result)
    })
},

addPost:(callBack,title,description,url_image,id)=>{
    const sql="INSERT INTO post (title,description,user_ID_user,url_image) VALUES (?)"
    conn.query(sql,[title,description,url_image,id],(err,result)=>{
    callBack(err,result)    
    })
},

deletePost:(callBack,id)=>{
    const sql="DELETE FROM post WHERE ID_post=? " 
    conn.query(sql,id,(err,result)=>{
    callBack(err,result)    
    })  
},
updatePost:(callBack,id,title,description)=>{
const sql="UPDATE post SET title=?,description=? WHERE ID_post=? "
    conn.query(sql,[title,description,id],(err,result)=>{
    callBack(err,result)    
    })
}
}