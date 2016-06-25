
module.exports = function(robot) {
    
    robot.respond(/xero( (\w+))?/i, function(msg) {

        require('newrelic');

        var RSA_PRIVATE_KEY = require('fs').readFileSync('privatekey.pem');

        var Xero = require('xero');

        var xero = new Xero('LXWNZMTOGBJKN9URNNUUBPLX5ARQAY', 'EVFUBNGJIYKRZCVN7LZZMZIYTBDLIT', RSA_PRIVATE_KEY);

        xero.call('GET', '/' + msg.match[2], null, function(err, json) {
            if (err) {
                log.error(err);
                msg.reply('Unable to contact Xero');
            }
            msg.reply(JSON.stringify(json));
        });
    });
};