const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на ваш токен
const bot = new TelegramBot('7511337826:AAGrQBzbS_gmZ2uE_QDZhTG8KNYrIGMrnGY', { polling: true });

// Обработка сообщений от пользователей
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Отправка кнопки для открытия WebView
    bot.sendMessage(chatId, 'Открыть веб-приложение', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Открыть веб-приложение',
                    web_app: { url: 'https://zaburdaev.space/' }
                }]
            ]
        }
    });
});
