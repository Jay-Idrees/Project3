const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

// In setting up router, because we are using passport.authernticat as a middleware so we are using next
Router.post('/auth/login', (req, res, next)=>{

    // Because we are using the JSON web token, I am setting the session to false
    // Note that if you look at the passport-local strategy, err, user and info are the parameters for which the arguments are in the cb function inside localStrategy. We are defining this call back in the router- so it can recieve these as arguments
    passport.authenticate("local", {session:false}, (err, user, info )=>{
        if (err || !user){
            // If there is an error or cant find the user then send error and user
            return res.status(404).json({message: 'Something is not working right', user:user})
        }// if

        // The login property is added to the request by passport
        req.login(user, {session:false}, (err)=>{
            // the purpose of this call back is really to send back an error or Json webtoken
            if (err) {
                res.send(err);
            }// if
            const token=jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET);
            // Destructure email from the user object- so I do note get the password
            const {email}=user
            // And then send response in JSON format to show email and token
            // Note that the token here can be used to authenticate the react API routes
            return res.json({email,token})
        }); // req.login
    })// passport.authenticate
    (req, res, next)
});

module.exports=Router;