const express = require('express'); 
const router = express.Router(); 

//referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 

router.get('/usuarios', UsuariosController.listar); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios/:user_id', UsuariosController.editarUsuarios); 
router.delete('/usuarios/:user_id', UsuariosController.apagarUsuarios); 

module.exports = router;