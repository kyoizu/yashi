const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'join n play',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Join voice channel dulu dong");
        const permis = voiceChannel.permissionsFor(message.client.user);
        if(!permis.has('CONNECT')) return message.channel.send("sry, no access");
        if(!permis.has('SPEAK')) return message.channel.send("sry, no access");
        if(!args.length) return message.channel.send("Judulnya mana?");

        const connection = await voiceChannel.join();
        const vidfind = async (query) => {
            const vidres = await ytSearch(query);

            return (vidres.videos.length > 1) ? vidres.videos[0] : null;
        }

        const video = await vidfind(args.join(' '));
        if(video)
        {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`now playing, ${video.title}`)
        }
        else{
            message.channel.send("Sorry, content unavailabe")
        }
    }

}