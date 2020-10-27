module.exports = {
    name: 'yashi',
    description: "Ping Command",
    execute(message, args){
        const amount = parseInt(args);

        if(message.member.roles.cache.has('769836747533713438')){
            message.channel.send(`YASHI is here, goshujin-sama!`);

        }
        else{
            message.reply('Anda siapa?');
        }
    }
}