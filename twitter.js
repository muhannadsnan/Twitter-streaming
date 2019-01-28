var Twitter = require('twitter');

module.exports = function(app, io) {
    var twitter = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }); 
    
    var conn, twStream;

    // ESTABLISH SOCKET CONNECTION
    io.on('connection', socket => {
        console.log('Connection OK.');
        conn = socket;
        stream();
        conn.on('connection', () => console.log('Client connected.'));
        conn.on('disconnect', () => console.log('Client disconnected.'));
    });

    const stream = () => {
        console.log('Streaming...');
        twitter.stream('statuses/filter', { track: app.twitSettings.searchKey}, (stream) => {
            stream.on('data', (tweet) => {
                console.log('Sending message...');
                sendMessage(tweet);
            });
            stream.on('error', (error) => {
                console.log(error);
            });
            twStream = stream;
        });
    };

    const sendMessage = (msg) => {
        if(!msg.text.includes('RT')){
            conn.emit('tweeting', msg);
            console.log("Message sent!", msg);
        }
    };

    app.post('/resume', (req, res) => {
        console.log('Resume.');
        stream();
    });
};

