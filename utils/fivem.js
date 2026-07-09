const axios = require("axios");



// ==============================
// CLEAN CFX INPUT
// ==============================

function cleanCode(input){


    if(!input)
    return null;



    return input

    .replace("https://cfx.re/join/","")
    .replace("http://cfx.re/join/","")
    .replace("cfx.re/join/","")
    .trim();


}






// ==============================
// GET SERVER FROM CFX
// ==============================


async function getServer(input){


try{


    const code =
    cleanCode(input);



    if(!code)
    return null;





    let url;



    // JIKA INPUT IP:PORT

    if(
        code.includes(":")
    ){


        url =
        `http://${code}/players.json`;


        const playersResponse =
        await axios.get(
            url,
            {
                timeout:10000
            }
        );



        const infoResponse =
        await axios.get(

            `http://${code}/info.json`,

            {
                timeout:10000
            }

        );






        return {


            hostname:

            infoResponse.data.vars?.sv_projectName
            ||
            infoResponse.data.server
            ||
            "Unknown Server",



            players:

            playersResponse.data
            ||
            [],



            clients:

            playersResponse.data.length,



            sv_maxclients:

            infoResponse.data.vars?.sv_maxClients
            ||
            "?"



        };



    }








    // JIKA INPUT CFX CODE


    const response =

    await axios.get(


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








    if(

        !response.data ||

        !response.data.Data

    ){


        return null;


    }








    return response.data.Data;









}catch(error){





console.log(

`
======================

FIVEM API ERROR

${error.message}

======================
`

);





return null;




}




}









// ==============================
// GET PLAYERS ONLY
// ==============================


async function getPlayers(code){



const server =

await getServer(code);




if(!server)

return [];





return server.players || [];




}









// ==============================
// GET SERVER IP
// ==============================


async function getServerIP(code){



const server =

await getServer(code);




if(!server)

return null;






if(

server.connectEndPoints &&

server.connectEndPoints.length > 0

){


return server.connectEndPoints[0];


}





return null;




}










// ==============================
// EXPORT
// ==============================


module.exports={


    getServer,


    getPlayers,


    getServerIP


};