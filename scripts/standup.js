module.exports = function(robot) {
    
    var CronJob = require('cron').CronJob;
    new CronJob('00 45 19 * * 1-5', function() {
        robot.messageRoom('xero/rdtest2', 'Standup time!');
        console.log('You will see this message every second');
    }, null, true, 'Pacific/Auckland');
}