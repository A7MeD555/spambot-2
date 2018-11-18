const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "2";
client.on('ready', () => {
    console.log('I am ready!');
});

 client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

});





client.on("ready", () => {
let channel =     client.channels.get("499662982456934411")
setInterval(function() {
channel.send(`ادينا رمضان احية احية اديلوة احية احية احية احية هخhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh:joy: :joy: hhhhhhhhhhhhgggggggggggggg`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
