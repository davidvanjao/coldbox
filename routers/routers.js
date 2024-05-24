const express = require('express'); 
const router = express.Router(); 

//referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const NivelAcessoController = require('../controllers/nivel_acesso'); 
const DadosController = require('../controllers/dados'); 
const AlertaController = require('../controllers/alerta'); 
const LogsController = require('../controllers/logs'); 
const LocalizacaoController = require('../controllers/localizacao'); 

router.get('/usuarios', UsuariosController.listar); 
router.post('/usuarios', UsuariosController.cadastrar); 
router.patch('/usuarios/:user_id', UsuariosController.editar); 
router.delete('/usuarios/:user_id', UsuariosController.apagar); 

router.get('/nivel_acesso', NivelAcessoController.listar); 
router.post('/nivel_acesso', NivelAcessoController.cadastrar); 
router.patch('/nivel_acesso/:nivel_id', NivelAcessoController.editar); 
router.delete('/nivel_acesso/:nivel_id', NivelAcessoController.apagar); 

router.get('/dados', DadosController.listar); 
router.post('/dados', DadosController.cadastrar); 

router.get('/alerta', AlertaController.listar); 
router.post('/alerta', AlertaController.cadastrar); 
router.patch('/alerta/:alerta_id', AlertaController.editar); 
router.delete('/alerta/:alerta_id', AlertaController.apagar); 

router.get('/logs', LogsController.listar); 
router.post('/logs', LogsController.cadastrar); 
router.patch('/logs/:logs_id', LogsController.editar); 

router.get('/localizacao', LocalizacaoController.listar); 
router.post('/localizacao', LocalizacaoController.cadastrar); 
router.patch('/localizacao/:loc_id', LocalizacaoController.editar); 
router.delete('/localizacao/:loc_id', LocalizacaoController.apagar); 

module.exports = router;