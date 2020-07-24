var Go = console.log;

function menu(){
    Go("1. Lister personne");
    Go("99. Sortir");
   
}
exports.afficherStrart = start;


var readline = require('readline');
var service = require('./service');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start(){
    menu();
    
    rl.question("Un choix s'offre à toi ! ",function(saisie){

        switch (saisie) {
            case "1" : Go(">> Liste des clients");
            service.getClient((client)=>{
                Go(client);
                start();
            });
            break;

            case "99" : Go("Au revoir");
            rl.close();
            break;
            default:Go("byby");
            rl.close();
        }
    });
}
