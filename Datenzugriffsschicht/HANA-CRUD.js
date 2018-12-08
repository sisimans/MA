var hdb = require('hdb');

module.exports.create = function(username, password_hash, callback){

  //https://github.com/SAP/node-hdb#establish-a-database-connection
  var client = hdb.createClient({
    host           : 'v22018074524569604.quicksrv.de', // system database host
    instanceNumber : '90',       // instance number of the HANA system
    databaseName   : 'DB1',      // name of a particular tenant database
    user           : 'MANSEL',     // user for the tenant database
    password       : 'MANSELhanadb1!'    // password for the user specified
  });

  /*client.on('error', function (err) {
    callback({error: err})
  });*/

  client.connect(function (err) {
    if (err) {
    callback({error: err})
    }

    client.exec('create table TESTO (a int, b varchar(16))', function (err) {
      client.end();

      if (err) {
        callback({error: err})
      }
      callback({error: {}'success'})
    });



  });
}



﻿
