const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller.js');

router.post('/usuarios', usuarioController.create);           
router.get('/usuarios', usuarioController.retrieveAllUsuarios); 
router.get('/usuarios/:id', usuarioController.getUsuarioById);  
router.put('/usuarios/:id', usuarioController.updateById);      
router.delete('/usuarios/:id', usuarioController.deleteById);   


module.exports = router;
