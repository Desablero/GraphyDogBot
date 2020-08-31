const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const kb = require ('./keyboard-buttons')
const keyboard = require('./keyboard')
const bot = new TelegramBot(config.tokenGraphy, {
    polling: {
        autoStart: true
    }
});
const helper = require ('./helper.js')
const inDev = "Раздел в разработке"
// ======================================================
helper.logStart()

var coutnOfSearch = 3

<<<<<<< HEAD


function count (){i=10;  i--
console.log(i)}
count();



bot.on('message', msg => {
    bot.sendMessage(helper.getChatId(msg), 'some text', {
        replay_markup: {
            keyboard: keyboard.home
        }
    })
})

=======
>>>>>>> parent of 0bf7525... *minor* [Stable]
// Команды
bot.onText((/\/start/i), (msg) => {
        let Text = {
        userName: `<b>${helper.getFirstName(msg)}</b>`,
        search: `<i>"Поиск"</i>`,
    }
        let greeting = `Привет ${Text.userName}, меня зовут Графи 🐶! \nЯ могу найти для тебя любую дискографию из моего списка, просто зайди в меню ${Text.search} и выбери желаемого исполнителя.`
        bot.sendMessage(helper.getChatId(msg), greeting, {parse_mode: 'HTML'})
    //     bot.sendMessage(helper.getChatId(msg), `Количество доступных поисков: ${count()}`, {
    //         reply_markup:{
    //     keyboard: keyboard.home
    // }
    //     })
})

bot.on('message',msg => {
    switch (msg.text) {
        case kb.profile:
            break
        case kb.search:
            break
        case kb.favorites:
            break
        case kb.setting:
            break
    }
})

bot.onText(/👤 Профиль/, (msg) => {
    bot.sendMessage(helper.getChatId(msg), `Premium аккаунт: *отключён* \nКоличество доступных поисков: ${coutnOfSearch}`, mMenu.profileMenu)
})
bot.onText(/🔎 Поиск/, (msg) => {
    bot.sendMessage(helper.getChatId(msg), 'Выберите язык на котором будем искать исполнителя', mMenu.searchMenu)
})
bot.onText(/🌟 Популярное/, (msg) => {
    bot.sendMessage(helper.getChatId(msg), 'Часто запрашиваемые дискографии:', mMenu.popularMenu)
})
bot.onText(/⚙ Настройки/, (msg) => {
    bot.sendMessage(helper.getChatId(msg), 'Что настраиваем?', mMenu.settingMenu)
})
bot.onText(/\/getinfo/igm, (msg) => {
    var date = new Date();
    bot.sendMessage (helper.getChatId(msg), "Message ID: "  + helper.getMessageId(msg) + "\n\nFrom: " + "\n User ID: " + helper.getChatId(msg) +
        "\n Frist Name: " + helper.getFirstName(msg) + "\n Username: " + helper.getUserName(msg) + "\n Language: " + helper.getLanguageCode(msg) + "\n Is bot: " + helper.getIsBot(msg) + "\n\nDate: " + helper.getDate() + "\nText: " + helper.getText(msg)+ "\n\n")
})

// Выбор языка
bot.on('callback_query', (query) => {
    let id = query.message.chat.id

    switch (query.data) {
        case 'EN_Alphabet':
            bot.sendMessage(id, "Выберите (или введите) с какой буквы начинается название исполнителя: ", mMenu.alphabetEN);
            break;
        case 'RU_Alphabet':
            bot.sendMessage(id, "Выберите (или введите) с какой буквы начинается название исполнителя: ", mMenu.alphabetRU);
            break;
    }
})

// Выбор русского исполнителя
bot.on('callback_query', (query) => {
    let id = query.message.chat.id

    switch (query.data) {
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
                                    text: 'ДДТ',
                                    url: 'https://t.me/joinchat/AAAAAFO1zkgKCIE-RDnWxw'
                                }
                            ],
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
                                text: 'Не существует исполнителей на букву "Ё"',
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

// Выбор зарубежного исполнителя
bot.on('callback_query', (query) => {
    let id = query.message.chat.id

    switch (query.data) {
        case 'Letter_back':
            bot.sendMessage(id, 'Выберите язык поиска:', searchMenu)
            break;
        case 'EN_A':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "A":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: config.lib.abba[0],
                                    url: config.lib.abba[1]
                                }
                            ],
                            [
                                {
                                    text: config.lib.acdc[0],
                                    url: config.lib.acdc[1]
                                }
                            ],
                            [
                                {
                                    text: 'Aerosmith',
                                    url: 'https://t.me/joinchat/AAAAAFgUsF1-0I6LwLpmoQ'
                                }
                            ],
                            [
                                {
                                    text: 'The Animals',
                                    url: 'https://t.me/joinchat/AAAAAFdOGk23UU5HkejnDg'
                                }
                            ],
                            [
                                {
                                    text: 'Anthrax',
                                    url: 'https://t.me/joinchat/AAAAAFiRw0PH-C_w2Z4LGg'
                                }
                            ],
                            [
                                {
                                    text: 'Architects',
                                    url: 'https://t.me/joinchat/AAAAAFFP_GKnysNRHwYK0g'
                                }
                            ],
                            [
                                {
                                    text: 'Avicii',
                                    url: 'https://t.me/joinchat/AAAAAEqGPvPUT7RDjB6MXQ'
                                }
                            ]

                        ]
                    }
                }
            )
            break
        case 'EN_B':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "B":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'The Beatles',
                                    url: 'https://t.me/joinchat/AAAAAEc1IXffplwx1uSiTA'
                                }
                            ],
                            [
                                {
                                    text: 'Bon Jovi',
                                    url: 'https://t.me/joinchat/AAAAAFZ77v2slUx4vTXJ8Q'
                                }
                            ],

                            [
                                {
                                    text: 'Boney M.',
                                    url: 'https://t.me/joinchat/AAAAAFTGqib6SEuwQ6RMXw'
                                }
                            ]
                        ]
                    }
                }
            )
            break
        case 'EN_C':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "C":', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Предложи свою группу на букву "С" в разделе "Обратная связь"',
                                    url: 'https://t.me'
                                }
                            ]
                        ]
                    }
                }
            )
            break
        case 'EN_D':
            bot.sendMessage(id, 'Музыкальные коллективы на букву "D":', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Dio',
                                url: 'https://t.me/joinchat/AAAAAFHN2vzkxOLxi1MueA'
                            }
                        ],
                        [
                            {
                                text: 'The Doors',
                                url: 'https://t.me/joinchat/AAAAAFIUHpkN4j13eZtCVg'
                            }
                        ]
                    ]
                }
            })
            break
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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
        case 'EN_A':
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

bot.on("polling_error", (errors) => console.log(errors));
