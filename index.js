const discord = require("discord.js");
const botConfig = require("./botconfig.json")

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.name} is online.`);
    client.user.setActivity("kijkt naar discord", {type: "Playing"});

});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}hallo`){
        return message.channel.send("Hallo");   
    }

    if(command === `${prefix}info`){
        
        var botEmbed = new discord.MessageEmbed()
            .setColor("#5e94f7")
            .addFields(
                {name: "De server", value:"De server is een gamig server maar ook een vrienschappelijke server waar veel plezier beleeft wordt dus voel je vrij om mensen te invite want ja er zij beloningen aan gekopeld"}
                )
            .addField("Groeten", client.user.username)
            .setTimestamp()
            .setImage;
        
        return message.channel.send(botEmbed); 
    }

    if(command === `${prefix}serverinfo`){
        
        var botEmbed = new discord.MessageEmbed()
            .setColor("#5e94f7")
            .addFields(
                {name: "Je bent de server gejoint op ", value: message.member.joinedAt},
                {name: "totaal aantal members", value:message.guild.memberCount}
            )
            .setTimestamp();
        
        return message.channel.send(botEmbed);
    }
    if(command === `${prefix}invite`){
        return message.channel.send("https://discord.gg/esUFR7MqzJ");
    }
    if(command === `${prefix}au`){
        return message.channel.send("oei je viel van de trap");
    }
    

});