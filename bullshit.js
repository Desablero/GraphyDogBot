/*
const inlineMenu = [
    {
        title: '👤 Профиль:',
        buttons: [
            [{
                text: '👑 Премиум аккаунт',
                callback_data: "1_1" // вместо callback_data можно юзать url:
            }],
            [{
                text: '👥 Реферальная система',
                callback_data: '1_2'
            }],
            [{
                text: '⭐ Избранные дискографии',
                callback_data: '1_3'
            }]

        ]
    },
    {
        title: '🔎 Выберите язык на котором будем искать исполнителя:',
        buttons: [
            [{
                text: 'EN',
                callback_data: '2_1'
            }],
            [{
                text: 'RU',
                callback_data: '2_2'
            }]
        ]
    }
]

bot.on('collback_query',query => {
    const {chat, message_id, text} = query.message
    const userId = msg.chat.id;

    switch (query.data) {
        case 'EN':
            bot.sendMessage(userId,alphabetEN)
            break
    }


    bot.answerCallbackQuery({
        callback_query_id: query.id
    })
})

bot.onText(/\/start (.+)/, (msg,[greeting]) => {
    const {chat: {id}} = msg


    bot.sendMessage('message', msg => {
        //const chatId = msg.chat.id
        // ONLINE Keyboard
        bot.sendMessage(chatId, "🐶", {
            reply_markup: {
                keyboard: [
                    ["search.name"],
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
}) */
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




}) */