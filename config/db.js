//mengkoneksikan database mongoose ke nodejs
//environment berfugns untuk menampung sebuah key seperti api-key atau port yang lainnya

const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //menyediakan untuk parser string koneksi yang baru dan konfigurasi mongoDB
            useNewUrlParser : true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB