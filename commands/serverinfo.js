const {

EmbedBuilder

}=require("discord.js");



const {

getServer

}=require("../utils/fivem");



const serverList =
require("../utils/serverlist");







module.exports={


name:"serverinfo",



async execute(message,args){



const alias =
args[0];





if(!alias){


return message.reply(
"💗 Gunakan `.serverinfo <server>`"
);


}







const target =
serverList[
alias.toLowerCase()
];







if(!target){



const list =
Object.keys(serverList)
.join(", ");




return message.reply(

`
💔 Server tidak ditemukan

Server tersedia:
\`${list}\`
`

);


}








const server =
await getServer(
target.server
);







if(!server){



return message.reply(
"💔 Server offline"
);


}









const embed =
new EmbedBuilder()






.setAuthor({


name:

"🌸 PETUAH BISU Finder",



iconURL:

message.client.user.displayAvatarURL()


})








.setTitle(

`🌸 ${target.name}`

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


name:

"🟢 Status",



value:

"```ONLINE```",



inline:true


},








{


name:

"👥 Players",



value:

"```"+
`${server.clients}/${server.sv_maxclients}`
+"```",



inline:true


},







{


name:

"🔗 Connect",



value:

"```"+
`cfx.re/join/${target.server}`
+"```"



}







)










.setFooter({



text:

"🌸 PETUAH BISU Sakura System"



})








.setTimestamp();











message.reply({

embeds:[embed]

});






}



};