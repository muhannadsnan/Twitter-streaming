var Twitter = require('twitter');

module.exports = function(app) {
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

    twitter.stream('statuses/filter', { track: app.twitSettings.searchKey }, function (stream) {
        stream.on('data', function (event) {
            console.log(event && event.text);
        });

        stream.on('error', function (error) {
            throw error;
        });
    });
};

