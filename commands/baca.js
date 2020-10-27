module.exports = {
    name: 'baca',
    description: "Nhen",
    execute(message, args){
        const amount = parseInt(args[0]);

        if (!args[0]){
            return message.channel.send(`https://www.nhentai.net/`);
        }
        else if(isNaN(amount)){
            message.channel.send(`mangga kang, https://www.nhentai.net/tag/${args[0]}`);
            message.channel.send("Jangan lupa nyalain VPNnya ya, kaka cabul ☝( ◠‿◠ )☝");
        }
        else{
            message.channel.send(`Mangga kang, https://www.nhentai.net/g/${args[0]}`);
            message.channel.send('Jangan lupa nyalain VPNnya ya, kaka cabul ☝( ◠‿◠ )☝');
        }
    }
}