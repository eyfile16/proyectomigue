const express = require('express'); 
const router = express.Router();
const holderController = require('../controllers/holder'); 


router.post('/api/holder', holderController.createHolder);
router.put('/api/holder/:id', holderController.updateHolder);
router.get('/api/holder', holderController.getHolders);
router.get('/api/holder/:id', holderController.getHolderById);
router.patch('/api/holder/activate/:id', holderController.activateHolder);
router.patch('/api/holder/deactivate/:id', holderController.deactivateHolder);

module.exports = router;

