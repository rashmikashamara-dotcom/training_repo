const express = require('express');
const port=4000;
const server=express();
server.get('/home',(req,res)=>{
    res.status(200).sendFile(__dirname+'/home.html');   
}) 
server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})