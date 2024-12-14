//How to save using JSON

const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)



// --- Takes in a object turns it into JSON ---- //
// const bookJSON =JSON.stringify(book)
// console.log(bookJSON)

// --- Takes json data and gives us a object ---//
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)


//dataBuffer shoes binary data
//toString converts it to the string

// Read The File
// const dataBuffer = fs.readFileSync('1-json.json')

// //Convert data into a String
// const dataJson = dataBuffer.toString()

// // parse the data into an object
// const data = JSON.parse(dataJson)

// console.log(data.title)


// To change data in the JSON file
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "BK"
data.age = 27

const userJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJson)