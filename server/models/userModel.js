import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },

    notes:{
        
    }

},{
    timestamps:true
})

const user = mongoose.model('Users',userSchema);

export default user;