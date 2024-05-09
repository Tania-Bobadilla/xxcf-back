const {Pool} = require ("pg");
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
    // ssl: true
    ssl: {
        rejectUnauthorized: false
    }
});

 
//puedo hacer esto con el try catch
pool.connect((err) => {
    if (err) {
        console.error("error de conexion", err.stack)
    } else {
        console.log("conectado!!")
    }
})



    

module.exports = pool;
