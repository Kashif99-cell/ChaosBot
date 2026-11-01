
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'chaosphagesmp.play.hosting',
  port: 38573,
  username: 'ChaosBot',
  version: '1.21.4'
})

bot.on('login', () => {
  console.log('ChaosBot joined the server!')
})

bot.on('spawn', () => {
  console.log('ChaosBot is ready!')
})

bot.on('end', () => {
  console.log('ChaosBot disconnected.')
})

bot.on('error', (err) => {
  console.log('Bot error:', err.message)
})
