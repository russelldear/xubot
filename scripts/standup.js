module.exports = function(robot) {
    
    robot.respond(/xero get( (\w+))?/i, function(msg) {

        var cronJob = require('cron').CronJob;
        var tz = 'Pacific/Auckland';
	    new cronJob('0 0 19 23 * 1-5', workdaysNineAm, null, true, tz);
 	    new cronJob('0 */1 * * * *', everyFiveMinutes, null, true, tz);
  
        var room = "xero/rdtest2";
 
        var workdaysNineAm = function(){
            robot.messageRoom(room, 'Standup time!');
        }
 
        var everyFiveMinutes = function(){
            robot.messageRoom(room, 'Standup time!');
        }
        console.log('got here.');
    });
}