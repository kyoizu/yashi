module.exports = {
    name: 'help',
    description: "list command",
    execute(message, args){
        message.channel.send("/tpb                      -   Link absen TPB");
        message.channel.send("/pacis                    -   Link login PACIS");
        message.channel.send("/baca + 'kode 6 digit'    -   Tentu saja membaca manga");
        message.channel.send("/halo & /yashi            -   Sapa yashi ^-^");
        message.channel.send("/help                     -   List command");
    }
}