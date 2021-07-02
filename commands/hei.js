module.exports = {
    name: 'hei',
    description: "audio play hei",
    async execute(message) {
        message.delete();
        let replies = ['./audio/heyhey.mp3', './audio/itzyhey.mp3']
        let random = Math.floor(Math.random() * replies.length);
        const connection = await message.member.voice.channel.join();
        connection.play(replies[random]);
        setTimeout(() => 
        {
            connection.disconnect();
        }, 3000);
    }
}