// Post resqests are sending requsts to the server from req.body
// get requests are receiving data from the server
// app.use = using express package


require('dotenv').config();
const express= require("express");
const mongoose=require("mongoose")
const app=express();

// note that here I am requiring the passport from the passport file which we setup with strategies
const passport=require("./authentication/passport");
const authRoutes=require("./authentication/authRoutes");
const db = require('./models');

const PORT=process.env.PORT || 4000;

// Middleware for receiving post-requests

app.use(express.urlencoded({extended: true, useNewUrlParser: true}));
// JSON parsing for objects coming from the body and applying oriented programming in JS
app.use (express.json());

//Here I am instructing the server to use the routes for login as specified in the authRoutes.js and initialize with those strategies
// app.use(passport.initialize());

// Connecting mongoose
// Here mongodb is what we use instead of http to connect with mongoDB, then localhost indicates that we are using a local machine and mernPassport.. is the name of the database where I am storing user information
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernPassportAuthentication",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use('/auth', authRoutes) // note that authRoutes will provide the /login

// A post resuest is a requests the server to accept the data enclosed in the body of the request message for storing
app.post('/api/user', async (req, res)=>{
    const user=await db.User.create(req.body);
    res.json(user);
}) // app.post

// Setting up a get request to test the server
// the get request (Get/grab the requst from client) is from the perspective of the server- the server is getting a request to display res.json when the client types in api/welcome
app.get("/api/welcome", (req, res)=>{

    // putting an object inside res.json
    res.json({message:"Welcome to USRA.tech"});
});



if (process.env.NODE_ENV === 'production') {    
    // serve static files    
    app.use(express.static(path.join(__dirname, 'client/build')));
    // handle React routing    
    app.get('*', function (req, res) {        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));    });
}

app.listen (PORT, ()=>{
    console.log(`Welcome to USRA.tech, your server is running at https://localhost:${PORT}`)
})