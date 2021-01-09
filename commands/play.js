const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: "Join & play",
    async execute(message, args)
    {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Join voice channel lah goblok!, mau denger gimana kalo gak join");
        if(!args.length) return message.channel.send("Judulnya mana sayang?");

        const connection = await voiceChannel.join();
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));
        if(video)
        {
            const stream = ytdl(video.url, {filter : 'audioonly'});
            connection.play(stream)
            .on('finish', () => {
                voiceChannel.leave();
            });
            await message.reply(`Now Playing ${video.title}`);
        }
        else
        {
            message.channel.send("No Result, SOB null");
        }

    }
}