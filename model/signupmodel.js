const mongoose=require('mongoose');

const SignupTem=new mongoose.Schema(
{
    name:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
        required:true,

    },
    email:{
        type:String,
        required:true,

    },
    contact:{
        type:Number,
        required:true,

    },
    
    consultant:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
    
    
})



module.exports=mongoose.model('samTable',SignupTem);