const axios = require("axios");



// CLEAN INPUT

function cleanCode(input){

    return input
    .replace("https://cfx.re/join/","")
    .replace("http://cfx.re/join/","")
    .replace("cfx.re/join/","")
    .trim();

}





async function getServer(input){


try{


const code =
cleanCode(input);




// =======================
// MODE IP:PORT
// =======================


if(code.includes(":")){



    const players =
    await axios.get(

        `http://${code}/players.json`,

        {
            timeout:15000
        }

    );





    const dynamic =
    await axios.get(

        `http://${code}/dynamic.json`,

        {
            timeout:15000
        }

    );






    return {


        hostname:

        dynamic.data.hostname
        ||
        "Unknown Server",



        players:

        players.data || [],



        clients:

        dynamic.data.clients
        ||
        players.data.length,



        sv_maxclients:

        dynamic.data.sv_maxclients
        ||
        "?",



        connectEndPoints:[

            code

        ]



    };



}








// =======================
// MODE CFX
// =======================


const response = await axios.get(


`https://frontend.cfx-services.net/api/servers/single/${code}`,

{

headers:{

"User-Agent":
"Mozilla/5.0",

"Accept":
"application/json"

},


timeout:15000


}

);






return response.data.Data;






}catch(err){



console.log(

"FIVEM ERROR:",
err.message

);



return null;


}



}







async function getPlayers(code){


const server =
await getServer(code);


return server?.players || [];


}






async function getServerIP(code){


const server =
await getServer(code);



if(!server)

return null;



return (

server.connectEndPoints?.[0]

||

null

);


}




module.exports={

getServer,
getPlayers,
getServerIP

};