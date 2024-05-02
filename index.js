const express = require("express");
const cors = require("cors");
// const pool = require ("./database")


//instanciar express (llamar a todas las funciones de express)
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

// app.use()



//ruta
// app.get("/addform", (req, res) => {
//     console.log(req.body);
//     res.send("respuesta recibida" + req.body);
// })

app.listen(4000, () => console.log("servidor levantado en puerto 4000"))