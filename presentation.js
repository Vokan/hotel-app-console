var Go = console.log;

function menu(){
    Go("1. Lister personne");
    Go("99. Sortir");
   
}
exports.afficherStrart = start;

var readline = ('readline');
var rl = readline.createInterface({
    intput : process.sdtin,
    output : process.sdtout
});

function start(){
    menu();
    
    rl.question('faite un choix ',function(saisie){

        switch (saisie) {
            case "1" : Go(">> Liste des clients");
            start();
            break;

            case "99" : Go("Aurevoir");
            rl.close();
            break;

    }
});
}
