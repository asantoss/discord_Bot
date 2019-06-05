const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    //set the bot activity to watching youtube.
    client.user.setActivity("YouTube", {
        type: "WATCHING"
    })

    client.guilds.forEach((guild) => {
        //list all of the servers the bot is a part of!
        console.log(guild.name)
        guild.channels.forEach((channel) =>
            //of those servers console log the channels with anem anad id.
            console.log(`- ${channel.name} ${channel.type} ${channel.id}`))
    })

    //Pressure Gang General Channel id: 219475270367838208
    //  let generalChannel = client.channels.get(`219475270367838208`);
    //  const attachment = new Discord.Attachment("https://www.devdungeon.com/sites/all/themes/devdungeon2/logo.png")
    //  generalChannel.send(attachment)
})

client.on('guildMemberAdd', member => {
    member.send(`Welcome on the server! Please be aware that we won’t tolerate troll, spam or harassment. Have fun 😀`)
})

client.on('message', (receivedMessage) => {
    let usrMsg = receivedMessage.content;
    //add a check to avoid the bot responding to its own messages.
    if (receivedMessage.author == client.user) {
        return
    } else if (usrMsg[0] == '!') {
        processCommand(usrMsg)
    }
    // receivedMessage.channel.send(`Message received: ${receivedMessage.author.toString()}` + receivedMessage.content)
    //  receivedMessage.react(``)
})

function processCommand(usrMsg) {


    let fullCommand = usrMsg.substr(1)
    let splitCommand = fullCommand.split(' ')
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, usrMsg)
    } else if (primaryCommand == "play") {
        playCommand(arguemnts, usrMsg)
    } else if (overwatchObject[primaryCommand]) {
        overwatchHeroCommand(arguments, usrMsg)
    } else {
        usrMsg.send(`Here are a few of the commands you can use. !help !play`)
    }
}


function playCommand(arguemnts, receivedMessage) {
    if (arguemnts.length < 2) {

    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("I'm not sure what you need help with. !help [topic]")
    } else {
        receivedMessage.channel.send(`It looks like you need help with ${arguments}`)
    }
}

//sender of message as a string is ${receivedMessage.author.toString()}

// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTc5ODI1NDM4Njg0MDg2MzAy.XOHypg.bveEE5mIxn1sU7cpj6fifJXqFdU"

client.login(bot_secret_token)






//Overwatch heroes


var overwatchObject = {
    bastion: {
        'Strong against': 'Reinhardt - Winston - Mercy',
        'Weak against': 'Genji - Widowmaker - Hanzo'
    }
}



function overwatchHeroCommand(arguemnts, receivedMessage) {
    if (arguemnts.length < 2) {
        receivedMessage.channel.send(`The info for ${arguemnts} is ${overwatchObject.arguemnts}`)
    }
}




/*
    client.guilds.forEach((guild) => {
            console.log(guild.name)
            guild.channels.forEach((channel) =>
                console.log(`- ${channel.name} ${channel.type} ${channel.id}`))
        }) */