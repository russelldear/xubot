
module.exports = function(robot) {
    
    var RSA_PRIVATE_KEY = require('fs').readFileSync('privatekey.pem');

    var Xero = require('xero');

    console.log('this is working');

    var xero = new Xero('LXWNZMTOGBJKN9URNNUUBPLX5ARQAY', 'EVFUBNGJIYKRZCVN7LZZMZIYTBDLIT', RSA_PRIVATE_KEY);

    xero.call('GET', '/Users', null, function(err, json) {
            if (err) {
                log.error(err);
                return res.json(400, {error: 'Unable to contact Xero'});
            }
            return res.json(200, json);
        });
};