var Twitter = require('twitter');

module.exports = function(app, io) {
    var twitter = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }); 

    // twitter.post('statuses/update', { status: 'Hello Twitter' })
    //     .then(function (tweet) {
    //         console.log(tweet.text);
    //     })
    //     .catch(function (error) {
    //         throw error;
    //     })

    var conn;
    io.on('connection', socket => {
        console.log('Connection OK.');
        conn = socket;
        conn.on('connection', () => console.log('Client connected.'));
        conn.on('disconnect', () => console.log('Client disconnected.'));
        stream();
    });

    const stream = () => {
        console.log('Streaming...');
        twitter.stream('statuses/filter', { track: app.twitSettings.searchKey }, function (stream) {
            stream.on('data', function (tweet) {
                console.log(tweet.id);
                conn.emit('tweeted', tweet);
            });

            stream.on('error', function (error) {
                throw error;
            });
        });
    };
};

