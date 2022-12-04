const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/GProgress';
mongoose.connect(dbURI, {useNewUrlParser: true});
//let dbURI = 'mongodb://localhost/GProgress';
//if (process.env.NODE_ENV === 'production') {
//dbURI = 'mongodb+srv://AidanFi:dynamiclotus407@cluster0.pxfnn27.mongodb.net/?retryWrites=true&w=majority';
//}
//mongoose.connect(dbUIR);
mongoose.connect(dbURI, {useNewUrlParser: true});


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


require('./user.js')
require('./scores.js')
require('./reviews.js')
require('./leaderboard.js')




