const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

console.log(process.argv)



//CUSTOMIZE YARGS VERION
yargs.version('1.1.0')

//Create add command 
// In the function handler (argv) should always be passed
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body, This is where the body of notes begin.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
          title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
          }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler: function () {
        notes.listNotes('List the notes!'  )
    }
})

//Create edit command 
yargs.command({
    command: 'edit',
    describe: 'Edit a note',
    builder: {
        title: {
          describe: 'Editing a note title',
          demandOption: true,
          type: 'string'
        },
        body: {
            describe: 'This is where the notes will be edited',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.editNote(argv.title, argv.body)
    }
    
})
//yargs.parse is the same as console.log
console.log(yargs.argv)



// const command = process.argv[2]
// if (command === 'add'){
//     console.log('Adding note!')
// } else if (command === 'remove') {
//   console.log('Removing Note')
// }

