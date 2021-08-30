module.exports = {
    name: 'baca',
    description: "Nhen",
    execute(message, args){

        if (!args[0]){
            return message.channel.send(`https://www.nhentai.net/`);
        }
        else{
            message.channel.send(`Mangga kang, https://www.nhentai.net/g/${args[0]}`);
            message.channel.send('Jangan lupa nyalain VPNnya ya, kaka cabul ☝( ◠‿◠ )☝');
        }
    }
}