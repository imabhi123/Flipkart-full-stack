const express=require('express')
const connectToMongo=require('./database/db')
const DefaultData =require('./default')
const app=express();
connectToMongo();
app.get('/',(req,res)=>{
    res.send('<h1>Abhishek</h1>')
})
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})
DefaultData() 