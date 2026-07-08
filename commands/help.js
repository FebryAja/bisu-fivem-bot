const {
EmbedBuilder
}=require("discord.js");



module.exports={

name:"help",


async execute(message){



const embed =
new EmbedBuilder()


.setAuthor({

name:
"💗 PETUAH BISU 💗",

iconURL:
message.client.user.displayAvatarURL()

})


.setColor(
"#ff77cc"
)


.setDescription(
`
**Prefix:** \`.\`


🌐 **SERVER**
\`.server <cfx>\`
Cek informasi server


👥 **PLAYERS**
\`.players <cfx>\`
List player online


🔎 **FIND**
\`.find <cfx> <nama>\`
Cari menggunakan CFX


💗 **SEARCH**
\`.search <server> <nama>\`
Cari server tersimpan

👥 **ALL PLAYER**
\`.allplayer <server>\`
List player online

Example:
\`\`\`
.search gprp hsk
\`\`\`
`
)


.setFooter({

text:
"💗 PETUAH BISU SYSTEM 💗"

})


.setTimestamp();




message.reply({

embeds:[embed]

});


}

}