const TelegramBot = require('node-telegram-bot-api'); // node js зависимость
const TOKEN = '894771621:AAHu1NFYyc5QKWH_5m5QQGco7VEVZUkXDUo'
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300, // милисекунд будет проходить между запросами клиента на сервер
        autoStart: true, // если юзер давал команду, но бот был выключен, тогда при включении бот обработает команду
        params: { // специальный объект для таймаута
            timeout: 10 // отвечает за таймаут между запросами
        }
    }
});
const debug = require("./helpers")/*  Polling - технология для связи клиента с сервером.
    Мы как клиент запускаем на сервере тг. сервис который ожидает обновлений*/

let search = {value: "/search", text: "Поиск"}
let setting = {value: "setting", text: "Настройки"}
let profile = {value: "/profile", text: `Профиль`}
let popular = {value: "popular", text: `Популярные`}


bot.onText(/\/start/, (msg) => {
    const userId = msg.chat.id;
    const greeting = `Привет, ` + msg.from.first_name + '! Меня зовут Графи 🐶 Граф! \nЯ могу найти для тебя любую дискографию из моего списка, просто зайди в меню "Поиск" и выбери желаемого исполнителя'
    const mainMenu = {
        reply_markup: {
            keyboard: [
                [profile.text, search.text],
                [popular.text, setting.text]
            ]
        }
    }
    bot.sendMessage(userId, greeting)
})


bot.onText(/Профиль/, (msg) => {
    const userId = msg.chat.id;

    const prof = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Премиум аккаунт',
                        callback_data: '1'
                    },
                    {
                        text: 'Реферальная система',
                        callback_data: '2'
                    }
                ],
                [
                    {
                        text: 'Избранные дискографии',
                        callback_data: '3'
                    }
                ]
            ]
        }
    }
    bot.sendMessage(userId, 'Premium аккаунт: *отключён* \nДоступно дискографий: 3', prof)
})


/*
// Служебное сообщение с инфой про юзера
bot.on ('message',(msg) => {
    console.log(msg)
})


bot.onText(/\/start (.+)/, (msg,[greeting]) => {
    const {chat: {id}} = msg


    bot.sendMessage('message', msg => {
        //const chatId = msg.chat.id
        // ONLINE Keyboard
        bot.sendMessage(chatId, "🐶", {
            reply_markup: {
                keyboard: [
                    [search, top],
                    [profile, setting]
                ]
            }
        })
    })
})




bot.sendMessage(chatId, 'На каком языке ищем?', {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'EN',
                    callback_data: '1'
                },

                {
                    text:'RU',
                    callback_data: '2'
                }
            ]
        ]
    }
})
});


// Задём инлайн кнопку при вызове кнопки "Поиск"
if (msg.text === "🔍 Поиск исполнителя" ) {
    bot.sendMessage (chatId, "Keyboard", {
        reply_markup: {
            inline_keyboard: [
                ['A', 'B']]}})


bot.sendMessage (chatId, "Keyboard", {
    reply_markup:{
        keyboard: [
            ['🔍 Поиск исполнителя']
            ['🐶 Профиль','⚙️Настройки'],
             ]}})


             inline_keyboard: [
                ['A', 'B'],
                ['A2','B2']
})
/*
bot.on("inline_query",query => {
    console.log(query)
    const results = []

    for (let i = 0; i<3; i++){
        results.push({
            id:i.toString(),
            type: 'article',
            title: `Title #${i}`,
            input_message_content: {
                message_text: `Article #${i} description should be here`
            }
        })
    }

    bot.answerInlineQuery(query.id, results, {
        cache_time: 0
    })
*/





console.log("All ok!")
bot.on("polling_error", (err) => console.log(err));