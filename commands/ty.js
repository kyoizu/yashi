module.exports = {
    name: 'ty',
    description: "Makasi",
    execute(message, args){
        const amount = parseInt(args);
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
}