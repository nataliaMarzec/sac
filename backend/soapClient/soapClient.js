var SoapClient = require('../lib/node-soap-client.js').SoapClient;
const Afip = require('@afipsdk/afip.js');
var express = require('express');
// var soap = require('soap');
this.WSAA_WSDL  = path.resolve(__dirname, 'Afip_res/', 'wsaa.wsdl');
// wsaservice="https://wsaahomo.afip.gov.ar/ws/services/LoginCms"

//const afip = new Afip({ CUIT: 20111111112 });
//instanciar afip

var url = this.WSAA_WSDL;
var args = {name: 'value'};
soap.createClient(url, function(err, client) {
    client.MyFunction(args, function(err, result) {
        console.log(result);
    });
});


 var url = "http://localhost:3030/bmicalculator?wsdl";
  var args = {weight:65.7,height:1.63};
   soap.createClient(url,function(err,client){
        if(err) console.error(err);
         else { client.calculateBMI(args,function(err,response){ 
             if(err) console.error(err);
              else { console.log(response); 
                res.send(response);
             } }) } }); 

// new SoapClient({wsdl: 'http://api.metabus.ru/0.0.1/ws/SearchingModule?WSDL'}).init(function(err, metabus) {
//     var searchingModule = new metabus.SearchingModule();

//     searchingModule.search({geoFilter: {distance: 10}, text: 'кофе около кремля'}, function(err, result) {
//         if (err)
//             console.error('Server error:', err.message);
//         else
//             console.log(result);
//     });
// });

