//https://github.com/mustofa-id/node-restful-api
const express = require('express');
const { getStores, addStore } = require('../controllers/stores');
//Ketika client mengakses url tersebut aplikasi kita akan menerima request pada path /barang dengan parameter ?id=789172936 //
//lalu router akan mengecek apakah terdapat fungsi (Route Handlers) yang menangani request pada path yang memiliki parameter /
//tersebut.
//Di framework Express telah disediakan module untuk menangani hal tersebut yaitu express.Router().
const router = express.Router();


// router.get('/', (req,res) =>{
//     res.send('hello');
// });
//atau cara simplenya

router.route('/').get(getStores).post(addStore);


module.exports = router;