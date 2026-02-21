const yargs = require('yargs');
const {prontListNotes, addNote, removeNote} = require('./module');


yargs.command({
    command: 'list',
    describe: 'List of all users',
    handler: (argv) => {
        prontListNotes()
    }
})

yargs.command({
    command: 'add',
    desc: 'Add a new item',
    builder: {
        title: {
            type: 'string',
            desc: 'The title of the item',
            demandOption: true
        }
    },
    handler: ({title}) => {
        addNote(title)
    }
})

yargs.command({
    command: 'remove',
    desc: 'Remove an item',
    builder: {
        id: {
            type: 'string',
            desc: 'The ID of the item',
            demandOption: true
        }
    },
    handler: ({id}) => {
        removeNote(id)
    }
})


yargs.parse()