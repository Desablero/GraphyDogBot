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

// Парсинг HTML and Markdown

bot.on ("message", msg=> {

    const markdown = `
            _Exemple of markdown:_
            [Markdown Style](https://core.telegram.org/bots/api#markdown-style)
            `
    bot.sendMessage(msg.chat.id,markdown, {
        parse_mode: "Markdown"
    })
    
    const html =`<strong>Hello, ${msg.from.first_name}</strong>
    <em>HTML Style:</em>
    <a href="https://core.telegram.org/bots/api#html-style">HTML style in Telegram</a>
    <pre>
        ${debug(msg)}
    </pre>
    `
        bot.sendMessage(msg.chat.id, html, {
            parse_mode: "HTML"
        })
            })
