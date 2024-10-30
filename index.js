const TelegramBot = require('node-telegram-bot-api');

const token = '5827575585:AAHWJSpOKHRQi9TZ3mesbp7OJqb4IbxNIs8';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
  const msgFull = msg.message_id;
  const fromId = msg.from.id;
  const messageId = msg.message_id;
  if (msgFull > 0) 
  {
  bot.sendMessage(msg.chat.id, 'Спасибо за мем лох')
  bot.forwardMessage(msg.chat_id = '-1001889469272', fromId, messageId); 
  }
  //console.log(msg)
  })


bot.on('message', msg => {
   const chatId = msg.chat.id;
  const text = msg.text
  if (text === '/start', this.onceStart) 
  {
   return false
  }
   bot.sendMessage(chatId, 'Бу испугался не бойся. Я друг. Я тебя не обижу. Иди сюда, иди ко мне, сядь рядом со мной. Посмотри мне в глаза. Ты видишь меня? Я тоже тебя вижу. Давай смотреть друг на друга до тех пор, пока ты не скинешь смешной мем. Ты не хочешь? Почему? Что-то не так?')
  this.onceStart = true
        
  })
