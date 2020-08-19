const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
        .setColor("GREEN")
        .setImage(user.avatarURL)
    message.channel.sendEmbed(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["avatar"],
  permLevel: 0
};

exports.help = {
  name: 'pp',
  category: 'kullanıcı',
  description: 'PP atar işte avatarını gösterir mq',
  usage: 'pp <@kişi-etiket> veya m!avatar'
};
