const express= require("express");
const app=express();

const PORT=process.env.PORT || 4000;

// Setting up a get request to test the server
// the get request is from the perspective of the server- the server is getting a request to display res.json when the client types in api/welcome
app.get("/api/welcome", (req, res)=>{

    // putting an object inside res.json
    res.json({message:"Welcome to USRA.tech"});
});

app.listen (PORT, ()=>{
    console.log(`Welcome to USRA.tech, your server is running at https://localhost:${PORT}`)
})