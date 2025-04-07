const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>console.log('connected to MongoDB'))
.catch(err=>console.error(err));

const app = express();
app.use(express.json());


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})