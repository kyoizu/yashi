module.exports = {
    name: 'help',
    description: "list command",
    execute(message, args){
        message.channel.send("/tpb (Link absen TPB)\n/pacis (Link login PACIS)\n/baca + 'kode 6 digit' || 'genre' (Tentu saja membaca manga)");
        message.channel.send("/halo & /yashi (Sapa yashi ^-^)\n/profpic + 'tag user' (kasih liat profpic)\n/ty * 'tag user' (Ucapakan terima kasih)");
        message.channel.send("/help (list command");
    }
}