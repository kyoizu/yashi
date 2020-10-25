const discord = require('discord.js');

const client = new discord.Client();

const prefix = '/';

const fs = require('fs');

const ytdl = require('ytdl-core');

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('YASHI is here, goshujin-sama!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'yashi'){
        client.commands.get('yashi').execute(message, args);
    }
    else if(command === 'halo'){
        if(message.member.roles.cache.has('769836747533713438')){
            message.channel.send('okaeri goshujin ^-^');
        }
        else{
        message.channel.send('Bacot Kontol!!');
        }
    }
    else if(command === 'baca'){
        if (!args.length){
            return message.channel.send(`https://www.nhentai.net/`);
        }
        message.channel.send(`mangga kang, https://www.nhentai.net/g/${args}`);
    }
});


client.login('NzY5NzU2OTg3NzU5OTE5MTE1.X5TqDw.-KElAbbmg1kCJyyelkz2DVe_lc4');