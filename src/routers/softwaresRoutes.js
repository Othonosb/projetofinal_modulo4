import express from 'express';
import SoftwareController from '../controllers/softwareController.js';

const router = express.Router();

router.get('/softwares', SoftwareController.selectSoftwares);
router.get('/software/:id', SoftwareController.selectSoftware);
router.post('/software', SoftwareController.insertSoftware);
router.put('/software', SoftwareController.updateSoftware);
router.delete('/software/:id', SoftwareController.deleteSoftware);

export default router;