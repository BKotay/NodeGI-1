// Challenge 
// Find an npm package that tells you the language a string is written in.
// Print the most accurate late for the following phrases:
// “Es macht gut”
// “Dobrá práce”
// “Gwaith da”
// Dec 04 | Lesson 2 

let detect = require('language-detect');

const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

console.log(lngDetector.detect('Es macht gut', 1))
console.log(lngDetector.detect('Dubra prace', 1))
console.log(lngDetector.detect('Gwaith da', 1))



