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

    


conexion.connect(config,(err)=>{
    if(err){
        console.log("error en la conexion a la base de datos");
        console.log(err);
    }else{
        console.log("Conexion exitosa a la base de datos");
    }
});
