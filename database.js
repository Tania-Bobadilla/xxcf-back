const { Client, Pool} = require ("pg");
require("dotenv").config();
const user = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST
const port = process.env.PORT
const database = process.env.DATABASE


const pool = new Pool ({
    
    user: user,
    password: password,
    host: host, 
    port: port, 
    database: database,
    ssl: {
        rejectUnauthorized: false
    }
});

// (async () => {
//     const client = await pool.connect();
//     try {
//         const {rows} = await client.query('SELECT current_user');
//         const currentUser = rows [0] ['currrent_user']
//         console.log(currentUser);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         client.release();
//     }
// })();   

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
