/*
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
}) */


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

/*
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