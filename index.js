const express = require("express");
const formRoutes = require("./routes/formRoutes");
const cors = require("cors")

//instanciar express (llamar a todas las funciones de express)
const app = express();

require("./db")

app.use(express.json(), cors())

app.use(formRoutes)


// require("dotenv").config();
// const port = process.env.PORT;


//antes 4000
app.listen(8080, () => console.log("servidor levantado en puerto 8080"))

//en terminal de putty/linux, para detener puerto en uso
// npx kill-port 8080