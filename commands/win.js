module.exports = {
    name: 'win',
    description: "lagu winning round",
    async execute(message){
        message.delete();
        const connec = await message.member.voice.channel.join();
        connec.play('./audio/ez4ence.mp3');
        setTimeout(() => 
        {
            connec.disconnect();
        }, 6500)
    }
}