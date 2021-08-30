module.exports = (discord, client, message) => {
    const prefix = ';';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    

    try {
        command.execute(message, args, cmd, client, discord)
    }
    catch(err) {
        message.reply("error executing command");
        console.log(err);
    }
}