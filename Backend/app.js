const express=require("express")

const app=express()

app.use(express.json())

const route=require("./route.js")

app.use("/",route)

module.exports=app