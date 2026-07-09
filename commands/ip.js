const {

EmbedBuilder

}=require("discord.js");


const {

getServerIP

}=require("../utils/fivem");


const serverList =
require("../utils/serverlist");





module.exports={


name:"ip",


async execute(message,args){



let input =
args[0];



if(!input){

return message.reply(
"Gunakan `.ip <server/cfx>`"
);

}





let code;



if(
serverList[
input.toLowerCase()
]
){


code =
serverList[
input.toLowerCase()
]
.server;


}else{


code =
input;


}





let ip =
await getServerIP(code);




if(!ip){

return message.reply(
"💔 IP tidak ditemukan"
);

}





let embed =
new EmbedBuilder()


.setTitle(
"💗 SERVER IP FINDER 💗"
)


.setColor(
"#ff77cc"
)


.addFields(


{
name:"Server",
value:
input
},


{
name:"Endpoint",
value:
"```"+ip+"```"
}


)


.setFooter({

text:
"PETUAH BISU 💗"

});





message.reply({

embeds:[embed]

});



}


}