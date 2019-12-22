import { Mongoose, MongooseDocument, Schema, Document ,Model, PassportLocalOptions, PassportLocalDocument, PassportLocalSchema, PassportLocalModel} from "mongoose";
import { PassportStatic } from "passport";

const mongoose= require('mongoose');
const passportMongoose = require('passport-local-mongoose');

interface IUser extends Document
{
    username:string,
    password:string
}

const userSchema:Schema = new mongoose.Schema(
    {

        username:{
            type:String,
            required:true,
            unique:true,
            minlength:2,
            maxlength:20,
        },
        password:{
            type:String,
            minlength:6,
            maxlength:20
        },

        num:{
            type:Number
        }

    }
)


userSchema.plugin(passportMongoose,{
    usernameUnique:true
});

const User = mongoose.model("User",userSchema);



function ValidateUser( user : IUser):boolean
{
    if(!user.username || user.username.length<2 || user.username.length>20)
    {
        return false;
    }
    if(!user.password || user.password.length<5 )
    {
        return false;
    }
    return true;
}

function FindUserExists(username:string)
{
    return User.exists({username:username});
}
export {IUser,User,ValidateUser,FindUserExists};

