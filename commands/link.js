const Discord = require('discord.js');

module.exports = {
    name: 'link',
    description: "link kuliah",
    execute(message, args)
    {
            const embed = new Discord.MessageEmbed()
                .setColor(`#FF003E`)
                .setTitle(`Link Perkuliahan Gopher'20`)
                .addFields(
                    {name: `PACIS`, value: `https://students.unpad.ac.id/pacis/`},
                    {name: `LiVE unpad`, value: `https://reguler.live.unpad.ac.id`},
                )
            message.channel.send(embed);
    }
}

