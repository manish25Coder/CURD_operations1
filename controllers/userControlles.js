const User=require('../models/usere_Model.js')

exports.home =(req,res)=>{
    res.send('Hello World!')
}

//to send data to db
exports.createUser=async(req,res)=>
{
    try{
       const{name,email}= req.body

       if(!name || !email){
        throw new Error("name and email required")
       }

       const userExists=User.findOne({email})
       if(userExists){
        throw new Error("user already exists")
        // console.log("user already exists");
       }
       const user= await User.create({
        name,
        email
       })

       res.status(201).json({
        success:true,
        message:"User created successfully",
        user
       })

    }
    catch(error){
        console.log(error);
        res.status(400).json({
        success:false,
        message:error.message,
        })
    }
}

exports.getUsers=async(req,res)=>{
    try{
       const users= await User.find({})
       res.status(200).json({
        success:true,
        message:"get user successfully",
        users
       })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
        success:false,
        message:error.message,
        })
    }
}

exports.editUser=async(req,res)=>{
    try{
        const userId=req.params.id
        const user=await user.findbyIdAndUpdate(userId)
        res.status(200).json({
            success:true,
            message:" user updated successfully ",
            // users
           })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
        success:false,
        message:error.message,
        })
    }
}

exports.deleteUser=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user= await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            
        })

    }
    catch(error){
        console.log(error);
        res.status(400).json({
        success:false,
        message:error.message,
        })
    }
}

