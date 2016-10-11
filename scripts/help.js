module.exports = function(robot) {

    var helpText = '\
**General** \r\n\
@RemindMe {number} {unit of time} \r\n\
@RemindMe define {word} \r\n\
@RemindMe directions from {place} to {place} \r\n\
@RemindMe translate me from {language} to {language} {text} \r\n\
@RemindMe pug me \r\n\
@RemindMe {rock/paper/scissor/lizard/spock} \r\n\
@RemindMe ship it \r\n\
@RemindMe xero get {endpoint} \r\n\
 \r\n\
**Cards** \r\n\
@RemindMe cards new \r\n\
@RemindMe cards draw \r\n\
 \r\n\
**Voting** \r\n\
@RemindMe start vote {comma-separated options} \r\n\
@RemindMe vote {option text or number} \r\n\
@RemindMe show choices \r\n\
@RemindMe show votes \r\n\
@RemindMe end vote \r\n\
';

    robot.respond(/help/i, function(msg) {
        ShowHelp(msg);
    });

    robot.respond(/\/\?/i, function(msg) {
        console.log('Received help request');
        ShowHelp(msg);
    });

    function ShowHelp(msg) {
        msg.send(helpText);
    } 
};