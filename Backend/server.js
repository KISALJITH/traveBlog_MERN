 import express from "express";
 import dotenv from "dotenv"


 dotenv.config();
 const app = express();
 app.use(express.json());

 //when hit the main root 
 app.get("/", (req,res)=>{
    res.send("Server is running...");
 });

 //if cannot find this file server is run on port 5000
 const PORT =process.env.PORT ||5000;

 app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));