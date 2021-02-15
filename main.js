const discord = require('discord.js'); //up
const {Client} = require('discord.js');
const bot = new Client();
const client = new discord.Client();
const prefix = '/';
const fs = require('fs');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('YASHI is here, goshujin-sama!');
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "hei")
    {
        if(message.member.voice.channel && message.member.roles.cache.has('769836747533713438')) 
        {
            message.delete();
            let replies = ['heyhey.mp3', 'itzyhey.mp3']
            let random = Math.floor(Math.random() * replies.length);
            const connection = await message.member.voice.channel.join();
            connection.play(replies[random]);
            setTimeout(() => 
            {
                connection.disconnect();
            }, 3000)
        }
    }  
    else if(command === "win")
    {
        if(message.member.voice.channel && message.member.roles.cache.has('769836747533713438')) 
        {
            message.delete();
            const connec = await message.member.voice.channel.join();
            connec.play('ez4ence.mp3');
            setTimeout(() => 
            {
                connec.disconnect();
            }, 6500)
        }
    }
    else if(command == "absen")
    {
        message.delete();
        message.reply(" Sudah mengisi absen");
    }
    else if(command === 'ping'){
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
    else if(command === 'link'){
        client.commands.get('link').execute(message, args);
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
            message.channel.send('Terima kasih semuanya!!!');
        }
    }
    else if(command === `yshb`)
    {
        let msgargs = args.slice(0).join(" ");

        message.delete();
        message.channel.send("**"+msgargs+"**");
    }
    else if(command === `ysh`)
    {
        let msgargs = args.slice(0).join(" ");

        message.delete();
        message.channel.send(msgargs);
    }
    else if(command === `show`)
    {
        client.commands.get('show').execute(message, args);
    }
    
});



client.login(process.env.TOKEN); //

// afsbc04764