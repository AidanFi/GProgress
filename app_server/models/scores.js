const { default: mongoose } = require('mongoose');


const scoreSchema = new mongoose.Schema({
    //userId from user schema ???
    date: {
        type: Date,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    //array instead?
    hole1: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole2: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole3: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole4: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole5: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole6: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole7: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole8: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole9: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole10: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole11: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole12: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole13: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole14: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole15: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole16: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole17: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
    hole18: {
        type: Number,
        required: false,
        min: -5,
        max: 10
    },
});