module.exports = {
    name: 'hentai',
    description: "audio toxic",
    async execute(message){
        message.delete();
        const connection = await message.member.voice.channel.join();
        connection.play('./audio/yk.mp3');
        setTimeout(() => 
        {
            connection.disconnect();
        }, 11000)
    }
}