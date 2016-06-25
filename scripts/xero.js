var Xero = require('xero');
 
console.log('this is working');

var xero = new Xero(CONSUMER_KEY, CONSUMER_SECRET, RSA_PRIVATE_KEY);
xero.call('GET', '/Users', null, function(err, json) {
        if (err) {
            log.error(err);
            return res.json(400, {error: 'Unable to contact Xero'});
        }
        return res.json(200, json);
    });