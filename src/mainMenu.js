const inDev = "Раздел в разработке"
module.exports = {
    // Главное меню
    mainMenu: {
        reply_markup: {
            keyboard: [
                ['👤 Профиль', '🔎 Поиск'],
                ['🌟 Популярное','⚙ Настройки' ]
            ]
        }
    },
    profileMenu: {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: '👑 Премиум аккаунт',
                        callback_data: "2"
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
    },
    searchMenu: {
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
    },
    popularMenu: {
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
    },
    settingMenu: {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: '🇷🇺 Сменить язык',
                        callback_data: '1'
                    },
                    {
                        text: '📝 Обратная связь',
                        url: 'https://t.me/GraphyFeedbackBot'
                    }
                ]
            ]
        }
    },
    alphabetRU: {
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
                        callback_data: 'Letter_chars'
                    },
                    {
                        text: '🔙',
                        callback_data: 'Letter_back'
                    }
                ],
            ]
        }
    },
    alphabetEN: {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'A',
                        callback_data: 'EN_A'
                    },
                    {
                        text: 'B',
                        callback_data: 'EN_B'
                    },
                    {
                        text: 'C',
                        callback_data: 'EN_C'
                    },
                    {
                        text: 'D',
                        callback_data: 'EN_D'
                    },
                    {
                        text: 'E',
                        callback_data: 'EN_E'
                    },
                    {
                        text: 'F',
                        callback_data: 'EN_F'
                    },
                    {
                        text: 'G',
                        callback_data: 'EN_G'
                    },
                ],
                [
                    {
                        text: 'H',
                        callback_data: 'EN_H'
                    },
                    {
                        text: 'I',
                        callback_data: 'EN_I'
                    },
                    {
                        text: 'J',
                        callback_data: 'EN_J'
                    },
                    {
                        text: 'K',
                        callback_data: 'EN_k'
                    },
                    {
                        text: 'L',
                        callback_data: 'EN_L'
                    },
                    {
                        text: 'M',
                        callback_data: 'EN_M'
                    },
                    {
                        text: 'N',
                        callback_data: 'EN_N'
                    },
                ],
                [

                    {
                        text: 'O',
                        callback_data: 'EN_O'
                    },
                    {
                        text: 'P',
                        callback_data: 'EN_P'
                    },
                    {
                        text: 'Q',
                        callback_data: 'EN_Q'
                    },
                    {
                        text: 'R',
                        callback_data: 'EN_R'
                    },
                    {
                        text: 'S',
                        callback_data: 'EN_S'
                    },
                    {
                        text: 'T',
                        callback_data: 'EN_T'
                    },
                    {
                        text: 'U',
                        callback_data: 'EN_U'
                    },
                ],
                [

                    {
                        text: 'V',
                        callback_data: 'EN_V'
                    },
                    {
                        text: 'W',
                        callback_data: 'EN_W'
                    },
                    {
                        text: 'X',
                        callback_data: 'EN_X'
                    },
                    {
                        text: 'Y',
                        callback_data: 'EN_Y'
                    },
                    {
                        text: 'Z',
                        callback_data: 'EN_Z'
                    },
                    {
                        text: '0-9',
                        callback_data: 'Letter_chars'
                    },
                    {
                        text: '🔙',
                        callback_data: 'Letter_back'
                    }
                ],
            ]
        }
    }
}