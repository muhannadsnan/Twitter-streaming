var Twitter = require('twitter');

var twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var conn;

var connect = function (io, searchTerm) {
    io.on('connection', socket => {
        console.log('Connection OK.');
        conn = socket;
        conn.on('connection', () => console.log('Client connected.'));
        conn.on('disconnect', () => console.log('Client disconnected.'));
        stream(searchTerm);
    });
};

var stream = (searchTerm) => {
    console.log('Streaming...');
    twitter.stream('statuses/filter', { track: searchTerm }, function (stream) {
        stream.on('data', function (tweet) {
            console.log(tweet.id);
            conn.emit('tweeted', tweet);
        });
        stream.on('error', function (error) {
            throw error;
        });
    });
};

module.exports = {
    connect
};

