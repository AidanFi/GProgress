const { default: mongoose } = require('mongoose');

const scoreSchema = new mongoose.Schema({
    //userId from user schema
    date: {
        type: Date,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    par: [Number],
    strokes: [Number]
});