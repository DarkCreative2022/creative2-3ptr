


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/923227009977577472/931916201439952926/Creative_Logo.png`)
.addField("__**Bot Verileri**__", `<:gelen_kutusu:904322646639009803>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:topluluk:904322611922743316> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:kanal:904322645607215145>**Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<:yildiz:904322322528346142>  **Bot Sahibi**  <@919245038129643551> \n **Dark Creative#0001** \n\n <:yildiz:904322322528346142> \n **Bot Geliştiricisi**  <@919245038129643551> \n **Dark Creative#0001** \n\n`)
.addField("__**Sürümler**__", `<:gelistirici:904322606717599775>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n<:gelistirici:904322606717599775> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<:gelistirici:904322606717599775>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:logo:915553528666288138>  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/923227009977577472/931915786900103228/standard_3.gif`)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}