const cors = require('cors')
const express = require('express')
//por que esta escrito asi?
// const port = process.env.PORT||8080
const app = express()

app.use(express.json(), cors())


//ver si le tengo que quitar el async
app.get("/uno", async (req, res) => {
    try {
        res.send("retornar lista de tareas")
    } catch (error) {
        res.send(error.message)
    }
});

app.listen(8080, () => console.log("servidor se levantado en puerto 8080!"))