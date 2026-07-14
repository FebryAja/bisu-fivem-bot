const {

playerPagination

}=require("../utils/pagination");


const {

getServer

}=require("../utils/fivem");


// AMBIL SERVER LIST

const serverList =
require("../utils/serverlist");





module.exports={


name:"search",




async execute(message,args){



const alias =
args[0];



const keyword =
args
.slice(1)
.join(" ")
.toLowerCase();





if(!alias || !keyword){


return message.reply(
"💗 Gunakan `.search <server> <nama>`"
);


}






const target =
serverList[
alias.toLowerCase()
];





if(!target){



let list =
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






const result =
server.players.filter(player=>


player.name
.toLowerCase()
.includes(keyword)


);






if(result.length===0){


return message.reply(

`💔 Player **${keyword}** tidak ditemukan`

);


}








await playerPagination(

message,

{

server:
target.name,


players:
result


}


);






}


}