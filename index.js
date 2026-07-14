require("dotenv").config();


const {
    Client,
    GatewayIntentBits,
    Collection
}=require("discord.js");


const fs=require("fs");



const client=new Client({

intents:[

GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent

]

});



client.commands=new Collection();




const files =
fs.readdirSync("./commands")
.filter(file=>file.endsWith(".js"));



for(const file of files){


const command=
require(`./commands/${file}`);



client.commands.set(
command.name,
command
);


console.log(
`💗 ${command.name} Loaded`
);


}




client.once("ready",()=>{


console.log("====================");

console.log(
`💗 PETUAH BISU ONLINE 💗`
);

console.log("====================");



client.user.setPresence({

activities:[{

name:
".help | PETUAH BISU 💗",

type:0

}],


status:"online"

});


});







client.on(
"messageCreate",
async message=>{


if(message.author.bot)
return;



const prefix =
process.env.PREFIX || ".";



if(
!message.content.startsWith(prefix)
)
return;



const args =
message.content
.slice(prefix.length)
.trim()
.split(/ +/);



const cmd =
args.shift()
.toLowerCase();




const command =
client.commands.get(cmd);




if(!command)
return;



try{


await command.execute(
message,args
);


}catch(err){


console.log(err);


message.reply(
"💔 Command error"
);


}


});





client.login(
process.env.TOKEN
);