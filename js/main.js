(function(){
    twitterFetcher.fetch({
        'id': '664497097195024384',
        'maxTweets': 1,
        'enableLinks': true,
        'showUser': false,
        'showTime': false,
        'showPermalinks': false,
        'showRetweet': false,
        'showInteraction': false,
        'customCallback': function(tweets) {
            document.getElementById('js-twitter').innerHTML = tweets[0];
        }
    });
})();


