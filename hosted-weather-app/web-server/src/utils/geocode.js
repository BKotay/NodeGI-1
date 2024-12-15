/// Postman request to get the API weatherstack.

const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    `https://api.mapbox.com/search/geocode/v6/forward?q="${encodeURIComponent(address)}&access_token=pk.eyJ1IjoiaXp6eW0yMyIsImEiOiJjbTRtcmhibm4wMGR2Mm1xNHU3cWZ5bTJyIn0.2U3aFrc8wQotcxgKWtsr4w&limit=1`;
  request({ url: url, json: true }, (error, {body}) => {
    if (error) {
      callback("unable to connect to location srvices", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location. try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].properties.coordinates.latitude,
        longitude: body.features[0].properties.coordinates.longitude,
        location: body.features[0].properties.full_address,
      });
    }
  });
};

module.exports = geocode;
