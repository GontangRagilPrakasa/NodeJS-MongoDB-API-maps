const NodeGeocoder = require('node-geocoder');

const options = {
  //provider: 'google',
    provider: process.env.GEOCODER_PROVIDER,
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: process.env.GEOCODER_API_KEY , // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Using callback
module.exports = geocoder;
// geocoder.geocode('29 champs elysée paris', function(err, res) {
//   console.log(res);
// });