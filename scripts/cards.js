module.exports = function(robot) {
    
    robot.respond(/cards new/i, function(msg) {

        robot.http("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .get(function(err, res, body){
                console.log(body);
            });
    });
};