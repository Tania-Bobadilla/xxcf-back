const getData = async (req, res) => {
    try {
        res.send("retornar lista de tareas")
    } catch (error) {
        res.send(error.message)
    }
};

const createData = async (req, res) => {
    
    // const formInfo = req.body
    console.log(req.body)
    // res.send("mandando informacion al formulario")
};
    

const deleteData = async (req, res) => {
    res.send("borrando informacion del formulario")
};

const updateData = async (req, res) => {
    res.send("actualizando informacion del formulario")
}; 

module.exports = {
                    getData, 
                    createData,
                    deleteData, 
                    updateData
                }