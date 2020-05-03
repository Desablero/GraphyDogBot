/*
bot.onText((/\/start/i))) {(msg) => {
        const userId = msg.chat.id;
        const greeting = `Привет, ` + msg.from.first_name + '! Меня зовут Графи 🐶 Граф! \nЯ могу найти для тебя любую дискографию из моего списка, просто зайди в меню "Поиск" и выбери желаемого исполнителя'
        bot.sendMessage(userId, greeting, mainMenu)
    }} else if (

    bot.onText(/👤 Профиль/i, (msg) => {
        const userId = msg.chat.id;
        bot.sendMessage(userId, 'Premium аккаунт: *отключён* \nДоступно дискографий: 3', profileMenu)
    }) ) else if (

    bot.onText(/🔎 Поиск/i, (msg) => {
        const userId = msg.chat.id;
        bot.sendMessage(userId, 'Выберите язык на котором будем искать исполнителя', searchMenu)
    })) else if (

    bot.onText(/🌟 Популярное/i, (msg) => {
        const userId = msg.chat.id;
        bot.sendMessage(userId, 'Часто запрашиваемые дискографии:', popularMenu)
    })) else if (

    bot.onText(/⚙ Настройки/i, (msg) => {
        const userId = msg.chat.id;
        bot.sendMessage(userId, 'Что настраиваем?', settingMenu)
    })) else if (

    bot.onText((/\/getinfo/igm), (msg) => {
        const u_Id = msg.chat.id;
        const m_Id = msg.message_id;
        const Is_Bot = msg.from.is_bot;
        const f_Name = msg.from.first_name;
        const u_Name = msg.from.username;
        const l_Code = msg.from.language_code;
        const date = msg.date;
        const text = msg.text;

        function curentDate (){let years = date / 31536000; return  month = (""+years).split(".");}

        bot.sendMessage (u_Id, "Message ID: "  + m_Id + "\n\nFrom: " + "\n User ID: " + u_Id + "\n Is bot: " + Is_Bot +
            "\n Frist Name: " + f_Name + "\n Username: " + u_Name + "\n Language: " + l_Code + "\n\nDate: " + date + "\nText: " + text + "\n\n" + curentDate())

    })








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