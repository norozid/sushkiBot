const TelegramBot = require('node-telegram-bot-api');

const token = '5827575585:AAHSeiqP6jmEJNzDAQi59sLFN8eeeHepZaE';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
  const msgFull = msg.message_id;
  const fromId = msg.from.id;
  const messageId = msg.message_id;
  if (msgFull > 0) 
  {
  bot.sendMessage(msg.chat.id, 'Спасибо за мем лох')
  bot.forwardMessage(msg.chat_id = '@sushkismakomgroup', fromId, messageId); 
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
   bot.sendPhoto(chatId, 'img/704d3c2f6f31a479b94c742e7911820a.png')
  this.onceStart = true
        
  })
