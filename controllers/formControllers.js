const getData = async (req, res) => {
    try {
        res.send("retornar lista de tareas")
    } catch (error) {
        res.send(error.message)
    }
};

// let formsInfo = [];

const createData = async (req, res) => {
    
    // try {
    //     const formInfo = req.body

    //     formsInfo.push(formInfo)

    //     res.json({success: true, message: "se subio la info"})
    // } catch (error) {
    //     res.json({success: false, message: error.message})
    // }
    const formInfo = req.body
    console.log(req.body)
    res.json({success: true, message: "soy el mapa"})
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