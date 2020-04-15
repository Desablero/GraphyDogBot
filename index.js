console.log("Bot has been started!")
const TelegramBot = require ("node-telegram-bot-api"); // node js зависимость
const TOKEN = "894771621:AAGbHb3xWCOjen98whdxLcxSlhn4WFND9ho";
const debug = require ("./helpers")/*  Polling - технология для связи клиента с сервером.
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

// экранируем "/" любой команды
bot.onText (/\/start/,msg => { // для экранирования слэша в рег. выражении нужно писать обратный слэш
    const {id} = msg.chat // создаём объект ид
    bot.sendMessage(id, debug(msg)) // отправляем по ид сообщение дэбага на запрос /start
})

bot.onText (/\help (.+)/, (msg, [sourse,match]) => { // (.+) значит что мы получаем некоторый остаток.
    // [sourse] - первый элем. масива, т.е. команда. [match] второй, т.е. сам текст
    const {id} = msg.chat;
    bot.sendMessage(id, debug(match)); // можно было написать не match, a [1], т.е. первый элем масива
})