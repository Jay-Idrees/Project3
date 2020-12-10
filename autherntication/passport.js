// In this example I am using a passport local strategy which means that I will be requring users to create a username and password to conect to a local database. An alternative is to use APIs and connect to social networks

const passport=require('passport');
const localStrategy=require ('passport-local').Strategy // It comes with a constructor that will setup strategy for us
const db=require('../models')

// hey I am sending you this email and password - does it matches in the database or not?

passport.use(
    new localStrategy(
        //Here I am telling to recognize the email in the User Model as the username field and recognize the password in the User Model as the password field
{
    usernameField:'email',
    passwordField:'password'
},

// I am defining the querty function for the db- telling it to match the user typed email and password and then based on the results do something (the call back function) Then I lay down what to do if the info matches vs not
async function (email, password, cb) {
   const user=await db.User.findOne({email, password});
   try {
       // If the username/pw do not match
       if (!user){

        return cb (null, false, {message: "Incorrect email or password"})
         } // if the username do match
        return cb(null, user, {message:"You have logged in successfully"})
} catch (err) {
        cb(err)
    }

}//async


 )// localStrategy
);// passport.use