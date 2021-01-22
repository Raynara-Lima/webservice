const { Router } = require('express');
const ReceitasController = require('../server/controllers/receitas');

const routes = Router();

routes.get('/receitas', ReceitasController.index);

routes.post('/receitas/', ReceitasController.store);

routes.put('/receitas/:id', ReceitasController.update);

routes.delete('/receitas/:id', ReceitasController.destroy);

module.exports = routes;
