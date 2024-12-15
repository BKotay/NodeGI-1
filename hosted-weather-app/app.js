// //Call stack calls functions and dissappears once it finishes and what it calls

// //setTimeout is not apart of the js language it will be placed in the NODE API section

// //key value string for API search bar
// // acess key = api code
// //quey with latitude, longtitude

// //MAKE HTTP REQUEST

const request = require('request')
const geocode = require("./web-server/src/utils/geocode");
const forecast = require("./web-server/src/utils/forecast");
const url = 'https://api.weatherstack.com/current?access_key=d4777fe476fbcd008d967d7f846f4a48&query=37.8267,-122.4233&units=f'

// //Accessing response.body gives me an access to the body of the API.

// // -- How to make a HTTP request:
// // Get The URL with a vairable
// // Make a request by doing that below
// // JSON.parse turn into JSON Object
// // const url = 'https://api.weatherstack.com/current?access_key=d4777fe476fbcd008d967d7f846f4a48&query=37.8267,-122.4233' //
// // request({ url: url},(error, response)=>{
// //     const data = JSON.parse(response.body)
// //     console.log(data.current)
// //     })

// // Geocoding
// // address -> Lat/Long -> weather

// const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoiYmxhbWFoazEiLCJhIjoiY200bmVsZ2ZrMDdmczJqcTB1Ym5jemJncCJ9.UnFwEGTZcSU5xcyivZL2AQ&limit=1'

let address = process.argv[2];

if (!address) {
  console.log("You need to provide a address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    console.log("error", error);
    console.log("data", data);

    forecast(data.lat, data.long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
