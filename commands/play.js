const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    description: "music bot another level",
    async execute (message, args, cmd, client, discord)
    {
        const voiceChannel = message.member.voice.channel;
        const serverQueue = queue.get(message.guild.id);

        if(!voiceChannel)
        {
            return message.channel.send('Join voice channel dulu la putang');
        }

        if(cmd === 'play')
        {
            if(!args.length) return message.channel.send("Title Pls");
            let song = {};
            console.log(song);

            if(ytdl.validateURL(args[0])) {
                const songInfo = await ytdl.getInfo(args[0]);
                song = {title: songInfo.videoDetails.title, url: songInfo.videoDetails.video_url}
            }
            else {
                const videoFinder = async (query) => {
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await videoFinder(args.join(' '));
                if(video) {
                    song = {title: video.title, url: video.url}
                }
                else {
                    message.channel.send("videonya ga ketemu :ng::ab:");
                }
            }

            if(!serverQueue) {
                const queueConstructor = {
                    voiceChannel: voiceChannel,
                    textChannel: message.channel,
                    connection: null,
                    songs: []
                }

                queue.set(message.guild.id, queueConstructor);
                queueConstructor.songs.push(song);

                try {
                    const connection = await voiceChannel.join();
                    queueConstructor.connection = connection;
                    videoPlayer(message.guild, queueConstructor.songs[0]);
                }
                catch(err) {
                    queue.delete(message.guild.id);
                    message.channel.send("Error Connecting!");
                    throw err;
                }
            }
            else {
                const songQ = new discord.MessageEmbed()
                    .setColor('#FF9898')
                    .setAuthor("Added to Queue")
                    .setTitle(song.title)
                    .setURL(song.url)
                    .setThumbnail(song.url)
                serverQueue.songs.push(song);
                return message.channel.send(songQ);
            }
        }
        else if(cmd === 'skip') skipSong(message, serverQueue);
    }
}

const videoPlayer = async(guild, song) => {
    const songQueue = queue.get(guild.id);
    const discord = require('discord.js')

    if(!song) {
        songQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, {filter: 'audioonly'});
    songQueue.connection.play(stream, {seek: 0, volume: 1})
    .on('finish', () => {
        songQueue.songs.shift();
        videoPlayer(guild, songQueue.songs[0]);
    });
    const songPlay = new discord.MessageEmbed()
                    .setColor('#98FF9B')
                    .setAuthor("Now Playing")
                    .setTitle(song.title)
                    .setURL(song.url)
                    .setThumbnail(song.url)

    await songQueue.textChannel.send(songPlay);
}

const skipSong = (message, serverQueue) => {
    if(!message.member.voice.channel) return message.channel.send('Kalo ga join gausah ngeskip anjing')
    if(!serverQueue) return message.channel.send('dah gaada lagu lagi :ng::ab:');
    message.delete()
    message.channel.send("**Next song** :track_next:")
    serverQueue.connection.dispatcher.end();
    
}