const {Client} = require ("pg");

const client = new Client ({
    user: 'postgres_master',
    password: 'mP6Z}05z',
    host:'localhost',
    port: 5432, //default
    database: 'beauterbd',
});

// module.exports = {
//     query: (text, params) => client.query(text, params)
// };

client.connect((err) => {
    if (err) {
        console.error("connection error", err.stack)
    } else {
        console.log("connected")
    }
});

module.exports = client;

// client.query(`Select * from nombres`, (err, res) => {
//     if(!err){
//         console.log(res.rows)
//     }else{
//          console.log(err.message);
//     }
//     client.end;
// })