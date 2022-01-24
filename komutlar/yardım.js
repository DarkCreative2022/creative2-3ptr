 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Creative Bot Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<a:uptimer:928262503371247637> Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<:topluluk:904322611922743316> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:mod:915553535641411595> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<:moderator:915553515408064553> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<:ItemMusicNote:915553560358420510> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:uptimer:928262503371247637> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<:topluluk:904322611922743316> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<:gelistirici:904322606717599775> \`${prefix}davet\` | Creative Bot'u Sunucunuza Davet Edersiniz\n<:gelistirici:904322606717599775> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:settings:915999243410473010> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/923227009977577472/931915786900103228/standard_3.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}