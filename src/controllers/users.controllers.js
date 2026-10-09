// Controlador define quien hace una accion especifica 
const createUser = (req , res) => {
    res.json({msg : 'Registrar Usuario'})
}

const getUser = (req, res) => {
    res.json({ msg: 'Obtiene todos los usuarios' });
}

const updateUserPut = (req, res) => {
    res.json({ msg: 'Actualizar todos las propiedades de un usuario' });
}

const updateUserPatch = (req, res) => {
    res.json({ msg: 'Actualizar una o mas propiedades del usuario' });
}

const deletetUser = (req, res) => {
    res.json({ msg: 'Elimina un usuario' });
}

export {
    createUser,
    getUser,
    updateUserPut ,
    updateUserPatch,
    deletetUser
}

