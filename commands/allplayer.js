const {

playerPagination

}=require("../utils/pagination");


const {

getServer

}=require("../utils/fivem");




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



const alias=args[0];



if(!alias)

return message.reply(
".allplayer <server>"
);





const target =
serverList[
alias.toLowerCase()
];



if(!target)

return message.reply(
"Server tidak tersedia"
);




const server =
await getServer(
target.cfx
);




if(!server)

return message.reply(
"Server offline"
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
target.name,


players:
players


}

);



}


}