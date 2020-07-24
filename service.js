var Go = console.log;
var request = require('request');

function getClient(callback){

request("https://vokan-api.herokuapp.com/clients?start=0&size=10", {json:true},function(err,res,body){
    if (err) { return console.log('Erreur', err); }
    callback(body);
});
}

exports.getClient=getClient;