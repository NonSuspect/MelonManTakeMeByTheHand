const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.id === "546160878400307211" || msg.author.id === "566394557810475018") {
    msg.react('🏳️‍🌈');
  }
  if (msg.author.id !== "546160878400307211" || msg.author.id !== "566394557810475018") {
    msg.react('🍉');
    if (msg.content === 'ping') {
      msg.channel.send('pong');
    }
    if (msg.content === 'wing') {
      msg.channel.send('wong');
    }
  }
});

client.login('Njk5Njk5MDQ1MDI2ODg5NzM4.XpYZdQ.micC6JRplwM4E6wHZcOfWaymNIk');
