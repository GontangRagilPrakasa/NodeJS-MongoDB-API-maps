const mongoose = require('mongoose');
//ememanggil geocode dari utils geocode.js
const geocoder = require('../utils/geocoder');
//membuat API pada schema lokasi
const StoreSchema = new mongoose.Schema({
    storeId : {
        type: String,
        required: [true, "Tolong tambahakan id Store"],
        unique: true,
        trim: true,
        maxlength: [10, 'Store id harus 10 karakter']
    },
    address: {
        type: String,
        required: [true, 'Tolong tambahkan alamat']
    },
    //menyimpan json object melalui almaat https://mongoosejs.com/docs/geojson.html
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'] // 'location.type' must be 'Point'
          //required: true
        },
        coordinates: {
          type: [Number], //array
          //required: true
          index: '2dsphere' //support untuk kalkulasi geometri queries maps dunia seperti sphere (aslinya)

        },
        formattedAddress : String
      },
      createdAt:{
          type: Date,
          default: Date.now
      }
});
// Geocode dan membaut lokasi
StoreSchema.pre('save', async function(next){
  const loc = await geocoder.geocode(this.address);
  // console.log(loc);
  this.location = {
    type : 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };
  //Jangan menyimpan alamat
  this.address = undefined;
  next();
});

module.exports = mongoose.model('Store', StoreSchema);