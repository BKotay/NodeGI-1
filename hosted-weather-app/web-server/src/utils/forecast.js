// const request = require("postman-request");

// const forecast = (latitude, longitude, callback) => {
//   const url = `https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoiYmxhbWFoazEiLCJhIjoiY200bmVsZ2ZrMDdmczJqcTB1Ym5jemJncCJ9.UnFwEGTZcSU5xcyivZL2AQ&limit=1&query=' + longitude + ',' + latitude`;

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(
//         undefined,
//         response.body.current.weather_descriptions[0] +
//           ". It is currently " +
//           response.body.current.temperature +
//           " degrees out. There is a " +
//           response.body.current.feelslike +
//           "% chance of rain."
//       );
//     }
//   });
// };

// module.exports = forecast;

const request = require("postman-request");
const geocode = require('./geocode')

const forecast = (lat, long, callback, units='f') => {
  const url =
    "http://api.weatherstack.com/current?access_key=f3644354d5fd22ee39ba9ce61be474e5&query=" +
    lat +
    "," +
    long +
    "&units=" + units;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions}, it feels like its currently ${response.body.current.temperature} degrees`
      );
    }
  });
};

module.exports = forecast;
