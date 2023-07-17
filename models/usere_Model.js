const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Nmae is reuired'],
        trim:true,
        maxLenght: [20,'Name must be less than 20 char']
    },
    email:{
        type: String,
        required: [true,'email is required'],
        unique: true
    }
})
module.exports=mongoose.model("User",userSchema);