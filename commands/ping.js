module.exports = {
    name: 'ping',
    description: "Ping Command",
    execute(message, args){
        message.channel.send('pong!')
        message.channel.send("pengen nyepong :(")
    }
}