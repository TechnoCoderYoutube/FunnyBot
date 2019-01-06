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
    msg.reply('hey');
    msg.reply('!moderator');
    msg.reply('new commands and features will come soon. Thanks for using, our website: https://www.funnybot.tk');
    console.log('Help Command Pressed in' + msg.guild.name);
  }
  if (msg.content === 'hey'){
  msg.reply('Hows it going??? Welcome');
            }
    if (msg.content === prefix + 'moderator'){
  msg.reply('To be a Moderator, You need to fill in this form: https://goo.gl/forms/T7Lrh48JFQKv9wNY2');
            }
});

client.login(process.env.BOT_TOKEN);
