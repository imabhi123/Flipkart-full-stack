const express=require('express')
const Connection=require('./database/db.js')
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Abhishek</h1>')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})