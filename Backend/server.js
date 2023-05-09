const connection=require("./database/index")
const express=require('express')
const cors=require('cors')
const app=express()
const route=require("./route")

app.use(cors())
app.use(express.json())


app.use("/user",route)



app.listen(5000,()=>console.log(`server is listening on 5000`))