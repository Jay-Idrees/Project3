require('dotenv').config();
const express= require("express");
const app=express();
const mongoose=require("mongoose")
// note that here I am requiring the passport from the passport file which we setup with strategies
const passport=require("./authentication/passport");
const authRoutes=require("./authentication/authRoutes");

const PORT=process.env.PORT || 4000;

// Middleware for receiving post-requests

app.use(express.urlencoded({extended:true}));
// JSON parsing for objects coming from the body and applying oriented programming in JS
app.use (express.json());

//Here I am instructing the server to use the routes for login as specified in the authRoutes.js and initialize with those strategies
// app.use(passport.initialize());

// Connecting mongoose
// Here mongodb is what we use instead of http to connect with mongoDB, then localhost indicates that we are using a local machine and mernPassport.. is the name of the database where I am storing user information
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernPassportAuthentication");

app.use('/auth', authRoutes) // note that authRoutes will provide the /login


// Setting up a get request to test the server
// the get request (Get/grab the requst from client) is from the perspective of the server- the server is getting a request to display res.json when the client types in api/welcome
app.get("/api/welcome", (req, res)=>{

    // putting an object inside res.json
    res.json({message:"Welcome to USRA.tech"});
});





app.listen (PORT, ()=>{
    console.log(`Welcome to USRA.tech, your server is running at https://localhost:${PORT}`)
})