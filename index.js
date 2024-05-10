const express = require("express");
const formRoutes = require("./routes/formRoutes");


// app.use(cors());



//instanciar express (llamar a todas las funciones de express)
const app = express();

require("./db")

app.use(express.json())

app.use(formRoutes)



// require("dotenv").config();
// const port = process.env.PORT;

//middlewares



// app.use(cors());


app.listen(4000, () => console.log("servidor levantado en puerto 4000"))