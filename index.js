
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'chaosphagesmp.play.hosting',
  port: 25956,
  username: 'ChaosBot',
  version: '1.21.4'
})

bot.on('login', () => {
  console.log('ChaosBot joined the server!')
})

bot.on('end', () => {
  console.log('ChaosBot disconnected.')
})

bot.on('error', (err) => {
  console.log('Bot error:', err.message)
})
