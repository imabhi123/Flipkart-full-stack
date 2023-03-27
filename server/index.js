const express=require('express')
const connectToMongo=require('./database/db')
const Router=require('./Routes/route')
const DefaultData =require('./default')
const cors=require('cors')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);
connectToMongo();
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})
DefaultData() 