const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  msg.guild.send('FunnyBot is Online');
});

var prefix = "!"
client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
