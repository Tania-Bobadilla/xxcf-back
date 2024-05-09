const {Router} = require("express");
const pool = require("../db");
//control + espacio en las llaves para autocompletar
const {getData, createData, updateData, deleteData} = require ("../controllers/formControllers")

const router = Router();

router.get("/form", getData)

// router.get("/form", async (req, res) => {
//     // res.send("leyendo informacion del formulario")
//     const result = await pool.query("SELECT NOW()");
//     console.log(result);
//     res.json("executed")
// });

router.post("/form", createData) 

router.put("/form", updateData);

router.delete("/form", deleteData);

module.exports = router