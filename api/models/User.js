import mongoose, { trusted } from 'mongoose';
const UserSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true,
        unique:true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    phonenumber:{
        type: String,
        required: true,
        unique:true
    },
    age:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},
{timestamps:true}

);

export default mongoose.model("User", UserSchema)