const {
    EmbedBuilder
}=require("discord.js");


const {
    getServer
}=require("../utils/fivem");



module.exports={

name:"server",


async execute(message,args){


const code = args[0];


if(!code){

return message.reply(
"🌸 Gunakan `.server kodecfx`"
);

}


const server =
await getServer(code);



if(!server){

return message.reply(
"💔 Server tidak ditemukan"
);

}




const embed =
new EmbedBuilder()


.setAuthor({

name:"🌸 Tetsu FiveM Finder",

iconURL:
message.client.user.displayAvatarURL()

})


.setTitle(
`🌸 ${server.hostname}`
)


.setDescription(
`
━━━━━━━━━━━━━━

💗 **Server sedang aktif**

✨ Informasi server berhasil ditemukan
`
)


.setColor(
"#ff77cc"
)


.addFields(


{
name:"🟢 Status",
value:"```ONLINE```",
inline:true
},


{
name:"👥 Players",
value:
"```"+
`${server.clients}/${server.sv_maxclients}`
+"```",
inline:true
},


{
name:"🔗 Connect",
value:
"`cfx.re/join/"+code+"`"
}


)


.setFooter({

text:
"🌸 Tetsu Sakura System"

})


.setTimestamp();





message.reply({

embeds:[embed]

});



}

}