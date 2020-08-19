const Discord = require('discord.js');

exports.run = function(client, message) {
  
 
const yükleniyor = client.emojis.get("734380834999762944")
const kullanici = client.emojis.get("734382368915456030")
const yıldız = client.emojis.get("734383770123239524")
const sosyal = client.emojis.get("734381029049106573")
const kitaplik = client.emojis.get("734380874069704764")
const js = client.emojis.get("734382917576425482")
const onay = client.emojis.get("734380165043454005")
const kodyaziyor = client.emojis.get("734380912011247646")
const ayarlar = client.emojis.get("734380937399238666")
const embed = new Discord.RichEmbed()
 
  .setColor('RANDOM')
  .setTitle('Darknes Code Altyapı  İstatistik')
  .addField( yükleniyor + ' Gecikme', client.ping + 'ms')
  .addField( kullanici + ' Kullanıcılar', client.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField( yıldız + ' Kanallar', client.channels.size)
  .addField( sosyal + ' Sunucular', client.guilds.size)
  .addField( onay + ' Yapımcım', '<@733616760116215868>')
    
 
 
 
 
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['botbilgi','i'], 
  permLevel: 0 
};

exports.help = {
  name: 'istatistik', 
  description: 'Botun İstatiğini Atar',
  usage: '+istatistik' 
};
