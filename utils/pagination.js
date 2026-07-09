const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");


async function playerPagination(message,data){


let page = 0;

const limit = 15;

const pages =
Math.ceil(data.players.length / limit);



function clean(text){

return String(text || "")
.replace(/\^\d/g,"")
.slice(0,50);

}





function embed(){


let list =
data.players

.slice(
page*limit,
page*limit+limit
)

.map(p=>

`💗 **[${p.id}] ${clean(p.name)}**
\`${p.ping || 0}ms\``

)

.join("\n");




return new EmbedBuilder()

.setTitle(
"💗 PETUAH BISU 💗"
)

.setColor(
"#ff77cc"
)

.setDescription(
`
🌸 **${clean(data.server)}**

👥 Player:
\`${data.players.length}\`

📄 Page:
\`${page+1}/${pages}\`

${list}
`
)

.setFooter({
text:"PETUAH BISU FINDER"
});

}





function button(){

return new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId("prev")

.setEmoji("⬅️")

.setStyle(ButtonStyle.Secondary)

.setDisabled(page===0),



new ButtonBuilder()

.setCustomId("next")

.setEmoji("➡️")

.setStyle(ButtonStyle.Secondary)

.setDisabled(page===pages-1)

);

}





const msg =
await message.reply({

embeds:[embed()],

components:[button()]

});




const collector =
msg.createMessageComponentCollector({

time:120000

});



collector.on(
"collect",
async i=>{


if(i.user.id !== message.author.id){

return i.reply({

content:
"💔 Bukan pencarian kamu",

ephemeral:true

});

}



if(i.customId==="next")
page++;


if(i.customId==="prev")
page--;



await i.update({

embeds:[embed()],

components:[button()]

});


});



}


module.exports={playerPagination};