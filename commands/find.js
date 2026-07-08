const {
EmbedBuilder
}=require("discord.js");


const {
getServer
}=require("../utils/fivem");



module.exports={

name:"find",



async execute(message,args){



const code=args[0];


const keyword =
args.slice(1)
.join(" ")
.toLowerCase();




const server =
await getServer(code);



if(!server)

return message.reply(
"Server tidak ditemukan"
);




const result =
server.players.filter(p=>

p.name
.toLowerCase()
.includes(keyword)

);




let list =
result.slice(0,20)

.map(p=>

`💗 **[${p.id}] ${p.name}**
Ping: \`${p.ping}ms\``

)

.join("\n\n");





let embed =
new EmbedBuilder()


.setTitle(
"💗 PETUAH BISU FINDER 💗"
)


.setColor(
"#ff77cc"
)


.addFields(

{
name:"Server",
value:
server.hostname
},


{
name:"Search",
value:
keyword,

inline:true
},


{
name:"Found",
value:
result.length+" Player",
inline:true
},


{
name:"Result",
value:list || "Kosong"
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