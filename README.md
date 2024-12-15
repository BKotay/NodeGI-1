# Weather App

This repository contains a simple Node.js application that fetches weather information for a given location using geocoding and weather APIs.

## Overview

The application accepts a location (address) as a command-line argument, converts the address into latitude and longitude coordinates using the Mapbox Geocoding API, and then retrieves the weather forecast for that location using the Weatherstack API.

### Key Concepts:

1. **Call Stack**: Calls functions and removes them once the function execution completes, as well as the functions it calls.
2. **setTimeout**: A part of the Node.js API (not the JavaScript language) that delays the execution of a function. It operates outside of the main JavaScript thread, in the Node.js API section.
3. **API Query Parameters**: APIs like Weatherstack and Mapbox require an access key and other parameters such as latitude and longitude for queries.
4. **HTTP Requests**: The `request` library is used to make HTTP requests, fetch API data, and parse JSON responses.
   

  The hosted URL site : https://node-gi-1-ashy.vercel.app/

  Thank You and enjoy!

