(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let URL = require('url')
    let https = require("https")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord.js'] = '^13.16.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.16.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord-logs'] = '^2.0.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    const discordModals = require('discord-modals');
    discordModals(s4d.client);
    const { Modal, TextInputComponent, showModal } = require('discord-modals');

    // blockly code
    var infractionType, infractionUser, appealable;
    
    
    await s4d.client.login('MTI2MTY3MzM0MTYzOTU5NDA2OA.GnE3PT.tQXSjuhKZdpDFyQqwwBOu3Xe5So8GDMW5dm21M').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    s4d.client.on('ready', async () => {
    
              while(s4d.client && s4d.client.token) {
                  await delay(50);
                    s4d.client.user.setPresence({status: "dnd",activities:[{name:'SCP: Site Roleplay',type:"PLAYING"}]});
        await delay(Number(60)*1000);
        s4d.client.user.setPresence({status: "dnd",activities:[{name:'SSRP:MC',type:"PLAYING"}]});
        await delay(Number(60)*1000);
        s4d.client.user.setPresence({status: "dnd",activities:[{name:'Roblox',type:"PLAYING"}]});
        await delay(Number(60)*1000);
        s4d.client.user.setPresence({status: "dnd",activities:[{name:'Cityous',type:"WATCHING"}]});
        await delay(Number(60)*1000);
        s4d.client.user.setPresence({status: "dnd",activities:[{name:'TMSD',type:"WATCHING"}]});
        await delay(Number(60)*1000);
        s4d.client.user.setPresence({status: "dnd",activities:[{name:'Red',type:"WATCHING"}]});
        await delay(Number(60)*1000);
    
                  console.log('ran')
              }
    
    });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'schedule') {
        var scheduledDeployment = new Discord.MessageEmbed();
           scheduledDeployment.setColor('#ff9900');
          scheduledDeployment.setTitle(String('New Deployment!'))
           scheduledDeployment.setURL(String());
          scheduledDeployment.setDescription(String(([interaction.member,' is hosting a deployment on <t:',interaction.options.getInteger('epoch_time'),':D> at <t:',interaction.options.getInteger('epoch_time'),':t>! Click the button below if you are going to join. Keep an eye on <#1261703964349431948> for more information regarding this deployment.'].join(''))));
          scheduledDeployment.setFooter({text: String('Made with ♥ by 2fas'), iconURL: String()});
          const attend = new MessageButton()
          .setCustomId('attend')
          .setLabel('I\'m Attending!')
          .setStyle(('SUCCESS'))
          .setEmoji('<:ed_tick:1261682681469603943>')
    
    
        s4d.client.channels.cache.get('1261672923463155818').send({embeds: [scheduledDeployment]});
      }
    
        });
    
    s4d.client.on('interactionCreate', async (interaction) => {
      if ((interaction.customId) == 'attend') {
        (interaction.member).roles.add(((interaction.guild).roles.cache.get('1261724615869464576')));
      }
    
    });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'begin') {
        var beginDeployment = new Discord.MessageEmbed();
           beginDeployment.setColor('#ff9900');
          beginDeployment.setTitle(String('Join Up!'))
           beginDeployment.setURL(String());
          beginDeployment.setDescription(String(([interaction.member,'\'s deployment is beginning! Join [the server](',interaction.options.getString('profile_link'),') and <#1261704266540781661> then head to the arsenal for briefing!'].join(''))));
          beginDeployment.setFooter({text: String('Made with ♥ by 2fas'), iconURL: String()});
    
        s4d.client.channels.cache.get('1261703964349431948').send({content:String(('<@&1261724615869464576>' + String(embeds, [beginDeployment])))});
        (interaction.guild).members.cache.forEach(async m =>{
                   (m).roles.remove(((interaction.guild).roles.cache.get('1261724615869464576')));
    
                })
                }
    
        });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'promote') {
        // recruit --> jo
        // jo --> operative
        // operative --> lt
        // lt --> sl
        // sl --> error
        if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261700836594290809')).id)) {
          (interaction.options.getMember('user')).roles.remove(((interaction.guild).roles.cache.get('1261700836594290809')));
          (interaction.options.getMember('user')).roles.add(((interaction.guild).roles.cache.get('1261700939501404160')));
        } else if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261700939501404160')).id)) {
          (interaction.options.getMember('user')).roles.remove(((interaction.guild).roles.cache.get('1261700939501404160')));
          (interaction.options.getMember('user')).roles.add(((interaction.guild).roles.cache.get('1261701086084075541')));
        } else if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261701086084075541')).id)) {
          (interaction.options.getMember('user')).roles.remove(((interaction.guild).roles.cache.get('1261701086084075541')));
          (interaction.options.getMember('user')).roles.add(((interaction.guild).roles.cache.get('1261701131013460021')));
        } else if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261701131013460021')).id)) {
          (interaction.options.getMember('user')).roles.remove(((interaction.guild).roles.cache.get('1261701131013460021')));
          (interaction.options.getMember('user')).roles.add(((interaction.guild).roles.cache.get('1261701304019849367')));
        } else if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261701304019849367')).id)) {
          var error1 = new Discord.MessageEmbed();
             error1.setColor('#ff0000');
            error1.setTitle(String('Error'))
             error1.setURL(String());
            error1.setDescription(String('This user is at the max low rank. You must use `/promotehr` to promote this user.'));
    
          await interaction.reply({embeds: [error1], ephemeral: true, components: [] });
        }
      }
    
        });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'promotehr') {
        // sl --> co
        // co --> commander
        // commander --> error
        if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261701304019849367')).id)) {
          (interaction.options.getMember('user')).roles.remove(((interaction.guild).roles.cache.get('1261701304019849367')));
          (interaction.options.getMember('user')).roles.add(((interaction.guild).roles.cache.get('1261701495389421661')));
        } else if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261701495389421661')).id)) {
          (interaction.options.getMember('user')).roles.remove(((interaction.guild).roles.cache.get('1261701495389421661')));
          (interaction.options.getMember('user')).roles.add(((interaction.guild).roles.cache.get('1261701666898706474')));
        } else if ((interaction.options.getMember('user'))._roles.includes(((interaction.guild).roles.cache.get('1261701666898706474')).id)) {
          var error2 = new Discord.MessageEmbed();
             error2.setColor('#ff0000');
            error2.setTitle(String('Error'))
             error2.setURL(String());
            error2.setDescription(String('This user is at the max high rank. You may not promote this user.'));
    
          await interaction.reply({embeds: [error2], ephemeral: true, components: [] });
        }
      }
    
        });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'infract') {
        infractionType = (interaction.options.getString('type'));
        infractionUser = (interaction.options.getMember('user'));
        let infractionIssue = new Modal()
            .setCustomId('infractionIssue')
            .setTitle('Infraction Menu')
            .addComponents(
          new TextInputComponent()
              .setCustomId('reason')
              .setLabel('Reason')
              .setStyle(('LONG'))
              .setMinLength(5)
              .setMaxLength()
              .setRequired(true),
          new TextInputComponent()
              .setCustomId('appealable')
              .setLabel('Appealable?')
              .setStyle(('SHORT'))
              .setMinLength(4)
              .setMaxLength(5)
              .setRequired(true)
              .setPlaceholder('True or false.'),
          new TextInputComponent()
              .setCustomId('notes')
              .setLabel('Notes')
              .setStyle(('SHORT'))
              .setMinLength(5)
              .setMaxLength(5)
              .setRequired(false),
        );showModal(infractionIssue, {
                client: s4d.client,
                interaction: interaction
            })}
    
        });
    
    s4d.client.on('modalSubmit', async (i) => {
    let member = i.guild.members.cache.get(i.member.user.id)
      if (((i.customId)) == 'infractionIssue') {
        if (((i.getTextInputValue('appealable'))).toLowerCase() == 'true') {
          appealable = '✅';
        } else if (((i.getTextInputValue('appealable'))).toLowerCase() == 'false') {
          appealable = '❌';
        }
        var infraction = new Discord.MessageEmbed();
           infraction.setColor('#ff0000');
          infraction.setTitle(String('Infraction'))
           infraction.setURL(String());
          infraction.setDescription(String((['<:ed_arrow:1261710679145185300> **User:** ',infractionUser,'\n','<:ed_arrow:1261710679145185300> **Type:** ',infractionType,'\n','<:ed_arrow:1261710679145185300> **Reason:** ',(i.getTextInputValue('reason')),'\n','<:ed_arrow:1261710679145185300> **Notes:** ',(i.getTextInputValue('notes')),'\n','<:ed_arrow:1261710679145185300> **Appealable:** ',appealable].join(''))));
          infraction.setFooter({text: String((['Issued by ',i.member.user,'.'].join(''))), iconURL: String()});
    
        s4d.client.channels.cache.get('1261738807280275548').send({embeds: [infraction]});
        infractionUser.send({embeds: [infraction]});
        if (infractionType == 'Warning') {
          if (infractionUser._roles.includes((((i.guild)).roles.cache.get('1261743649956560936')).id)) {
            infractionUser.roles.add((((i.guild)).roles.cache.get('1261743675201949796')));
          } else if (infractionUser._roles.includes((((i.guild)).roles.cache.get('1261743675201949796')).id)) {
            var autostrike = new Discord.MessageEmbed();
               autostrike.setColor('#ff0000');
              autostrike.setTitle(String('Infraction'))
               autostrike.setURL(String());
              autostrike.setDescription(String((['<:ed_arrow:1261710679145185300> **User:** ',infractionUser,'\n','<:ed_arrow:1261710679145185300> **Type:** Strike','\n','<:ed_arrow:1261710679145185300> **Reason:** Reached three warnings.','\n','<:ed_arrow:1261710679145185300> **Notes:** This action was performed automatically.','\n','<:ed_arrow:1261710679145185300> **Appealable:** Appeal your most recent warning and this infraction will automatically be removed.'].join(''))));
              autostrike.setFooter({text: String('Issued by Eclipse.'), iconURL: String()});
    
            s4d.client.channels.cache.get('1261738807280275548').send({embeds: [autostrike]});
            infractionUser.send({embeds: [autostrike]});
            (s4dmessage.member).roles.remove((((i.guild)).roles.cache.get('1261743649956560936')));
            (s4dmessage.member).roles.remove((((i.guild)).roles.cache.get('1261743675201949796')));
            if (infractionUser._roles.includes((((i.guild)).roles.cache.get('1261743693258424480')).id)) {
              infractionUser.roles.add((((i.guild)).roles.cache.get('1261743675201949796')));
            } else if (infractionUser._roles.includes((((i.guild)).roles.cache.get('1261743675201949796')).id)) {
              var autoterm = new Discord.MessageEmbed();
                 autoterm.setColor('#ff0000');
                autoterm.setTitle(String('Infraction'))
                 autoterm.setURL(String());
                autoterm.setDescription(String((['<:ed_arrow:1261710679145185300> **User:** ',infractionUser,'\n','<:ed_arrow:1261710679145185300> **Type:** Termination','\n','<:ed_arrow:1261710679145185300> **Reason:** Reached three strikes.','\n','<:ed_arrow:1261710679145185300> **Notes:** This action was performed automatically.','\n','<:ed_arrow:1261710679145185300> **Appealable:** Appeal your most recent strike and this infraction will automatically be removed.'].join(''))));
                autoterm.setFooter({text: String('Issued by Eclipse.'), iconURL: String()});
    
              s4d.client.channels.cache.get('1261738807280275548').send({embeds: [autoterm]});
              infractionUser.send({embeds: [autoterm]});
              infractionUser.roles.cache.forEach(async (member_role) => {
                    infractionUser.roles.remove((member_role));
    
              })
              infractionUser.roles.add((((i.guild)).roles.cache.get('1261743754818097255')));
            } else {
              infractionUser.roles.add((((i.guild)).roles.cache.get('1261743693258424480')));
            }
          } else {
            infractionUser.roles.add((((i.guild)).roles.cache.get('1261743649956560936')));
          }
        }
        if (infractionType == 'Strike') {
          if (infractionUser._roles.includes((((i.guild)).roles.cache.get('1261743693258424480')).id)) {
            infractionUser.roles.add((((i.guild)).roles.cache.get('1261743727236354080')));
          } else if (infractionUser._roles.includes((((i.guild)).roles.cache.get('1261743727236354080')).id)) {
            var autoterm = new Discord.MessageEmbed();
               autoterm.setColor('#ff0000');
              autoterm.setTitle(String('Infraction'))
               autoterm.setURL(String());
              autoterm.setDescription(String((['<:ed_arrow:1261710679145185300> **User:** ',infractionUser,'\n','<:ed_arrow:1261710679145185300> **Type:** Termination','\n','<:ed_arrow:1261710679145185300> **Reason:** Reached three strikes.','\n','<:ed_arrow:1261710679145185300> **Notes:** This action was performed automatically.','\n','<:ed_arrow:1261710679145185300> **Appealable:** Appeal your most recent strike and this infraction will automatically be removed.'].join(''))));
              autoterm.setFooter({text: String('Issued by Eclipse.'), iconURL: String()});
    
            s4d.client.channels.cache.get('1261738807280275548').send({embeds: [autoterm]});
            infractionUser.send({embeds: [autoterm]});
            infractionUser.roles.cache.forEach(async (member_role) => {
                  infractionUser.roles.remove((member_role));
    
            })
            infractionUser.roles.add((((i.guild)).roles.cache.get('1261743754818097255')));
          } else {
            infractionUser.roles.add((((i.guild)).roles.cache.get('1261743649956560936')));
          }
          if (infractionType == 'Termination') {
            infractionUser.roles.cache.forEach(async (member_role) => {
                  infractionUser.roles.remove((member_role));
    
            })
            infractionUser.roles.add((((i.guild)).roles.cache.get('1261743754818097255')));
          }
          if (infractionType == 'Blacklist') {
            infractionUser.ban({ reason: 'Blacklisted.' });
          }
        }
      }
    
    });
    
    return s4d
})();