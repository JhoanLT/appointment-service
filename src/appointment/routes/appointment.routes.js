const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

// Define routes for appointment-related operations
router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);

module.exports = router;