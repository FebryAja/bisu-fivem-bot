const {

EmbedBuilder

}=require("discord.js");



const {

getServer,
getServerIP

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










const ip =

await getServerIP(

target.server

)

||

"Hidden";









const embed =

new EmbedBuilder()






.setAuthor({


name:

"💗 PETUAH BISU SERVER 💗",



iconURL:

message.client.user.displayAvatarURL()



})






.setColor(

"#ff77cc"

)






.setDescription(

`

🌸 **${target.name}**


━━━━━━━━━━━━


🟢 **Status**

\`ONLINE\`



👥 **Players**

\`${server.clients}/${server.sv_maxclients}\`



🔗 **Connect**

\`cfx.re/join/${target.server}\`



📡 **Endpoint**

\`${ip}\`


`

)






.setFooter({


text:

"PETUAH BISU FINDER 💗"


})






.setTimestamp();








message.reply({


embeds:[embed]


});





}




}