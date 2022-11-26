const TelegramBot = require('node-telegram-bot-api');

const token = '5827575585:AAHSeiqP6jmEJNzDAQi59sLFN8eeeHepZaE';

const bot = new TelegramBot(token, {polling: true});

const chats = {} 


const start = () => {
  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (msg.from.username === 'tachvnkin') {
      await bot.sendMessage(chatId, 'Не пиши сюда долбоеб')
    }
    
    if (text === '/start') {
      return bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/1.webp')
    }
  
    if (text === '/game') {
      await bot.sendMessage(chatId, 'Загадай число от 1 до 10')
      const randomNumber = Math.floor (Math.random() * 10)
      chats[chatId] = randomNumber;
      return bot.sendMessage(chatId, 'Теперь напиши')
    }
  
   // if {
    //  return bot.sendMessage(chatId, 'Your message' + ' ' + text) 
   // }

    //return bot.sendPhoto(chatId, 'https://www.meme-arsenal.com/memes/704d3c2f6f31a479b94c742e7911820a.jpg')
  
    //console.log(msg)
  })
}

start ()