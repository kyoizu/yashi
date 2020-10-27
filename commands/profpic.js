module.exports = {
    name: 'profpic',
    description: "show PP",
    execute(message, args){
        const taggedUser = message.mentions.users.first();

        if(!message.mentions.users.size){
            return message.channel.send(`Profile picture mu ini <${message.author.displayAvatarURL({format: 'png', dynamic: true})}>`);
        }
        else if(message.member.roles.cache.has('769836747533713438')){
            return message.channel.send(`Ini profile picnya goshujin-sama >///< <${message.author.displayAvatarURL({format: 'png', dynamic: true})}>`);
        }
        return message.channel.send(`Profile picturenya ${taggedUser.username} ini <${message.taggedUser.displayAvatarURL({format: 'png', dynamic: true})}>`);
    }
}