module.exports = function(robot) {
    
    robot.respond(/xero get( (\w+))?/i, function(msg) {

        var CronJob = require('cron').CronJob;
            new CronJob('* * * * * *', function() {
                console.log('You will see this message every second');
            }, null, true, 'Pacific/Auckland');
    });
}