const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  
const embed = new Discord.RichEmbed()

.setColor('RED')
.setDescription('**Temizle Komudunu Kullanmak İçin **Mesajları Yönet** İznine Sahip Olmalısın!')

return message.channel.send(embed)  

}
  
if(!args[0]) return message.channel.send("**Lütfen Silinicek Mesaj Miktarını Yazın.!**");

message.channel.bulkDelete(args[0]).then(() => {
const embed = new Discord.RichEmbed()

.setColor('GREEN')
.setDescription(`Başarıyla ${args[0]} Adet Mesajı Temizledim.`)

return message.channel.send(embed).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};
exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};
