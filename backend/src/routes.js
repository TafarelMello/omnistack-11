const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// LIST ALL ONGS
routes.get('/ongs', OngController.index);
// CREATE ONGS
routes.post('/ongs', OngController.create);

// GET ALL PROFILE
routes.get('/profile', ProfileController.index);

// CREATE INCIDENTS
routes.post('/incidents', IncidentController.create);
// LIST ALL INCIDENTS
routes.get('/incidents', IncidentController.index);
// DELETE INCIDENTS
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
