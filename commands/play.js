module.exports = {
    name: 'play',
    description: "dije",
    execute(message, args){
        const amount = parseInt(args);

        if(!args[0]){
            message.channel.send("Linknya mana sayang");
            return;
        }
        if(!message.member.voice.channel){
            message.channel.send("Masuk voice channel goblog");
            return;
        }

    }
}