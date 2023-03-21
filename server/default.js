const products=require('./data')
const Product=require('./model/product-schema')
const DefaultData=async()=>{
    try {
        await Product.insertMany(products[0]);
        console.log('Data Imported successfully')
        console.log(products)
    } catch (error) {
        console.log('error while inserting default data ',error.message)
    }
}
module.exports=DefaultData