module.exports = {

    logStart(){
        bot.on("polling_error", (err) => console.log(err))
        console.log("All ok!")
    }
}

