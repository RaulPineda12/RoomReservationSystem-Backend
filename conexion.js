//este archivo hace la conexion a la base de datos llamada dbsalas
const mysql = require('mysql');

var conexion = require("mssql");

    // config for your database
    var config = {
        user: 'raul',
        password: '@Tiburon1279',
        server: 'roomreservationsystem-db-server2.database.windows.net',
        database: 'RoomReservationSystem-db',
        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    };
/*
const conexion=mysql.createConnection({
    server: 'roomreservationsystem-db-server2.database.windows.net',
    user: 'raul',
    password: '@Tiburon1279',
    database:'RoomReservationSystem-db'
});
*/
try{
    conexion.connect(config,(err)=>{
        if(err){
            console.log("error en la conexion a la base de datos");
            console.log(err);
        }else{
            console.log("Conexion exitosa a la base de datos");
        }
    });
}catch(err){
    console.log("Error en la conexion a la base de datos: "+err);
}


/*
var Connection = require('tedious').Connection;  
var config = {  
    server: 'tcp:roomreservationsystem-db-server2.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'raul', //update me
            password: '@Tiburon1279'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'RoomReservationSystem-db'  //update me
    }
};  
var conexion = new Connection(config);  
conexion.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

conexion.connect();
*/

module.exports=  conexion;