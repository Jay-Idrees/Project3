const mongoose=reqire("mongoose");
// Schema is a constructor function that constructs objects
const Schema=mongoose.Schema;

// Passing in an object
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
        password:String
});

//Place the userSchema object inside teh user model
const User=mongoose.model("User", userSchema);

module.exports=User