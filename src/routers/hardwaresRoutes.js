import express from 'express';
import HardwareController from '../controllers/hardwareController.js';

const router = express.Router();

router.get('/hardwares', selectHardwares);
router.get('/hardware/:id', selectHardware);
router.post('/hardware', insertHardware);
router.put('/hardware', updateHardware);
router.delete('/hardware/:id', deleteHardware);

export default router;