// To connect a file or npm package
const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notess...'
}

const addNotes = function (title, body){
 const notes = loadNotes()
const duplicateNote = note.find((note) => note.title === title)
 

 if(!duplicateNote){
 notes.push({
title: title,
body: body
 })

saveNotes(notes)
console.log(chalk.green.inverse('New note added!'))
} else {
    console.log(chalk.red.inverse('Note title taken!'))
}
}



// ---- Remove Function --- //
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){ return note.title !== title
    })

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
 saveNotes(notesToKeep)
}

// --- List Function -- /
const listNotes = function () {
    const notes = loadNotes()

console.log(chalk.inverse('Your notes'))

notes.forEach((note) => {
    console.log(note.title)
})
}
 //  
const saveNotes = function (notes) {
 const dataJSON = JSON.stringify(notes)
 fs.writeFileSync('notes.json', dataJSON)
}

// ---- Read Function ---- //
const readNote = (title) => {
 const notes = loadNotes()
 const note = note.find((note) => note.title === title)

 if(note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
 } else{
    console.log(chalk.red.inverse('Note not found!'))
 }
}

// ---- Edit Function ---- //

// how to turn files into strings than objects
const loadNotes = function () {
   try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
   } catch (e) {
 return []
   } 
}

// how to edit a note in the function.

// to export one piece of data do that below
// module.exports = getNotes



//To export muiltple do this
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    editNote: editNote
}


// Debugger node inspect app.js add --title="course" --body="Node.js"