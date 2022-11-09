const { default: mongoose } = require('mongoose');

const leaderboardSchema = new mongoose.Schema({ 
    //userId from user schema
    avgScore: Number,
    bestScore: Number
});

mongoose.model('Leaderboard', leaderboardSchema);