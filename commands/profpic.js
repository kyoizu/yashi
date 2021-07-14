const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'profpic',
    description: "show PP",
    execute(message, args){
        const taggedUser = message.mentions.users.first();
        const ppmu = message.author.displayAvatarURL({format: 'png', dynamic: true});

        if(!message.mentions.users.size){
            message.channel.send(`Profile picture-mu ini`, {files: [ppmu]});
        }
    }
}