const mongoose=require('mongoose')
const Connection=async()=>{
    const URL="mongodb://localhost:27017";
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("database connected successfully");
    } catch (error) {
        console.log("error while connecting with the database"+error.message)
    }
}
module.exports={Connection}