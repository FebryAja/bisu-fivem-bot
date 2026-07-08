const axios = require("axios");


// ===============================
// GET SERVER DATA
// ===============================

async function getServer(input){


    try{


        // ambil kode CFX saja
        const code = input

        .replace("https://cfx.re/join/","")
        .replace("http://cfx.re/join/","")
        .replace("cfx.re/join/","")
        .trim();



        const url =

        `https://frontend.cfx-services.net/api/servers/single/${code}`;




        const response = await axios.get(
            url,
            {


                headers:{


                    "User-Agent":

                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",



                    "Accept":

                    "application/json",



                    "Origin":

                    "https://servers.fivem.net"


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

            "FiveM API Error:",

            error.response?.status ||

            error.message

        );



        return null;


    }


}






// ===============================
// GET PLAYER LIST
// ===============================


async function getPlayers(code){


    const server =

    await getServer(code);




    if(!server){

        return null;

    }




    return server.players || [];


}







module.exports={

    getServer,
    getPlayers

};