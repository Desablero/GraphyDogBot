console.log("Bot has been started!")
const TelegramBot = require ("node-telegram-bot-api"); // node js зависимость
const TOKEN = "894771621:AAGbHb3xWCOjen98whdxLcxSlhn4WFND9ho";
/*  Polling - технология для связи клиента с сервером.
    Мы как клиент запускаем на сервере тг. сервис который ожидает обновлений*/
const bot = new TelegramBot (TOKEN, {
   polling: {
       interval: 300, // милисекунд будет проходить между запросами клиента на сервер
       autoStart: true, // если юзер давал команду, но бот был выключен, тогда при включении бот обработает команду
       params: { // специальный объект для таймаута
           timeout: 10 // отвечает за таймаут между запросами
       }
   }
})

bot.on ("message", (msg) => {// bot.on - прослушка события (а именно message. msg это Callback. => стрелочная ф-я
    console.log(msg);
    bot.sendMessage(msg.chat.id, "Здравствуй, " + msg.from.first_name) // bot.sendM.. это ответ ботом
})