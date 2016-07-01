module.exports = function(robot) {

  var Promise = require("es6-promise").Promise
  
  var shuffled = 'New deck shuffled and ready.';
  var deck_id = '';

  robot.respond(/cards new/i, function(msg) {
    NewDeck();
  });

  robot.respond(/cards draw/i, function(msg) {

    if (deck_id === ''){
      NewDeck().then(function(result) {
        DrawCard(msg);
      },
      function(err) {
        msg.send('Something didn\'t work: ' + err);
      });
    }
    else {
      DrawCard(msg);
    }
  });
  
  function NewDeck(){
    return new Promise(function(resolve, reject) {
      robot.http("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").get()(function(err, res, body) {
        deck_id = JSON.parse(body).deck_id;
        if (err || deck_id === '') { 
          reject(err); 
        }
        else {
          msg.send(shuffled);
          resolve(); 
        }
      });
    });
  }

  function DrawCard(msg) {
    robot.http("http://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1").get()(function(err, res, body) {
        msg.send(JSON.parse(body).cards[0].image);
    });
  }

};
