const {

playerPagination

}=require("../utils/pagination");


const {

getServer

}=require("../utils/fivem");





module.exports={


name:"find",



async execute(message,args){



const code =
args[0];



const keyword =
args.slice(1)
.join(" ")
.toLowerCase();




if(!code || !keyword){

return message.reply(
"☠️ Gunakan `.find <cfx> <nama>`"
);

}





const server =
await getServer(code);




if(!server){

return message.reply(
"💔 Server tidak ditemukan"
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
`💔 Player **${keyword}** tidak ditemukan`
);

}






await playerPagination(

message,

{

server:
server.hostname,


players:
result

}

);





}


}