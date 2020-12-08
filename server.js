const express= require("express");
const app=express();

const PORT=process.env.PORT || 4000;

// Setting up a get request to test the server
app.get("/api/welcome", (req, res)=>{
    res.json({message:"Welcome to USRA.tech"});
});

app.listen (PORT, ()=>{
    console.log(`Welcome to USRA.tech, your server is running at https://localhost:${PORT}`)
})