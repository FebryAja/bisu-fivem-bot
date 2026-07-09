const {

playerPagination

}=require("../utils/pagination");


const {

getServer

}=require("../utils/fivem");



module.exports={


name:"players",


async execute(message,args){



const code=args[0];



if(!code)

return message.reply(
"Gunakan `.players <cfx>`"
);




const server =
await getServer(code);



if(!server)

return message.reply(
"💔 Server tidak ditemukan"
);




let players =
server.players || [];



players.sort(
(a,b)=>a.id-b.id
);



playerPagination(

message,

{

server:
server.hostname,


players:
players

}

);



}


}