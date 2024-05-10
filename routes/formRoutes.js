const {Router} = require("express");

//control + espacio en las llaves para autocompletar
const {getData, createData, updateData, deleteData} = require ("../controllers/formControllers")

const formRouter = Router();

formRouter.get("/form", getData)

// router.get("/form", async (req, res) => {
//     // res.send("leyendo informacion del formulario")
//     const result = await pool.query("SELECT NOW()");
//     console.log(result);
//     res.json("executed")
// });

formRouter.post("/form", createData) 

formRouter.put("/form", updateData);

formRouter.delete("/form", deleteData);

module.exports = formRouter