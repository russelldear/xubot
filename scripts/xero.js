
module.exports = function(robot) {
    
    robot.respond(/xero \w*/, function(msg) {

        var RSA_PRIVATE_KEY = require('fs').readFileSync('privatekey.pem');

        var Xero = require('xero');

        var xero = new Xero('LXWNZMTOGBJKN9URNNUUBPLX5ARQAY', 'EVFUBNGJIYKRZCVN7LZZMZIYTBDLIT', RSA_PRIVATE_KEY);

        console.log(msg.match[0]);
        console.log(msg.match[1]);
        console.log(msg.match[2]);
        

        xero.call('GET', '/Users', null, function(err, json) {
            if (err) {
                log.error(err);
                msg.reply('Unable to contact Xero');
            }
            msg.reply(JSON.stringify(json));
        });
    });
};