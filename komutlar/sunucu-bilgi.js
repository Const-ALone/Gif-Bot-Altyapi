const Discord = require('discord.js');

exports.run = (client, message) => {


let sunucu = new Discord.RichEmbed()
.setThumbnail(message.guild.iconURL)
.setColor("BLACK")
.addField('Sunucu İd :', message.guild.id)
.addField('Sunucu Sahibi :', message.guild.owner, true)
.addField('Sunucu Bölgesi :', message.guild.region)
.addField('Afk Kanalı :', `${message.guild.afkChannel}`, true)
.setTitle("\n\nSunucu İstatistik")
.addField('Üye Sayısı :', message.guild.memberCount)
.addField('Kanal Sayısı :', message.guild.channels.size, true)
.addField('Rol Sayısı :', message.guild.roles.size)
.addField('<a:online:737403809013301288> Çevrimiçi :', message.guild.members.filter(m => m.user.presence.status === "online").size)
.addField('<a:dnd:737403808900186187> Rahatsız Etmeyin :', message.guild.members.filter(m => m.user.presence.status === 'dnd').size)
.addField('<a:idled:737403808564510752> Boşta :', message.guild.members.filter(m => m.user.presence.status === 'idle').size)
.addField('<a:offline:737403809231274044> Çevrimdışı :', message.guild.members.filter(m => m.user.presence.status === 'offline').size)
return message.channel.send(sunucu) 

}; 

module.exports.conf = {
aliases: ["sunucu-bilgi","sb","s-b"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
    name: 'sunucubilgi',
    description: '',
    usage: 'sunucubilgi'
};
