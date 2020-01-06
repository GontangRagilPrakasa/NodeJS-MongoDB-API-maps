//membuat depensi 
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');

// load environment variabel
dotenv.config({
    path: './config/config.env'
});

//connect ke database
connectDB();

const app = express();

//BODY PARSER
app.use(express.json());

//Nyalakan CORS
app.use(cors());

//set statuc folder
app.use(express.static(path.join(__dirname, 'public')));

//buat endpoint
//Memanggil Routes pada folder route
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
