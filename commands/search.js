const {
EmbedBuilder
}=require("discord.js");


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



const alias=args[0];



const keyword=
args.slice(1)
.join(" ")
.toLowerCase();



if(!alias || !keyword)

return message.reply(
".search <server> <nama>"
);





const target =
serverList[alias];




if(!target)

return message.reply(
"💔 Server tidak tersedia"
);




const server =
await getServer(
target.cfx
);



let result =
server.players.filter(p=>

p.name
.toLowerCase()
.includes(keyword)

);




if(result.length==0)

return message.reply(
"Player tidak ditemukan"
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
value:target.name
},


{
name:"Search",
value:
"`"+keyword+"`",

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