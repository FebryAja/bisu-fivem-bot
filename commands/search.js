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


name:"search",




async execute(message,args){




const alias =
args[0];



const keyword =
args.slice(1)
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






const players =
server.players || [];






const result =
players.filter(p=>

p.name
.toLowerCase()
.includes(keyword)

);






if(result.length===0){

return message.reply(
`💔 Tidak menemukan **${keyword}**`
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