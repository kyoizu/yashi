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
                    {name: `TPB`, value: `https://docs.google.com/forms/d/e/1FAIpQLSfJiEARWaYU5xNDSJ_EvqA6f0s8s4dbn5Vs7QXxBKejxOob9g/viewform`},
                    {name: `Kalkulus A`, value: `https://meet.google.com/lookup/guunbowfbp`},
                    {name: `Kalkulus B`, value: `https://meet.google.com/lookup/aharycijhu`},
                    {name: `LiVE unpad`, value: `https://reguler.live.unpad.ac.id`},
                )
            message.channel.send(embed);
    }
}

