const express= require('express')
const cors= require('cors')
const port=(process.env.port || 3001);

//express
const app= express();
app.use(cors());


//admitir tipo de datos
app.use(express.json())


//config
app.set('port',port);

//rutas
app.use('/api', require('./rutas'))

//iniciar express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log("error al iniciar el servidor")
    }else{
        console.log("servidor corriendo en el puerto: "+port);
    }
})

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
