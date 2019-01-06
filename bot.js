const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = "!"
client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === prefix + 'help') {
    msg.reply('COMMANDS:');
    msg.reply('!ping,');
    msg.reply('new commands and features will come soon. Thanks for using, our website: https://www.funnybot.tk');
  }
  if (msg.content === 'hey'){
  msg.reply(', Hows it going??? Welcome');
            }
});

client.login(process.env.BOT_TOKEN);
