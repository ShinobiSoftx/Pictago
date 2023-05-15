const mysql= require("mysql2")

const connection=mysql.createConnection({host:"localhost",
user:"root",
password:"Yassine1998.",
database:"pictago" 
})

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('database pictago connected');
    }
})
module.exports=connection