module.exports = function(robot) {

    var helpText = `
@RemindMe {number} {unit of time}
@RemindMe directions from {place} to {place}
@RemindMe translate me from {language} to {language} {text}
@RemindMe pug me
@RemindMe {rock/paper/scissor/lizard/spock}
@RemindMe ship it
@RemindMe xero get {endpoint}

Cards
@RemindMe cards new
@RemindMe cards draw

Voting
@RemindMe start vote {comma-separated options}
@RemindMe vote {option text or number}
@RemindMe show choices
@RemindMe show votes
@RemindMe end vote
`

    robot.respond(/help/i, function(msg) {
        ShowHelp(msg);
    });
    robot.respond(/\/?/i, function(msg) {
        ShowHelp(msg);
    });

    function ShowHelp(msg) {
        msg.send(helpText);
    } 
};