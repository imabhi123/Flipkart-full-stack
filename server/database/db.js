const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/flipkart-full-stack"

const connectToMongo = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/flipkart-full-stack", { useNewUrlParser: true });
        console.log('database connected successfully')
    } catch (error) {
        console.log('Erron while connecting to the database',error.message);
    }
}
module.exports = connectToMongo;