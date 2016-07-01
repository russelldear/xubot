
module.exports = function(robot) {
    
    robot.deck = '';

    robot.respond(/cards new deck/i, function(msg) {

        robot.http("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .get(function(err, res, body){
                console.log(body);
                //robot.deck = JSON.parse(body).deck_id;
                //msg.send('I\'ve shuffled a new deck of cards');
                //console.log(robot.deck);
            });
    });
};