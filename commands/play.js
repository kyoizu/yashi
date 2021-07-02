const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'join n play',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel)
        {
            return message.channel.send("join voice channel dulu :ng::ab:")
        }
        if(!args.length) 
        {
            return message.channel.send("Judulnya mana :ng::ab:")
        }
        const connection = await voiceChannel.join();
        const vidFind = async(query) => {
            const vidRes = await ytSearch(query);
            return (vidRes.videos.length > 1) ? vidRes.videos[0] : null;
        }
        const video = await vidFind(args.join(' '))

        if(video)
        {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });
            await message.reply(`now playing ${video.title}`)
        }
    }


}