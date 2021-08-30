const discord = require('discord.js');
const client = new discord.Client();
const prefix = ';';
const fs = require('fs');

client.commands = new discord.Collection();
client.events = new discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
})

client.login('NzY5NzU2OTg3NzU5OTE5MTE1.X5TqDw.ei_8RMqbQz-AdKrIx-s2oxYH7H4');

