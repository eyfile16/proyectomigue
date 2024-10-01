const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptop');

router.post('/api/laptop', laptopController.createLaptop);
router.put('/api/laptop/:id', laptopController.updateLaptop);
router.get('/api/laptop', laptopController.getLaptops);
router.get('/api/laptop/:id', laptopController.getLaptopById);
router.patch('/api/laptop/activate/:id', laptopController.activateLaptop);
router.patch('/api/laptop/deactivate/:id', laptopController.deactivateLaptop);
router.put('/api/laptop/qr/:id', laptopController.generateQR);

module.exports = router;
