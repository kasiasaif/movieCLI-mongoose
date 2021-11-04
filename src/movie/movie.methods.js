const Movie = require('./movie.model');
const mongoose = require('mongoose');


exports.addMovie = async (movieObj) => {
    try{
        const result = new Movie(movieObj);
        await result.save();
        mongoose.disconnect();
        console.log(`${result} successfully added to DB`);
    }catch(error){
        console.log(error)
    }

};
exports.readAll = async () => {
    try{
        const result = await Movie.find({});
        mongoose.disconnect();
        console.log('You have search for all movies',result)
    }catch(error){
        console.log(error)
    }
}
exports.findByTitle = async (movieObj) => {
    try{
        const result = await Movie.find({title: movieObj.title});
        mongoose.disconnect();
        console.log('You have search for : ',result)
    }catch(error){
        console.log(error)
    }
}
exports.findByActor = async (movieObj) => {
    try{
        const result = await Movie.find({title: movieObj.title});
        mongoose.disconnect();
        console.log('You have search for : ',result)
    }catch(error){
        console.log(error)
    }
}

exports.updateMovie = async (actor, newActor) => {
    try{
        const result = await  Movie.findOneAndUpdate(actor, newActor)
        mongoose.disconnect();
        console.log(`You have  successfully updated from ${result } `)
        
    }catch(error){
        console.log(error)
    }
}
exports.deleteMovie = async (movieObj) => {
    try{
        const result = await  Movie.deleteOne(movieObj)
        mongoose.disconnect();
        console.log(`You have deleted ${result}`);
    }catch(error){
        console.log(error)
    }
}

