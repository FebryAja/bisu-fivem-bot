const {

EmbedBuilder

}=require("discord.js");


const {

getServer

}=require("../utils/fivem");



module.exports={


name:"players",



async execute(message,args){


let code=args[0];


let server =
await getServer(code);



if(!server){

return message.reply(
"💔 Server tidak ditemukan"
);

}





let list =

server.players

.slice(0,40)

.map(p=>{


return (

`🌸 **${p.id}**
♡ ${p.name}
`

);


})

.join("");







let embed =
new EmbedBuilder()


.setTitle(
"🌸 ONLINE PLAYERS"
)


.setDescription(

`
♡ **${server.hostname}**

━━━━━━━━━━━━━━

💗 Total Player:
\`${server.players.length} Online\`
`

)


.setColor(
"#ff77cc"
)


.addFields(

{

name:"🌸 Player List",

value:list

}

)


.setFooter({

text:
"Tetsu Sakura Finder"

})


.setTimestamp();





message.reply({

embeds:[embed]

});



}


}