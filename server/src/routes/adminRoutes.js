const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/admin', adminController.createAdmin);
router.get('/admins/:id', adminController.getAdminById);
router.get('/admins', adminController.getAllAdmins);
router.put('/admins/:id', adminController.updateAdmin);
router.delete('/admins/:id', adminController.deleteAdmin);


module.exports = router;
