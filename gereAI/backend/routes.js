const express = require('express');
const route = express.Router();

const cadastroController = require('./src/controllers/cadastroController');

route.post("/login", (req, res) => {
    
});

route.post("/cadastro", cadastroController.postCadastro);

module.exports = route;
