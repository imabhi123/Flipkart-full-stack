const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/flipkart-full-stack"

const connectToMongo = async()=>{
    try {
        await mongoose.connect(mongoURI,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('database connected successfully')
    } catch (error) {
        console.log('Erron while connecting to the database',error.message);
    }
}
module.exports = connectToMongo;