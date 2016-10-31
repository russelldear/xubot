module.exports = function(robot) {
    
    var CronJob = require('cron').CronJob;
    new CronJob('00 42 9 * * 1-5', function() {
        robot.messageRoom('xero/api-engineering-internal', '@team : Scrum-of-scrums time!');
    }, null, true, 'Pacific/Auckland'); 
}