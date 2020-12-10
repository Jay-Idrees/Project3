const mongoose=require("mongoose");
const bcrypt=require('bcrypt')
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


// Bcrypting middleware
// What this does is hash the password on save to the actual password is never saved in the database. At both the user and back-end on the hashes are compared
userSchema.pre(
    'save',
    async function(next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);
  
      this.password = hash;
      //next because its a middleware
      next();
    }
  );
  




//Place the userSchema object inside the User model
const User=mongoose.model("User", userSchema);

module.exports=User