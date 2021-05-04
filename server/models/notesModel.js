import mongoose from 'mongoose';
import user from './userModel.js';


const Schema = mongoose.Schema

const noteSchema=new Schema({
    username:{
        type: mongoose.Types.ObjectId,
        ref: user,
    },
    title:{
        type:String,
        default:null,
    },
    body:{
        type:String,
        required:true
    },
})

const Note = mongoose.model('Note',noteSchema)
export default Note;