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
    // Note that here the user has capital U, because thats how we spelled the User model. db is the variable thats telling to run the query on the modals and look for email and password.
   const user=await db.User.findOne({email, password});
   try {
      
       if (!user){
 // If the email and password do not match
        return cb (null, false, {message: "Incorrect email or password"})
         } // br close if
// else if the email and password do match - note here with return, else is automatically understood
        return cb(null, user, {message:"You have logged in successfully"})
        // If you are unable to run the query for some reason then throw error
        // this is the closing br for try. Catch goes with try
} catch (err) {
        cb(err)
    }

}//async


 )// localStrategy
);// passport.use