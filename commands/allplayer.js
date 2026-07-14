const {

playerPagination

}=require("../utils/pagination");


const {

getServer

}=require("../utils/fivem");



const serverList =
require("../utils/serverlist");





module.exports={



name:"allplayer",




async execute(message,args){



const alias =
args[0];





if(!alias){


return message.reply(
"☠️ Gunakan `.allplayer <server>`"
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







await playerPagination(

message,

{

server:
target.name,


players:
server.players || []


}

);



}


}