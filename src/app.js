require('./db/connection');
const yargs = require('yargs');
const { addMovie,
    readAll,
    updateMovie,
    deleteMovie,
    findByTitle,
    findByActor,
        }= require('./movie/movie.methods');

const app= () =>{
    if (process.argv[2]=== 'add'){
        addMovie({title: yargs.argv.title, actor: yargs.argv.actor})
    }else if(process.argv[2]=== 'read all'){
        readAll()
    }else if(process.argv[2]=== 'find by title'){
        findByTitle({title: yargs.argv.title})
    }else if(process.argv[2]=== 'find by actor'){
        findByActor({actor: yargs.argv.actor})
    }else if(process.argv[2]=== 'update'){
        updateMovie({title: yargs.argv.title}, {actor: yargs.argv.actor})
    }else if(process.argv[2]=== 'delete'){
        deleteMovie({title: yargs.argv.title, actor: yargs.argv.actor})
    }else if(process.argv[2]=== 'find by title'){
        findByTitle({title: yargs.argv.title})
    }else if(process.argv[2]=== 'find by actor'){
        findByActor({actor: yargs.argv.actor})
    }else{
        console.log("Hey focus! You have typed the wrong command")
    }
}

app();