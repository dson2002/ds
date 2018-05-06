const Discord = require('discord.js');
const client = new Discord.Client();
const MusicBot = require ("./MusicBot")
const welcome = require ("./welcome")
const index = require ("./index")
const DSF = require ("./DSF")
const Spam = require ("./Spam")
const ds = require ("./ds")
const help = require("help")
client.on('message',message  => {
    if (message.content === 'ping') {
        message.reply('Pong!');
    }
    if (message.content === 'Link') {
        const embed = new Discord.RichEmbed()  
        .setColor('RANDOM')
        .addField("לקבוצה שלי","https://discord.gg/jYvWyFv")

message.channel.send(embed)


    }
    if (message.content === 'youtube') {
        const embed = new Discord.RichEmbed()  
        .addField("youtube","https://www.youtube.com/channel/UC6vQG79_9ReDk3gfTMIejug?view_as=subscriber")
    .addField("discord","anonymous#4008")
    .addField("לקבוצה שלי","https://discord.gg/jYvWyFv")
    .setFooter("discord.js#0560")
    .setColor('RANDOM')
    message.channel.send(embed)

    }
    if (message.content === 'x') {
        const embed = new Discord.RichEmbed()  

        
    }
    const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

// here you put the swears
const swearWords = ["fuck", "shit"];

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if( swearWords.some(word => message.content.includes(word)) ) {
     message.delete();
  message.reply("Oh no you said a bad word!!!");
}

if (message.content === 'commands') {
    const embed = new Discord.RichEmbed()  
    .setTitle("commands")
    .addField(`Divertissement`, "` \n x-8ball \n x-roll`", true)
    .addField("Utilitaire", "` x-avatar \n x-profil \n x-serverinfo \n x-botinfo \n x-id \n x-ping \n x-invite`", true)
    .addField(`Modération`, "` x-ban \n x-kick \n x-clear`", true)
    .addField(`Administration`, "` x-sondage \n x-say`", true)
    .addField(`Music commands`, "` \n play \n skip`\n stop \n volume  \n pause \n resume", true)
    .addField(`New commands`, "` \n .addrole \n .ban`\n .botinfo \n .clear  \n .coins \n .kick \n .level \n .pay \n .serverinfo \n .cat \n .tempmute \n .warn \n .warnlevel \n !debug \n %weather\n .Donare\.nunmute\n.Ticket\n.fortnite\n.botinvite\n.google",true)
    .addField(`New commands 2`, "` \n ~PING \n ~FUCK`\n ~USERSTATS",true)
    .addField(`Kali Linux`, "` \n kali-linux \n פוקודת-פריצה-למחשב`\n פוקודת-פריצה-לטלפון",true)
    .addField(`בוקורב`)
    .setFooter("discord.js#0560")
    .setColor('RANDOM')
    message.channel.send(embed)
}

})
client.login("NDMzMjQzNDYwODIxMDU3NTM2.DceTsA.prtWrqM31RSL0F3qInU2Uu4UeBo");
