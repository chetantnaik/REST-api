const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Body parser middeware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//queryData route middleware
app.use('/api/query',require('./src/routes/api/queryData'));

//postData route middleware
app.use('/api/add',require('./src/routes/api/postData'));

//updateData route middleware
app.use('/api/update',require('./src/routes/api/patchData'));

//deleteData route middleware
app.use('/api/delete',require('./src/routes/api/deleteData'));

//Connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
  ()=>{console.log('Connected to db!')});
  
//Set port and listen
const PORT = process.env.PORT;
app.listen(PORT);