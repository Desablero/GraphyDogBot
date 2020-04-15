const TelegramBot = require ("node-telegram-bot-api"); // node js зависимость
const TOKEN = "894771621:AAGbHb3xWCOjen98whdxLcxSlhn4WFND9ho";

const bot = new TelegramBot (TOKEN, {
   polling: true // технология для связи клиента с сервером. Мы как клиент запускаем на сервере тг. сервис который
       // ожидает обновлений
})

bot.on ("message", (msg) => {
    console.log(msg);
    bot.sendMessage(msg.chat.id, "Здравствуй, " + msg.from.first_name)
})