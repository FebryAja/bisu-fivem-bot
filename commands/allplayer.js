const {

EmbedBuilder

}=require("discord.js");


const {

getServer

}=require("../utils/fivem");




// SERVER DATABASE

const serverList={


gprp:{

    name:
    "Garuda Prime Roleplay",

    cfx:
    "vgaqm5"

}


};






module.exports={


name:"allplayer",



async execute(message,args){



const alias =
args[0];




if(!alias){


return message.reply(
"Gunakan: `.allplayer <server>`"
);


}







const target =
serverList[
alias.toLowerCase()
];




if(!target){


return message.reply(
"💔 Server tidak tersedia"
);


}








const server =
await getServer(
target.cfx
);





if(!server){


return message.reply(
"💔 Server offline"
);


}








let players =
server.players;



if(
!players ||
players.length===0
){


return message.reply(
"💔 Tidak ada player online"
);


}








let list =


players

.slice(0,40)

.map(player=>{


let status =
player.ping < 100
?"💗"
:"🌸";



return (

`${status} **[${player.id}] ${player.name}**
Ping: \`${player.ping}ms\``

);


})


.join("\n\n");








const embed =
new EmbedBuilder()


.setTitle(

"💗 PETUAH BISU PLAYER LIST 💗"

)


.setColor(

"#ff77cc"

)


.addFields(



{

name:"Server",

value:
target.name

},



{

name:"Online",

value:
`${players.length} Player`

},



{

name:"Players",

value:list

}



)



.setFooter({

text:

"PETUAH BISU 💗"

})


.setTimestamp();







message.reply({

embeds:[embed]

});





}


}