const mongoose = require("mongoose");

async function connectDB(){
    mongoose.connect(process.env.DB).then(()=>{
        console.log("DB Connected Succesfully");
    }).catch((err)=>{
        console.log("DB Error:-", err);
    });
}

module.exports = connectDB;