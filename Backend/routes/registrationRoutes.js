// routes/registration.js
const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");
const authMiddleware = require("../middleware/authMiddleware");

// Register for an event (protected)
router.post("/register", authMiddleware, registrationController.registerUser);

// Get all registrations for a specific event (protected)
router.get("/event/:eventId", authMiddleware, registrationController.getRegistrationsByEvent);

module.exports = router;
