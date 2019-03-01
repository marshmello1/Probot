

var prefix = "a";
var adminprefix = 'a'
client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});

var prefix = "a";
var adminprefix = 'a'
const developers = ["507672310438821908","346343289861046273"]
client.on('message', message => {
	
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});

client.on('message', message => {
    var prefix = "a"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك :',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي :', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك :',"**"+ w + "**",true)    
.addField('📛| تاق حسابك :',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 ** : ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚  :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل :**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'FreeCredites')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

	
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-er") {
		 message.channel.send('**The Message Was Sent On Private**');

		 


 message.author.sendMessage(`
 **
__~~Ɓ.Ɲ - Server~~__ By : @B.N - I Miss 💔 You#9995
╔[❖════════════❖]╗
             Prefix = ' a '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ akick <mention > ➾ kick member from server

 ❖ aclear ➾ clear chat 
  
 ❖ amute < mention > ➾ mute member

 ❖ aunmute <mention> ➾ unmute member

 ❖ act <name> ➾ create channel

 ❖ acv <name> create voice channel
  
 ❖ abc <message> ➾ message all members in server

❖ acr ➾  create roles

❖ aban <mention> ➾ To Ban Member


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ aroll <number> ➾ role 

❖ adate ➾ see date

❖ amember ➾ members info

❖ aguilds ➾ How Many guild use the bot

❖ ausers ➾ How many members use the bot

❖ achannels ➾ How many channels use the bot

❖ avs ➾ voice online room

❖ aser-av ➾ server avatar

❖ auptime ➾ to see uptime

❖ ainvs ➾ server invite link

❖ aown ➾ bot owner

❖ aid ➾ your id

❖ aavatar ➾ your avatar account

❖ ahelp-ar ➾ help by arabic

❖ ahelp-en ➾ help by english

❖ aping ➾ to see ping

❖ abot ➾ bot informations 

❖ aserver ➾ server informations 

❖ ainvite ➾ bot invite link

❖ ashop-er  ➾ How  To Buy The Bot

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

To Enable Welcome Message Do Channel Name "welcome"


==================================================================

Server Support - رابط سيرفر صاحب البوت: https://discord.gg/quw6QUc

Bot Invite Link - رابط دعوة البوت : https://discordapp.com/api/oauth2/authorize?client_id=507672310438821908&permissions=8&scope=bot

==================================================================

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 message.channel.send('**تم الارسال بـ الخاص**');
	
		 


 message.author.sendMessage(`
 **
__~~Ɓ.Ɲ - Server ~~__ By: @B.N - I Miss 💔 You#9995
╔[❖════════════❖]╗
                    Prefix = ' a '
					البرفكس a و الامر
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                      اوامر ادارية
╚[❖════════════❖]╝

 ❖  -kick <mention > ➾ لطرد عضو
 
 ❖ -mute < mention > ➾ اسكات عضو 

 ❖ -clear  ➾  حذف الرسايل
 
 ❖ -cv <name> ➾ صنع روم صوتية

 ❖ -ct <name> ➾ صنع روم كتابية

 ❖ -unmute <mention> ➾ فك الاسكات من العضو
  
 ❖ -bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر

 ❖ -ban <mention> ➾ لتبنيد عضو

❖ -cr ➾  انشاء رتب جاهزة

╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ -roll <number> ➾ قرعة

❖ -member ➾ معلومات الاعضاء

❖ -avatar ➾ شعار حسابك

❖ -ser-av ➾ شعار السيرفر

❖ -uptime ➾ مدة التشغيل

❖ -id ➾ اي دي

❖ -date ➾ التاريخ

❖ -invs ➾ رابط دخول سيرفرك

❖ -guilds ➾ عدد السيرفرات يلي يستخدمو البوت

❖ -users ➾ لمعرفة كم شخص يستخدم البوت 

❖ -channels ➾ لمعرفة عدد الرومات يلي يكتبون فيها اوامر البوت

❖ -vs ➾ لـ انشاء روم الفويس اون لاين

❖ -own ➾ مسؤول البوت

❖ -help-ar ➾ المساعدة في العربي

❖ -help-en ➾ المساعدة في الانجليزيلة

❖ -ping ➾ عرض سرعه اتصال البوت

❖ -bot ➾ معلومات البوت

❖ -play ➾ للعب مع البوت

❖ -server ➾ معلومات السيرفر

❖ -invite ➾ رابط دعوة البوت

❖ -shop-ar  ➾ عشان تعرف كيف تشتري البوت

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "welcome"

==================================================================

Server Support - رابط صاحب البوت: https://discord.gg/quw6QUc

Bot Invite Link - رابط دعوة البوت : https://discordapp.com/api/oauth2/authorize?client_id=507672310438821908&permissions=8&scope=bot

==================================================================

`);

    }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "رابط")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 150000,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم الارسال في الخاص")
   .setFooter("Ɓ.Ɲ - Server",'')
                   .setTimestamp()
				message.channel.send('**تم الارسال**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~Bot Staff~~__

 __Powered By__ __تم الصنع من قبل__: B.N - I Miss You <Levai>#9995

Server Support - رابط صاحب البوت: https://discord.gg/quw6QUc

Bot Invite Link - رابط دعوة البوت : https://discordapp.com/api/oauth2/authorize?client_id=507672310438821908&permissions=8&scope=bot`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل انت متاكد انك تريد حذف الشات ؟**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react(':negative_squared_cross_mark:'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`الشات سوف ينحذف`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` تمت عملية حذف الشات ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**تم حذف الشات**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
     if (message.content === prefix + "ban") {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
  if (true) {
if (message.content === 'ainvite') {
      message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=507672310438821908&permissions=8&scope=bot').catch(e => console.log(e.stack));

    }
   } 
  });

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  ( **${msg.guild.name}** ) `)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** ${msg.guild.region} **]`,true)
      .addField(':medal:** الرتب**',`[** ${msg.guild.roles.size} **]`,true)
      .addField(':red_circle:** عدد الاعضاء**',`[** ${msg.guild.memberCount} **]`,true)
      .addField(':large_blue_circle:** عدد الاعضاء الاونلاين**',`[** ${msg.guild.members.filter(m=>m.presence.status == 'online').size} **]`,true)
      .addField(':pencil:**الرومات الكتابية**',`[** ${msg.guild.channels.filter(m => m.type === 'text').size}** ]`,true)
      .addField(':microphone:** رومات الصوت**',`[** ${msg.guild.channels.filter(m => m.type === 'voice').size} **]`,true)
      .addField(':crown:** الأونـر**',`**${msg.guild.owner}**`,true)
      .addField(':id:** ايدي السيرفر**',`**${msg.guild.id}**`,true)
      .addField(':date:** تم عمل السيرفر في**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline' ).forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', message => {
    if (message.content == "aplay") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 800,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})

client.on('message', msg => {
  if (msg.content === 'ترحيب') {
    msg.reply(':sparkling_heart: :tada: ** أهلاٌ بك في السيرفر منور  ** :tada: :sparkling_heart: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام  و الرحمة');
  }
});
client.on('message', message => {
    if (message.content.startsWith("trans")) {

    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`trans [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'B.N Shop ©\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "B.N Shop  ©"
                }
            }}
            )
    })  .catch(console.error);

    }
});
client.on('message', message => {
  var prefix = "a";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
            message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
        }).catch(() => {
        });
    }
});
 client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('346343289861046273');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '470478928947970048') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "aser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });



client.on('message', message => {
     if (message.content === "abot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت**" , client.guilds.size)
  .addField("**المستخدمين**", client.users.size)
  .addField("**قنوات**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('arules')){
 if(!message.author.id === '324672376455299074') return;
          message.react('✔')
message.channel.sendMessage('**يمنع سب او شتم اي عضو في السيرفر مهما حصل **')
message.channel.sendMessage('**يمنع نشر السيرفرات خاص او عام**')
message.channel.sendMessage('**يمنع البيع و الشراء خاص او عام **')
message.channel.sendMessage('**ملاحظة : ادارة السيرفر غير مسئولة عن اي عمليات نصب تحصل في السيرفر**')
message.channel.sendMessage('**يمنع عمل مشاكل في السيرفر ابداٌ**')
message.channel.sendMessage('**اذا سبك احد تواصل مع الادارة واشتكي عليه مو تروح تسبه**')
message.channel.sendMessage('**لا تسوي سبام في الشات**')
message.channel.sendMessage('**ممنوع كلام الـ +18 او ارسال صور +18 او ارسال فيديوهات + 18**')
message.channel.sendMessage('**أذا قرائت كل القوانين اضغط على الايموجي الموجود **')
message.channel.sendMessage('**©️ Rules By : B.N - I Miss You <Levai>#9995**')
         message.react('©️')

client.users.forEach(m =>{
m.sendMessage(args)
})
}
})
  
  client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-admin224')){
 if(!message.author.id === '324672376455299074') return;
	              message.react('👮','✔️')
				  
            message.channel.send(`** اذا تبي تقدم أتبع الشروط واضغط على الايموجي الموجود **`);
		   message.channel.send(`** ملاحظة : اذا ما ضغطت على الايموجي ما بنقبلك**`);
            message.channel.send(`**1) اسمك **`);
            message.channel.send(`**2) عمرك **`);
            message.channel.send(`**3) كم لك في الديسكورد **`);
            message.channel.send(`**4) أيش خبراتك في الديسكورد **`);
            message.channel.send(`**5) بـ أيش راح تساعدنا**`);
            message.channel.send(`**جاوب على الاسئلة ولما يجي الاونر بيقبلك او بيرفضك**`);

client.users.forEach(m =>{

})
}
})
  client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-check12565')){
 if(!message.author.id === '324672376455299074') return;
 	              message.react('👮','✔️')				
            message.channel.send(`**جاوب على الاسئلة ولما يجي الاونر بيقبلك او بيرفضك**`);
	              message.react('👮','✔️')				
            message.channel.send(`**بعد ما تجاوب ضروري تكتب ( done ) و ألا ما بنراجع طلبك **`);

client.users.forEach(m =>{

})
}
})

client.on('message', message => {
    if (message.content == "done") {
         message.react('✔','👌')
		             message.channel.send(`** ستتم مراجعة طلبك من قبل الاونر الرجاء الانتظار **`);

client.users.forEach(m =>{
})
}
})
client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('ashop-ar')){
 if(!message.author.id === '324672376455299074') return;
message.channel.sendMessage('**اذا تبي تشتري البوت تواصل مع **')
message.channel.sendMessage('**B.N - I Miss You <Levai>#9995**')
message.channel.sendMessage('**اذا تبي تخلي البوت بـ أسم وصورة سيرفرك فقط تواصل مع**')
message.channel.sendMessage('**B.N - I Miss You <Levai>#9995**')
         message.react(':money_with_wings: ')

client.users.forEach(m =>{
m.sendMessage(args)
})
}
})  

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('ashop-er')){
 if(!message.author.id === '324672376455299074') return;
message.channel.sendMessage('**IF You Want To Buy The Bot Speak With **')
message.channel.sendMessage('**B.N - I Miss You <Levai>#9995**')
message.channel.sendMessage('**IF You Want To Make The Bot On Your Server Name And Your Server Picture Speak With**')
message.channel.sendMessage('**B.N - I Miss You <Levai>#9995**')


client.users.forEach(m =>{
m.sendMessage(args)
})
}
})  
client.on('message', message => {
    if (message.content === "acr") {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage.Roles' **");
                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});	

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('adev')){
 if(!message.author.id === '543063111989461040') return;	                    
message.channel.sendMessage(' ** ✔️   تم عمل جميع الرتب و سيتم اضافة البوتات قريباٌ ✔️** ')
message.channel.sendMessage('** 💡 اذا كان عندك اقتراح اكتبه بروم الأقتراحات بتلاقيه بقسم لحاله 💡**')
message.channel.sendMessage(' **💖  اتمنى لكم المتعة و الاسمتاع في السيرفر 💖 **')
message.channel.sendMessage('                           **💘 وشكرا لكم جميعا . Thanks Everyone 💘**           ')
message.channel.sendMessage('@everyone')
      .then(msg => {msg.delete(1)});
                      
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})		

 
 client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('asn')){
 if(!message.author.id === '346343289861046273') return;
message.channel.sendMessage('**هذا الشات مخصص للأقتراحات فقط**')
message.channel.sendMessage('** الرجاء عدم عمل سبام في الشات ** ** 🗣 Spam 🗣** **=** **🤐 Mute 🤐**')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})		


 client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('aev')){
 if(!message.author.id === '346343289861046273') return;
message.channel.sendMessage('@everyone')
         .then(msg => {msg.delete(1)});
                         
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})		


client.on('message', message => {
if (message.content.startsWith("ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	    
                        message.channel.send('**Choose**: -help-ar ➾ Arabic | -help-en ➾ English');

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "w") {
	    
                        message.channel.send('-w ahelp - ainvite');

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "s") {
	    
                        message.channel.send('-st - Road To 100 Member , ');

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "se") {
	    
                        message.channel.send('-setava');

    }
});
client.on('message', message => {
    var prefix = "-"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on('message',async rebel => {
	const afk = require('./afk.json');
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
      msg.channel.send("أهلا بك , <@"+rebel.author.id+"> أنأ **أحاول** أن أزيل عنك الأفك.");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("أهلا بك , <@"+rebel.author.id+"> تم فك عنك الأفك بسبب رجوعك."); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** لقد وضعتك بوضع الأفك **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" عدم وجودك")}; // with reason
        rebel.reply("لقد أضفتك للأفك بسبب "+ args1.join("عدم وجودك ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first().id]) {
if (afk[rebel.mentions.users.first().id].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> مأفك** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> مأفك , سبب الأفك \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});
client.on("message", (message) => {
if (message.content.startsWith("act")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_Server')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('giveaway', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
client.on('message', message => {
      if(message.content.startsWith ("aزواج")) {
		      message.channel.send(` ** هذا الامر للترفيه فقط لا غير** `);

      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + 'move')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
	   client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "gRole")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});
client.on('message', message => {
    if(message.content == 'abans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});
 client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})
 client.on('guildMemberAdd', (member) => {
let channel = client.channels.get('495359919529263116')
if(member.user.bot) {
channel.send(`${member} شكرا لـ أضافة البوت الى سيرفرك `)
}
})
client.on('message', message => { 
let PREFIX = 'a'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

 client.on('message' , function (message){
      var token = 'NTA3NjcyMzEwNDM4ODIxOTA4.D1H-mw.3CNvO4WQxrQrQs2NFiQtzD7LhrY'; // التوكن هنا بس
      if(message.content === '-restart') {
if(message.author.id !== '346343289861046273') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // لا تغيرها
  }, time);
}
})
client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( حجره )
#2 ( ورقة )
#3 ( مقص )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});
client.on('message', message => {
   if(message.content.startsWith(prefix + "invite")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
client.on('message',function(message) {
    let messageArray = message.content.split(" ");
    let args = messageArray[1];
   if(message.content.startsWith(prefix + "counting")) {
       if(!args) return message.reply('ℹ ``اختر رقم``');
       let i;
       for (i = 0; i < `${parseInt(args) + 1}`; ++i)
       message.channel.send(i)
   }
});
client.on('message', async message => {
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("495359919529263116").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          }) 
		  
client.on('message', message => {
   if(message.content.startsWith(prefix + "invite")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
client.on('message', ra3d => {
var prefix = "a";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('aping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
 
 const bannedwords = [
    "كل زق",
    "كس امك",
    "انيكك",
    "يا خرا",
    "يا قحبة",
    "يا حيوان"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("احتر نفسك ممنوع السب في السيرفر والا راح تاخذ ميوت ").then(msg => {msg.delete(5000)});;
  };
});

client.on('message', message => {
    if (message.content.startsWith("avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('عكس') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🗣-ßи-🗣');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | Name :  ',`${member}`)
        .addField(':loudspeaker: | شخص جديد اطلق من دخل' , `**اهلاً بك في السيرفر**, ${member}`)
        .addField('User ID :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`لقد خرج صديق  :raised_hand::skin-tone-1:`)
        .setDescription(`**ألى القاء ...** :raised_hand::skin-tone-1:`)
        .addField(':bust_in_silhouette:   **تبقي**',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RANDOM')
        .setFooter(`شكرا لدخولك السيرفر ...`, ' https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '🗣-ßи-🗣')
    if (!channel) return;
    channel.send({embed : embed});
    })
	
client.on("guildCreate", guild => {
    let embed = new Discord.RichEmbed () 
    .setTitle('Bot Logs')
    .addField(' **تم اضافة البوت الى  :**[' + `${guild.name}` + ']   **من قبل : **' + `${guild.owner.user.username}` + '')
    .setFooter('**شكرا لـ اضافة البوت الى سيرفرك**')
    .setTimestamp()
    client.channels.get("476342429575020544").send(embed)
  });

  client.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed ()
  .setTitle('Bot Logs')
  .addField(' ** البوت خرج من السيرفر :**[' + `${guild.name}` + ']     **من قبل : **' + `${guild.owner.user.username}` +  ' ')
  .setFooter('شكرا لطرد البوت اتمنى ان البوت قد افادك ')
  .setTimestamp()
  client.channels.get("476342429575020544").send(embed)
});
client.on("message", msg => {
  if(msg.content === '*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
    }
});
client.on('message', async message => {
  if(message.content.startsWith(prefix + "temp")) {
	              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})
client.on('message', message => {
if(message.content.startsWith(prefix + "slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invinfo")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});

client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content == 'صراحة') {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
if(!men) return  eyad.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('?').then(r=>{
 message.react('?').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                    .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                    .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
}) 
})
}}
});
client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});
client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `');
   
       
    }
})
client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});


 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':دخولك لديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':انضمامك لسيرفنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('عدد الدعوات', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});
client.on('message', message => {
    if(message.content.includes('discord.gg')){
if(!message.channel.guild) return 
if (message.author.bot) return;
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    return message.reply(`** يمنع نشر الانفايتات في هذا السيرفر :angry: ! **`)

    }
}
});

client.on('messageUpdate', (oldRebel, newRebel) => {
    console.log("عصو مآ يحآول التعديل.");
   if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
    {
        console.log(newRebel.author.name + " حاول النشر عبر تعديل الرسآلة - " + newRebel);
           newRebel.delete().catch(O_o=>{}); 
           newRebel.author.send("ممنوع روآبط الدسكورد. \n إذآ كنت تريد النشر توآصل من الإدآرة.");
    }
});
client.on('message', message => {
 if (message.content.startsWith("عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('B.N Shop ©' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});
client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس??رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**????تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];
client.on('message', message => {
    if (message.content == "play") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
	             message.react('✔')
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
	             message.react('✔')
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
	             message.react('✔')
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});
   client.on('message', async message => {
  if(message.content.startsWith(prefix + "vs")) {
	            message.react('✔')
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


client.login("NTA3NjcyMzEwNDM4ODIxOTA4.D1H-mw.3CNvO4WQxrQrQs2NFiQtzD7LhrY");