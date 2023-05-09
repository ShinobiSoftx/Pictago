const express=require('express')
const router=express.Router()




const{getAll,addPost}=require('./controller')

router.get('/',getAll)
router.post("/add",addPost)

module.exports=router