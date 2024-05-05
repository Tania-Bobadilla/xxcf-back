const { Router } = require("express");

const router = Router();

router.get("/form", (req, res) => {
    res.send("leyendo informacion del formulario")
});

router.post("/form", (req, res) => {
    res.send("mandando informacion al formulario")
});

router.put("/form", (req, res) => {
    res.send("actualizando informacion del formulario")
});

router.delete("/form", (req, res) => {
    res.send("borrando informacion del formulario")
});

module.exports = router