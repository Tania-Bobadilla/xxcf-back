const express = require("express");
// const formRoutes = require("./routes/formRoutes");


// app.use(cors());

const cors = require("cors")

//instanciar express (llamar a todas las funciones de express)
const app = express();

// require("./db")

app.use(cors());

app.use(express.json())

// app.use(formRoutes)

// const formRouter = Router();

app.get("/form", async (req, res) => {
    try {
        res.send("retornar lista de tareas")
    } catch (error) {
        res.send(error.message)
    }
})

// require("dotenv").config();
// const port = process.env.PORT;

//middlewares



// app.use(cors());

//antes 4000
app.listen(8080, () => console.log("servidor levantado en puerto 8080"))

//en terminal de putty/linux, para detener puerto en uso
// npx kill-port 3000