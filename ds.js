var Discord = require("discord.js");
var bot = new Discord.Client();
var fs = require('fs');

//This calls the file named userData.json from the folder Storage.
var userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));


// Listener Event: Message Received (This will run everytime a message is received)
bot.on('message', message => {

    // Variables
    var sender = message.author; // The person who sent the Message
    var msg = message.content.toUpperCase();
    var prefix = '~' // The prefix used when writing commands in chat.

    // It checks to make sure the sender is not the bot.
    if (sender.id === '436787569200594944') { // Checks if the ID of the sender is the same ID as the bot.
      return; // Cancels the rest of the Listener Event.
    }
    if (message.channel.id === "") {
      if (isNaN(message.content)){
          message.delete()
          message.author.send("הודעה נמחקה")
    }}
    // Ping / Pong command.
    if (msg === prefix+ 'PING') {
      message.channel.send('Pong!') // Sends a message to the channel, with the contents: "Pong!"
    }

    // This will ban specified words.
    if (msg.includes('FUCK')) { // Checks if the word Fuck is included in the message.
        message.delete()
        message.channel.send('Word used not allowed.')
    }

    if (msg === prefix + 'USERSTATS') {
      message.channel.send('You have sent **' + userData[sender.id].messagesSent + '** messages!')
    }

    //Makes sure the username is in userData before writing to the file.
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    userData[sender.id].messagesSent++; //This adds one to 'messagesSent', under the user.

    //This one saves the file that was wrote in.
    fs.writeFile('userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err); //This one sends a messages with the error to the console if there is one.
    });

  });

  // Listener Event: Bot Launched
  bot.on('ready', () => {
    console.log("Loading...");
    setTimeout(function(){
      console.log("Bot has been loaded completely.");
    }, 1000);
    setTimeout(function(){
      console.log("Welcome, Master!");
    }, 2000);

    // Status
    bot.user.setStatus('Online') // You status goes here; It can be 'Online', 'idle', 'invisible', & 'dnd'

    // Game & Streaming
    bot.user.setGame('~help') // You can change the string to whatever you want it to say.

    //To set a stream, add another option like this:
    //bot.user.setGame('~help', 'https://twitch.tv/user');
    //It has to be a twitch stream link.

    // Any code can be placed here. It will automatically run when the bot starts.
  });

// Listener Event: User joining the discord server.
bot.on('guildMemberAdd', member => {
    console.log('🚶 | Hackers members ' + member.user.username + ' has joined the server!') // Sends a message in the console that someone joined the discord server.

    var role = member.guild.roles.find('name', '🚶 | Hackers members'); // This looks for the role in the server(guild), it searches by name, meaning you can change 'Member [Commoner]' to the role you want.

    // Secondly, we will add the role.
    member.addRole(role)

    // Sending a message to a channel when a user joins discord.
    member.guild.channels.get('433221591392845825').send('**' + member.user.username + '**, has joined the server!') // The first part gets the channel, the seconds sends a messages in the respective channel.
});

// Listener Event: User leaving the discord server.
bot.on('guildMemberRemove', member => {

    member.guild.channels.get('433221591392845825').send('**' + member.user.username + '**, has left the server!') // The first part gets the channel, the seconds sends a messages in the respective channel.
});

  bot.login('NDMzMjQzNDYwODIxMDU3NTM2.DcD3Iw.MVPhWhaFrddK21A4j6Ag3fnVoyg')