
module.exports = function(robot) {
    
    robot.respond(/xero users/, function(msg) {

        var RSA_PRIVATE_KEY = require('fs').readFileSync('privatekey.pem');

        var Xero = require('xero');

        console.log('this is working');

        var xero = new Xero('LXWNZMTOGBJKN9URNNUUBPLX5ARQAY', 'EVFUBNGJIYKRZCVN7LZZMZIYTBDLIT', RSA_PRIVATE_KEY);

        xero.call('GET', '/Users', null, function(err, json) {
            if (err) {
                log.error(err);
                msg.reply('Unable to contact Xero');
            }
            msg.reply(JSON.stringify(json));
        });
    });
};