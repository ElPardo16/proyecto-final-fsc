const { Router } = require("express");
const { getCollaborator, saveCollaborator, deleteCollaborator, updateCollaborator } = require("../controller/collaborator");

const routerCollaborator = Router()

routerCollaborator.get('/collaborator', getCollaborator)
routerCollaborator.post('/collaborator', saveCollaborator)
routerCollaborator.delete('/collaborator/:id', deleteCollaborator)
routerCollaborator.put('/collaborator/:id', updateCollaborator)


module.exports = routerCollaborator