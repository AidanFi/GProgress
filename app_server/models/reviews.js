const { default: mongoose } = require('mongoose');

const reviewSchema = new mongoose.Schema({ 
    //userId from user schema
    course: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

mongoose.model('Reviews', reviewSchema);