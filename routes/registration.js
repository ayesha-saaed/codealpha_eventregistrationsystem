const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// POST: Register a user for an event
router.post('/register', registrationController.registerUser);

// GET: Get all registrations for a specific event
router.get('/event/:eventId', registrationController.getRegistrationsByEvent);

module.exports = router;

const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authMiddleware, registrationController.registerUser);
router.get('/event/:eventId', authMiddleware, registrationController.getRegistrationsByEvent);