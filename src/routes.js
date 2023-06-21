const express = require('express');
const routes = express.Router();

const campeaoController = require('./controllers/CampeaoController');

routes.get('/campeoes', campeaoController.read)
routes.post('/campeoes', campeaoController.create)
routes.put('/campeoes/:id', campeaoController.update)
routes.delete('/campeoes/:id', campeaoController.delete)

module.exports = routes;