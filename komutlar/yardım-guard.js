 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Creative Bot Koruma Komutları`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<:gelistirici:904322606717599775> Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__YAKINDA__`,`<:gelistirici:904322606717599775> Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,`<:gelistirici:904322606717599775> \`${prefix}davet\` | Creative Bot'u Sunucunuza Davet Edersiniz\n<:gelistirici:904322606717599775> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:gelistirici:904322606717599775> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/923227009977577472/931915786900103228/standard_3.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

