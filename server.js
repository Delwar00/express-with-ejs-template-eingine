const express=require('express');
const mongoose=require('mongoose');
const colors=require('colors');
const path=require('path');
const dotenv=require('dotenv').config();
const app=express();
const connectDB=require('./config/db');
// db 
connectDB();
const PORT=process.env.SERVER_PORT || 5000


// route

app.use('/student',require('./routes/studentRoutes'));


//express post data submit
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//static file 
app.use('/assets',express.static(path.join(__dirname,'/assets')));
//ejs setup
app.set('view engine','ejs');

//app listener
app.listen(PORT,()=>{
    console.log(`Our server is running on port ${PORT}`)
})