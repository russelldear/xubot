module.exports = (robot) ->

    robot.http("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .get() (err, res, body) ->
        console.log(err)
        console.log(res)
        console.log(body)
        