module.exports = (robot) ->
  robot.respond /hi|hello/i, (msg) ->
    msg.send "Yo."