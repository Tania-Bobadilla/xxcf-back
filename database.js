const { Client, Pool} = require ("pg");
// const {response} = require("express")

const pool = new Pool ({
    user: 'postgres_master',
    password: 'mP6Z}05z',
    host:'rds-beauter.cynjfvcwkww2.us-east-1.rds.amazonaws.com', 
    port: 5432, 
    database: 'beauterbd',
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect((err) => {
    if (err) {
        console.error("error de conexion", err.stack)
    } else {
        console.log("conectado!!")
    }
})


// const createTblQry = `CREATE TABLE prueba (
//     nombre serial PRIMARY KEY,
//     direccion VARCHAR (50) UNIQUE NOT NULL,
//     pais VARCHAR (50) UNIQUE NOT NULL,
//     ciudad VARCHAR (50) UNIQUE NOT NULL);`;

// pool.query(createTblQry).then((Response) => {
//         console.log("tabla creada");
//         console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);      
//     });
    

module.exports = pool;
