
module.exports = {
    logStart(){
        console.log("Bot has been started...")
    },
    getMessageId(msg){
        return msg.message_id
    },
    getChatId(msg){
        return msg.chat.id
    },
    getIsBot(msg){
        return msg.from.is_bot
    },
    getFirstName(msg){
        return msg.from.first_name
    },
    getLastName(msg){
        return msg.from.last_name
    },
    getUserName(msg){
        return msg.from.username
    },
    getLanguageCode(msg){
        return msg.from.language_code;
    },
    getDateInSec (msg){
        return msg.date
    },
    getDate (){
        var date = new Date();
        var year = date.getFullYear()
        var month = date.getMonth()+1
        var day = date.getDate()
        var hour = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        const currentDate = hour+':'+min+':'+sec+' | '+day+'.'+month+'.'+year
        return currentDate
    },
    getText (msg){
        return msg.text
    }
}

