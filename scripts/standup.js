module.exports = function(robot) {
    
    var CronJob = require('cron').CronJob;
    new CronJob('00 57 8 * * 1-5', function() {
        robot.messageRoom('xero/api-engineering-internal', '@team : Standup time!');
    }, null, true, 'Pacific/Auckland'); 
}