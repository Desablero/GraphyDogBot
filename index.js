const TelegramBot = require('node-telegram-bot-api'); // node js зависимость
const TOKEN = '894771621:AAHu1NFYyc5QKWH_5m5QQGco7VEVZUkXDUo'
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300, // мил.сек. будет проходить между запросами клиента на сервер
        autoStart: true, // если юзер давал команду, но бот был выключен, тогда при включении бот обработает команду
        params: { // специальный объект для таймаута
            timeout: 10 // отвечает за таймаут между запросами
        }
    }
});
const debug = require("./helpers")/*  Polling - технология для связи клиента с сервером. Мы как клиент запускаем на сервере тг. сервис который ожидает обновлений*/


let search = {value: "/search", text: "🔎 Поиск"}
let setting = {value: "setting", text: "⚙ Настройки"}
let profile = {value: "/profile", text: "👤 Профиль"}
let popular = {value: "popular", text: "🌟 Популярные"}

const mainMenu = {
    reply_markup: {
        keyboard: [
            [profile.text, search.text],
            [popular.text, setting.text]
        ]
    }
}
const profileMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '👑 Премиум аккаунт',
                    callback_data: "" // вместо callback_data можно юзать url: 
                },
                {
                    text: '👥 Реферальная система',
                    callback_data: '2'
                }
            ],
            [
                {
                    text: '⭐ Избранные дискографии',
                    callback_data: '3'
                }
            ]
        ]
    }
}
const shearchMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '🇬🇧 EN',
                    callback_data: '1'
                },
                {
                    text: '🇷🇺 RU',
                    callback_data: '2'
                }
            ]
        ]
    }
}
const popularMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'EN',
                    callback_data: '1'
                },
                {
                    text: 'RU',
                    callback_data: '2'
                }
            ]
        ]
    }
}
const settingMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '🇷🇺 Сменить язык',
                    callback_data: '1'
                },
                {
                    text: '📝 Обратная связь',
                    callback_data: '2'
                }
            ]
        ]
    }
}
const alphabetRU = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'А',
                    callback_data: '1'
                },
                {
                    text: 'Б',
                    callback_data: '2'
                },
                {
                    text: 'В',
                    callback_data: '2'
                },
                {
                    text: 'Г',
                    callback_data: '2'
                },
                {
                    text: 'Д',
                    callback_data: '2'
                },
                {
                    text: 'Е',
                    callback_data: '2'
                },
                {
                    text: 'Ё',
                    callback_data: '1'
                },
            ],
            [
                {
                    text: 'Ж',
                    callback_data: '2'
                },
                {
                    text: 'З',
                    callback_data: '2'
                },
                {
                    text: 'И',
                    callback_data: '2'
                },
                {
                    text: 'Й',
                    callback_data: '2'
                },
                {
                    text: 'К',
                    callback_data: '2'
                },
                {
                    text: 'Л',
                    callback_data: '2'
                },
                {
                    text: 'М',
                    callback_data: '1'
                }

            ],
            [
                {
                    text: 'Н',
                    callback_data: '2'
                },
                {
                    text: 'О',
                    callback_data: '2'
                },
                {
                    text: 'Р',
                    callback_data: '2'
                },
                {
                    text: 'П',
                    callback_data: '2'
                },
                {
                    text: 'С',
                    callback_data: '2'
                },
                {
                    text: 'Т',
                    callback_data: '1'
                },
                {
                    text: 'У',
                    callback_data: '2'
                }

            ],
            [
                {
                    text: 'Ф',
                    callback_data: '2'
                },
                {
                    text: 'Х',
                    callback_data: '2'
                },
                {
                    text: 'Ц',
                    callback_data: '2'
                },
                {
                    text: 'Ч',
                    callback_data: '2'
                },
                {
                    text: 'Ш',
                    callback_data: '1'
                },
                {
                    text: 'Щ',
                    callback_data: '2'
                },
                {
                    text: 'Э',
                    callback_data: '2'
                }


            ],

            [
                {
                    text: 'Ю',
                    callback_data: '2'
                },
                {
                    text: 'Я',
                    callback_data: '2'
                },
                {
                    text: '0-9',
                    callback_data: '2'
                },
                {
                    text: '🔙',
                    callback_data: '2'
                }
            ],
        ]
    }
}
const alphabetEN = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'A',
                    callback_data: '1'
                },
                {
                    text: 'B',
                    callback_data: '2'
                },
                {
                    text: 'C',
                    callback_data: '2'
                },
                {
                    text: 'D',
                    callback_data: '2'
                },
                {
                    text: 'E',
                    callback_data: '2'
                },
                {
                    text: 'F',
                    callback_data: '2'
                },
                {
                    text: 'G',
                    callback_data: '1'
                },
            ],
            [
                {
                    text: 'H',
                    callback_data: '2'
                },
                {
                    text: 'I',
                    callback_data: '2'
                },
                {
                    text: 'J',
                    callback_data: '2'
                },
                {
                    text: 'K',
                    callback_data: '2'
                },
                {
                    text: 'L',
                    callback_data: '2'
                },
                {
                    text: 'M',
                    callback_data: '1'
                },
                {
                    text: 'N',
                    callback_data: '2'
                },
            ],
            [

                {
                    text: 'O',
                    callback_data: '2'
                },
                {
                    text: 'P',
                    callback_data: '2'
                },
                {
                    text: 'Q',
                    callback_data: '2'
                },
                {
                    text: 'R',
                    callback_data: '2'
                },
                {
                    text: 'S',
                    callback_data: '1'
                },
                {
                    text: 'T',
                    callback_data: '2'
                },
                {
                    text: 'U',
                    callback_data: '2'
                },
            ],
            [

                {
                    text: 'V',
                    callback_data: '2'
                },
                {
                    text: 'W',
                    callback_data: '2'
                },
                {
                    text: 'X',
                    callback_data: '2'
                },
                {
                    text: 'Y',
                    callback_data: '1'
                },
                {
                    text: 'Z',
                    callback_data: '2'
                },
                {
                    text: '0-9',
                    callback_data: '2'
                },
                {
                    text: '🔙',
                    callback_data: '2'
                }
            ],
        ]
    }
}


bot.onText((/\/start/), (msg) => {
    const userId = msg.chat.id;// экранируем /start & /go
    const greeting = `Привет, ` + msg.from.first_name + '! Меня зовут Графи 🐶 Граф! \nЯ могу найти для тебя любую дискографию из моего списка, просто зайди в меню "Поиск" и выбери желаемого исполнителя'
    bot.sendMessage(userId, greeting, mainMenu)
})

bot.onText(/👤 Профиль/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Premium аккаунт: *отключён* \nДоступно дискографий: 3', profileMenu)
})

bot.onText(/🔎 Поиск/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Выберите язык на котором будем искать исполнителя', shearchMenu)
})

bot.onText(/🌟 Популярное/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Часто запрашиваемые дискографии:', popularMenu)
})

bot.onText(/⚙ Настройки/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Что настраиваем?', settingMenu)
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