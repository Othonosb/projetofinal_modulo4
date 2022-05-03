import express from 'express';
import HardwareController from '../controllers/hardwareController.js';

const router = express.Router();

router.get('/hardwares',HardwareController.selectHardwares);
router.get('/hardware/:id',HardwareController.selectHardware);
router.post('/hardware',HardwareController.insertHardware);
router.put('/hardware', HardwareController.updateHardware);
router.delete('/hardware/:id',HardwareController.deleteHardware);

export default router;