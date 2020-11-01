const Discord = require('discord.js');

module.exports = 
{
    name: 'help',
    description: "list command",
    execute(message, args)
    {
        const listEmbed = new Discord.MessageEmbed()
            .setColor(`#FF69B4`)
            .setTitle(`Yashi's Command List`)
            .addFields(
                {name: `/Help`, value: `List commandnya Yashi`},
                {name: `/tpb`, value: `Link absen TPB`},
                {name: `/pacis`, value: `link ke PACIS`},
                {name: `/baca + 'kode 6 digit' || 'genre fav`, value: `Baca komik di website ksukaan kita`},
                {name: `/profpic + 'tag user`, value: `Liat profile picture orang lain`},
                {name: `/ty + 'tag user'`, value: `Ucapakan terima kasih ke orang yang di-tag`},
                {name: `/halo || /yashi`, value: `Sapa Yashi ^-^`}
            )

        message.channel.send(listEmbed);
    }
}