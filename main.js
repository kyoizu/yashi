const { execFile } = require('child_process');
const discord = require('discord.js'); //up
const {Client, MessageAttachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const client = new discord.Client();
const prefix = '/';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

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
    else if(command === 'baca'){
        client.commands.get('baca').execute(message, args);
    }
    else if(command === 'profpic'){
        client.commands.get('profpic').execute(message, args);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'halo'){
        if(message.member.roles.cache.has('769836747533713438')){
            message.channel.send("okaeri goshujin ^-^");
        }
        else{
            message.channel.send(`Halo juga, Yashi sayang kamu <3`);
        }
    }
    else if(command === 'tpb'){
        return message.reply(`https://docs.google.com/forms/d/e/1FAIpQLSfJiEARWaYU5xNDSJ_EvqA6f0s8s4dbn5Vs7QXxBKejxOob9g/viewform`);
    }
    else if(command === 'pacis'){
        return message.reply(`https://students.unpad.ac.id/pacis/`);
    }
    else if(command === 'ty'){
        const taggedUser = message.mentions.users.first();
        if(message.member.roles.cache.has('769836747533713438')){
            if(message.mentions.users.size){
                const Embed = new discord.MessageEmbed()
                .setTitle(`Halo ${taggedUser.username}, Goshujin-sama mengucapkan terima kasih kepadamu!`)
                .setColor(0xFF0000)
                .setDescription(`ありがとうございました (＾▽＾)`)

                taggedUser.send(Embed);
            }
            else if(!message.mentions.users.size){
                message.channel.send(`Goshujin-sama mengucapakan terima kasih kepada semuanya!!!`);
            }
        }
        else if(message.mentions.users.size){
            const Embed = new discord.MessageEmbed()
            .setTitle(`Halo ${taggedUser.username}, ${message.author.username} mengucapakan terima kasih kepadamu!`)
            .setColor(0xFF0000)
            .setDescription(`ありがとうございました (＾▽＾)`)

            taggedUser.send(Embed);
        }
        else if(!message.mentions.users.size){
            message.channel.send(`Terima kasih semuanya!!!`);
        }
    }
    else if(command === `show`)
    {

    var options = {
        url: "https://yandex.com/images/search?text=" + args[0] + args [1],
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 

        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
    }
});


client.login(`NzY5NzU2OTg3NzU5OTE5MTE1.X5TqDw.-KElAbbmg1kCJyyelkz2DVe_lc4`); //NzY5NzU2OTg3NzU5OTE5MTE1.X5TqDw.-KElAbbmg1kCJyyelkz2DVe_lc4

// afsbc04764