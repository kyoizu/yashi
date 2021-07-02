const discord = require('discord.js');
const {Client} = require('discord.js');
const client = new discord.Client();
const prefix = ';';
const fs = require('fs');

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter((file) => file.endsWith('.js'));
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
    let msgargs = args.slice(0).join();
    let result = msgargs.replace(',', ' ');

    switch(command) {
        case "absen":
            message.delete();
            message.reply(" Sudah mengisi absen");
        break;
        case "halo":
            message.channel.send(`Halo juga, Yashi sayang kamu <3`);
        break;
        case "ysh":
            message.delete();
            message.channel.send(result);
        break;
        case "yshb":
            message.delete();
            message.channel.send('***'+result+'***');
        break;
        case "hei":
            client.commands.get('hei').execute(message);
        break;
        case "hentai":
            client.commands.get('hentai').execute(message);
        break;
        case "win":
            client.commands.get('win').execute(message);
        break;
        case "ping":
            client.commands.get('ping').execute(message);
        break;
        case "baca":
            client.commands.get('baca').execute(message, args);
        break;
        case "profpic":
            client.commands.get('profpic').execute(message, args);
        break;
        case "help":
            client.commands.get('help').execute(message);
        break;
        case "link":
            client.commands.get('link').execute(message, args);
        break;
        case "show":
            client.commands.get('show').execute(message, args);
        break;
        case ("play" || "p"):
            client.commands.get('play').execute(message, args);
        break;
    }
});



client.login(process.env.token);

    /*
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
    }*/