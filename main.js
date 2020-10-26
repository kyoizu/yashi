const discord = require('discord.js'); //up
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
            message.channel.send("okaeri goshujin ^-^");
        }
        else{
        message.channel.send('Bacot Kontol!!');
        }
    }
    else if(command === 'baca'){
        const amount = parseInt(args[0]);

        if (!args[0]){
            return message.channel.send(`https://www.nhentai.net/`);
        }
        else if(isNaN(amount)){
            message.channel.send(`mangga kang, https://www.nhentai.net/tag/${args[0]}`);
            message.channel.send("Jangan lupa nyalain VPNnya ya, kaka cabul ☝( ◠‿◠ )☝");
        }
        else{
            message.channel.send(`Mangga kang, https://www.nhentai.net/g/${args[0]}`);
            message.channel.send('Jangan lupa nyalain VPNnya ya, kaka cabul ☝( ◠‿◠ )☝');
        }

    }
    else if(command === 'tpb'){
        return message.reply(`https://docs.google.com/forms/d/e/1FAIpQLSfJiEARWaYU5xNDSJ_EvqA6f0s8s4dbn5Vs7QXxBKejxOob9g/viewform`);
    }
    else if(command === 'pacis'){
        return message.reply(`https://paus.unpad.ac.id/oauth/sign-in`);
    }
    else if(command === 'profpic'){
        const taggedUser = message.mentions.users.first();

        if(message.member.roles.cache.has('769836747533713438')){
            return message.channel.send(`Ini profile picnya goshujin-sama >///< <${message.author.displayAvatarURL({format: `png`, dynamic: true})}>`);
        }
        else if(!message.mentions.users.size){
            return message.channel.send(`Profile picture mu ini <${message.author.displayAvatarURL({format: 'png', dynamic: true})}>`);
        }
        return message.channel.send(`Profile picturenya ${taggedUser.username} ini <${message.taggedUser.displayAvatarURL({format: `png`, dynamic: true})}>`);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});


client.login(process.env.token);

// afsbc04764