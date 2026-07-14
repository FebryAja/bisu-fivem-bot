const {

EmbedBuilder

}=require("discord.js");


const serverList =
require("../utils/serverlist");





module.exports={


name:"help",



async execute(message){





const servers =

Object.keys(serverList)

.join(", ");







const embed =

new EmbedBuilder()





.setAuthor({

name:

"☠️ NENEK MOYANG UMC x DRMC x HSK ☠️",


iconURL:

message.client.user.displayAvatarURL()

})





.setColor(

"#ff77cc"

)






.setDescription(

`

**Prefix :** \`.\`


🌐 **CFX COMMAND**

\`.server <cfx>\`
↳ Info server


\`.players <cfx>\`
↳ List semua player


\`.find <cfx> <nama>\`
↳ Cari player



☠️ **SAVED SERVER**

\`.serverinfo <server>\`
↳ Info server tersimpan

\`.allplayer <server>\`
↳ List semua player


\`.search <server> <nama>\`
↳ Cari player



📌 **Server List**

\`${servers}\`


`

)






.setFooter({

text:

"NENEK MOYANG UMC x DRMC x HSK FINDER ☠️"

})





.setTimestamp();







message.reply({

embeds:[embed]

});




}



}