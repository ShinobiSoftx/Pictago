const express=require('express')
const router=express.Router()




const{getAll,addPost,deletePost,updatePost}=require('./controller')


router.get('/',getAll)
router.post("/add",addPost)
router.delete('/delete/:id',deletePost)
router.put('/update/:id',updatePost)

module.exports=router