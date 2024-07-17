const express = require('express');
const router = express.Router();
const bulletinsController = require('../controllers/bulletinsController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', bulletinsController.getBulletins);
router.post('/', bulletinsController.upload, bulletinsController.createBulletin);
router.delete('/:id', bulletinsController.deleteBulletin);
// router.put('/:id', bulletinsController.updateBulletin);
router.put('/:id', upload.single('photo'), bulletinsController.updateBulletin);

module.exports = router;
