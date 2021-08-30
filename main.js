const discord = require('discord.js');
const client = new discord.Client();
const prefix = ';';
const fs = require('fs');

client.commands = new discord.Collection();
client.events = new discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
})

client.login(process.env.token);

