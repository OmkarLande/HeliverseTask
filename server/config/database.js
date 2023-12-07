const mongoose = require('mongoose')
require('dotenv').config()

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("Databse connected"))
    .catch((err)=>{
        console.log("Db failed to connect")
        process.exit(1)
    })
}