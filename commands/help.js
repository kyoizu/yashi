const Discord = require('discord.js');

module.exports = 
{
    name: 'help',
    description: "list command",
    execute(message)
    {
        const listEmbed = new Discord.MessageEmbed()
            .setColor(`#FF69B4`).setTitle(`Yashi's Command List`).addFields(
                {name: `/help`, value: `List commandnya Yashi`},
                {name: `/link`, value: `Link kuliah`},
                {name: `/baca + 'kode 6 digit' || 'genre fav'`, value: `Baca komik di website ksukaan kita`},
                {name: `/profpic + 'tag user'`, value: `Liat profile picture orang lain`},
                {name: `/ty + 'tag user'`, value: `Ucapakan terima kasih ke orang yang di-tag`},
                {name: `/halo`, value: 'Sapa Yashi ^-^'},
                {name: `/show + 'args'`, value: `Cari gambar`}
            )

        message.channel.send(listEmbed);
    }
}