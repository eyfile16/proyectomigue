const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entry');  // Asegúrate de que el nombre coincide

router.post('/api/entry', entryController.createEntry); // Utiliza entryController
router.get('/api/entry/holder/:id', entryController.getEntriesByHolder); // Utiliza entryController
router.get('/api/entry/dia', entryController.getEntriesByDay); // Utiliza entryController
router.post('/api/entry/fechas', entryController.getEntriesByDates); // Utiliza entryController
router.put('/api/entry/salida/:id', entryController.registerCheckout); // Utiliza entryController

module.exports = router;
