const TelegramBot = require('node-telegram-bot-api'); // node js зависимость
const TOKEN = '894771621:AAHu1NFYyc5QKWH_5m5QQGco7VEVZUkXDUo'
const bot = new TelegramBot(TOKEN, { //объект на который мы можем навешивать наши обработчики событий.
    polling: {
        interval: 300, // мил.сек. будет проходить между запросами клиента на сервер
        autoStart: true, // если юзер давал команду, но бот был выключен, тогда при включении бот обработает команду
        params: { // специальный объект для таймаута
            timeout: 10 // отвечает за таймаут между запросами
        }
    }
});
const debug = require("./helpers")/*  Polling - технология для связи клиента с сервером. Мы как клиент запускаем на сервере тг. сервис который ожидает обновлений*/
bot.on("polling_error", (errors) => console.log(errors)); // выводим в консоль ошибки обращения бота к апи телеграм

let search = {value: "/search", text: "🔎 Поиск"}
let setting = {value: "/setting", text: "⚙ Настройки"}
let profile = {value: "/profile", text: "👤 Профиль"}
let popular = {value: "/popular", text: "🌟 Популярное"}
var inDev = "Раздел в разработке"


bot.onText((/\/start/), (msg) => {// экранируем /start & /go
    const userId = msg.chat.id;
    const greeting = `Привет, ` + msg.from.first_name + '! Меня зовут Графи 🐶 Граф! \nЯ могу найти для тебя любую дискографию из моего списка, просто зайди в меню "Поиск" и выбери желаемого исполнителя'
    bot.sendMessage(userId, greeting, mainMenu)
})

bot.onText(/👤 Профиль/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Premium аккаунт: *отключён* \nДоступно дискографий: 3', profileMenu)
})

bot.onText(/🔎 Поиск/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Выберите язык на котором будем искать исполнителя', searchMenu)
})

bot.onText(/🌟 Популярное/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Часто запрашиваемые дискографии:', popularMenu)
})

bot.onText(/⚙ Настройки/, (msg) => {
    const userId = msg.chat.id;
    bot.sendMessage(userId, 'Что настраиваем?', settingMenu)
})

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
                    callback_data: "2" // вместо callback_data можно юзать url:
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
const searchMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '🇬🇧 EN',
                    callback_data: 'EN_Alphabet'
                },
                {
                    text: '🇷🇺 RU',
                    callback_data: 'RU_Alphabet'
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
                    text: inDev,
                    callback_data: '1'
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
                    callback_data: 'RU_А'
                },
                {
                    text: 'Б',
                    callback_data: 'RU_Б'
                },
                {
                    text: 'В',
                    callback_data: 'RU_В'
                },
                {
                    text: 'Г',
                    callback_data: 'RU_Г'
                },
                {
                    text: 'Д',
                    callback_data: 'RU_Д'
                },
                {
                    text: 'Е',
                    callback_data: 'RU_Е'
                },
                {
                    text: 'Ё',
                    callback_data: 'RU_Ё'
                },
            ],
            [
                {
                    text: 'Ж',
                    callback_data: 'RU_Ж'
                },
                {
                    text: 'З',
                    callback_data: 'RU_З'
                },
                {
                    text: 'И',
                    callback_data: 'RU_И'
                },
                {
                    text: 'Й',
                    callback_data: 'RU_Й'
                },
                {
                    text: 'К',
                    callback_data: 'RU_К'
                },
                {
                    text: 'Л',
                    callback_data: 'RU_Л'
                },
                {
                    text: 'М',
                    callback_data: 'RU_М'
                }

            ],
            [
                {
                    text: 'Н',
                    callback_data: 'RU_Н'
                },
                {
                    text: 'О',
                    callback_data: 'RU_О'
                },
                {
                    text: 'Р',
                    callback_data: 'RU_Р'
                },
                {
                    text: 'П',
                    callback_data: 'RU_П'
                },
                {
                    text: 'С',
                    callback_data: 'RU_С'
                },
                {
                    text: 'Т',
                    callback_data: 'RU_Т'
                },
                {
                    text: 'У',
                    callback_data: 'RU_У'
                }

            ],
            [
                {
                    text: 'Ф',
                    callback_data: 'RU_Ф'
                },
                {
                    text: 'Х',
                    callback_data: 'RU_Х'
                },
                {
                    text: 'Ц',
                    callback_data: 'RU_Ц'
                },
                {
                    text: 'Ч',
                    callback_data: 'RU_Ч'
                },
                {
                    text: 'Ш',
                    callback_data: 'RU_Ш'
                },
                {
                    text: 'Щ',
                    callback_data: 'RU_Щ'
                },
                {
                    text: 'Э',
                    callback_data: 'RU_Э'
                }


            ],

            [
                {
                    text: 'Ю',
                    callback_data: 'RU_Ю'
                },
                {
                    text: 'Я',
                    callback_data: 'RU_Я'
                },
                {
                    text: '0-9',
                    callback_data: 'RU_0-9'
                },
                {
                    text: '🔙',
                    callback_data: 'Letter_back'
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
                    callback_data: 'Letter_back'
                }
            ],
        ]
    }
}

// Выбор языка
bot.on('callback_query', (query) => {
    let id = query.message.chat.id

    switch (query.data) {
        case 'EN_Alphabet':
            bot.sendMessage(id, "Выберите (или введите) с какой буквы начинается название исполнителя: ", alphabetEN);
            break;
        case 'RU_Alphabet':
            bot.sendMessage(id, "Выберите (или введите) с какой буквы начинается название исполнителя: ", alphabetRU);
            break;
    }
})

// Выбор русского исполнителя
bot.on('callback_query', (query) => {
    let id = query.message.chat.id

    switch (query.data) {
        case 'Letter_back':
            bot.sendMessage(id, 'Выберите язык на котором будем искать исполнителя', searchMenu)
            break;
        case 'RU_А':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "А":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Али́са',
                                    url: 'https://t.me/joinchat/AAAAAEnJtK-cXRwMzTjcSw'
                                }
                            ],
                            [
                                {
                                    text: 'АукцЫо́н',
                                    url: 'https://t.me/joinchat/AAAAAFepkfoU-qIreo61Xg'
                                }
                            ]

                        ]
                    }
                }
            )
            break
        case 'RU_Б':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Б":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Бен Ганн',
                                    url: 'https://t.me/joinchat/AAAAAEn0W8Mw67gSsj4dpQ'
                                }
                            ],
                            [
                                {
                                    text: 'Би-2',
                                    url: 'https://t.me/joinchat/AAAAAFhnGHRq71fHhPkVBw'
                                }
                            ],

                            [
                                {
                                    text: 'Браво',
                                    url: 'https://t.me/joinchat/AAAAAFiR8_d8Eud25_wxNQ'
                                }
                            ],
                            [
                                {
                                    text: 'Бумбокс',
                                    url: 'https://t.me/joinchat/AAAAAFY2PntzJvdJW8VOzw'
                                }
                            ]

                        ]
                    }
                }
            )
            break
        case 'RU_В':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "В":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Валенти́н Стры́кало',
                                    url: 'https://t.me/joinchat/AAAAAFkNwMU9yLUzmRi14w'
                                }
                            ],
                            [
                                {
                                    text: 'Вопли Видоплясова',
                                    url: 'https://t.me/joinchat/AAAAAEuQjHyP0UuZXCxiwg'
                                }
                            ],
                            [
                                {
                                    text: 'Время и Стекло',
                                    url: 'https://t.me/joinchat/AAAAAFhm2DYv777_WteRTA'
                                }
                            ],
                            [
                                {
                                    text: 'Высоцкий',
                                    url: 'https://t.me/joinchat/AAAAAFa45mkWNgNrhbkgPQ'
                                }
                            ]
                        ]
                    }
                }
            )
            break
        case 'RU_Г':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Г":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Гра́дусы',
                                url: 'https://t.me/joinchat/AAAAAFHZGCpdPc5En321eA'
                            }
                        ],
                        [
                            {
                                text: 'Грибы',
                                url: 'https://t.me/joinchat/AAAAAEoi7jlxo_DnWsE5Fg'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Д':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Д":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Дискотека Авария',
                                    url: 'https://t.me/joinchat/AAAAAEeKTOLCtoJph8h-_w'
                                }
                            ],
                            [
                                {
                                    text: 'Друга Ріка',
                                    url: 'https://t.me/joinchat/AAAAAFO8rkssKyonctLMfg'
                                }
                            ]
                        ]
                    }
                }
            )
            break
        case 'RU_Е':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Е":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Ева',
                                    url: 'https://t.me/joinchat/AAAAAFXmmwgDDYzJ99XOmQ'
                                }
                            ]
                        ]
                    }
                }
            )
            break
        case 'RU_Ё':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ё":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ],
                    ]
                }
            })
            break
        case 'RU_Ж':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ж":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Жуки́',
                                url: 'https://t.me/joinchat/AAAAAFGeWBidCLUb4Eld9A'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_З':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "З":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Запрещённые барабанщики',
                                url: 'https://t.me/joinchat/AAAAAFNYQ9oaPZo_brWOMQ'
                            }
                        ],
                        [
                            {
                                text: 'Зве́ри',
                                url: 'https://t.me/joinchat/AAAAAEvZEFSMVNDHAOGUFg'
                            }
                        ],
                        [
                            {
                                text: 'Земля́не',
                                url: 'https://t.me/joinchat/AAAAAFbS0vfFF2GSvQM_Kw'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_И':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "И":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Й':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Й":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_К':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "К":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Каста',
                                url: 'https://t.me/joinchat/AAAAAFGbL_9JMprFEsWCww'
                            }
                        ],
                        [
                            {
                                text: 'КимаКима',
                                url: 'https://t.me/joinchat/AAAAAFFR8lEgpTh0l-0Cgg'
                            }
                        ],
                        [
                            {
                                text: 'Кино́',
                                url: 'https://t.me/joinchat/AAAAAFHHZ14sUT9fZKminA'
                            }
                        ],
                        [
                            {
                                text: 'Кипе́лов',
                                url: 'https://t.me/joinchat/AAAAAEkvD3lRFwQN-HwCzw'
                            }
                        ],
                        [
                            {
                                text: 'Король и Шут',
                                url: 'https://t.me/joinchat/AAAAAEl7Fy8-_N1iwmcipQ'
                            }
                        ],
                        [
                            {
                                text: 'Красная плесень',
                                url: 'https://t.me/joinchat/AAAAAEoazEbCq-N8A95M4w'
                            }
                        ],
                        [
                            {
                                text: 'Кровосто́к',
                                url: 'https://t.me/joinchat/AAAAAEqHZVMe80j6_3LDMQ'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Л':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Л":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Ленингра́д',
                                url: 'https://t.me/joinchat/AAAAAFVd7ja74lXafi6PCQ'
                            }
                        ],
                        [
                            {
                                text: 'Любэ́',
                                url: 'https://t.me/joinchat/AAAAAFJk0jr8xaTV45Z1hg'
                            }
                        ],
                        [
                            {
                                text: 'Ляпис Трубецкой',
                                url: 'https://t.me/joinchat/AAAAAFQTMEWfRydX7TK29A'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_М':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "М":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Машина времени',
                                url: 'https://t.me/joinchat/AAAAAFcX45CjUa1vuRtiZA'
                            }
                        ],
                        [
                            {
                                text: 'Мумий Тролль',
                                url: 'https://t.me/joinchat/AAAAAFgeF8f_QnAj-Grkvw'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Н':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Н":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Наут́илус ',
                                url: 'https://t.me/joinchat/AAAAAFZYISpxP-yZ_Lgo1A'
                            }
                        ],
                        [
                            {
                                text: 'Нейромонах Феофан',
                                url: 'https://t.me/joinchat/AAAAAFksQqqSexSxIXnOUA'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_О':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "О":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Один в каноэ',
                                url: 'https://t.me/joinchat/AAAAAETZM5zgw1DiQB8e7g'
                            }
                        ],
                        [
                            {
                                text: 'Океан Ельзи',
                                url: 'https://t.me/joinchat/AAAAAFDLAPWZtCy5bSvcCw'
                            }
                        ],
                        [
                            {
                                text: 'Отпетые мошенники',
                                url: 'https://t.me/joinchat/AAAAAFRBCt0g-6R7eN9Z0w'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_П':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "П":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Парк Го́рького',
                                url: 'https://t.me/joinchat/AAAAAE_zXFZMsQHWcL0KOQ'
                            }
                        ],
                        [
                            {
                                text: 'Плач Єремії',
                                url: 'https://t.me/joinchat/AAAAAEWVBuNsodpZICYugA'
                            }
                        ],
                        [
                            {
                                text: 'Порнофильмы',
                                url: 'https://t.me/joinchat/AAAAAFCMUXfiXWmstA8aHw'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Р':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Р":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_С':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "C":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Се́верный Флот',
                                url: 'https://t.me/joinchat/AAAAAFR0EwQjmJiHS1E5CA'
                            }
                        ],
                        [
                            {
                                text: 'СКАЙ',
                                url: 'https://t.me/joinchat/AAAAAFdquY01_zycl34jhQ'
                            }
                        ],
                        [
                            {
                                text: 'Скрябін',
                                url: 'https://t.me/joinchat/AAAAAE_yUPC0dwZJpFz6GQ'
                            }
                        ],
                        [
                            {
                                text: 'Сплин',
                                url: 'https://t.me/joinchat/AAAAAExodDxlTSJLgWhGrw'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Т':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Т":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'ТІК',
                                url: 'https://t.me/joinchat/AAAAAFdpGZBKcIsl4hCrfg'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_У':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "У":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Умка и Броневик',
                                url: 'https://t.me/joinchat/AAAAAEgtrpxaN0jEEoof2g'
                            }
                        ],
                        [
                            {
                                text: 'Успешная группа',
                                url: 'https://t.me/joinchat/AAAAAFYudL-lc0zk1I8LUQ'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Ф':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ф":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Х':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Х":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Хлеб',
                                url: 'https://t.me/joinchat/AAAAAFW6JTqAWV9BkWb4Qw'
                            }
                        ],
                        [
                            {
                                text: 'Хуй забей',
                                url: 'https://t.me/joinchat/AAAAAEfwmG9JQPOOqinpTg'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Ц':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ц":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Ч':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ч":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Чёрный Обели́ск',
                                url: 'https://t.me/joinchat/AAAAAEhIf4GfAJyhz7lJ7A'
                            }
                        ],
                        [
                            {
                                text: 'Чиж & Co',
                                url: 'https://t.me/joinchat/AAAAAEu3d--qNS1pnLBoRQ'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Ш':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ш":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Щ':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Щ":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Э':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Э":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Ю':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Ю":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Ю-Питер',
                                url: 'https://t.me/joinchat/AAAAAE6CR9YkfvVkJrSD_A'
                            }
                        ]
                    ]
                }
            })
            break
        case 'RU_Я':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "Я":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: inDev,
                                url: 'https://t.me'
                            }
                        ]
                    ]
                }
            })
            break
    }
})


bot.on("polling_error", (err) => console.log(err));
console.log("All ok!")


