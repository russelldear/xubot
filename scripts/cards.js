
module.exports = function(robot) {
    
    robot.deck = '';

    robot.respond(/cards new deck/i, function(msg) {

        robot.http("http://google.com").get(function(err, res, body){
                console.log(err);
                console.log(res);
                console.log(body);
                //robot.deck = JSON.parse(body).deck_id;
                //msg.send('I\'ve shuffled a new deck of cards');
                //console.log(robot.deck);
            });
    });
};