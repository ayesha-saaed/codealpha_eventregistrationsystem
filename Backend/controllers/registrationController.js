// controllers/registrationController.js
const Registration = require("../models/registration");

// Register a user for an event
exports.registerUser = async (req, res) => {
  try {
    const { eventId, name, email } = req.body;

    const newRegistration = new Registration({ eventId, name, email });
    await newRegistration.save();

    res.status(201).json({ message: "Registered successfully", registration: newRegistration });
  } catch (error) {
    res.status(500).json({ error: "Registration failed", details: error.message });
  }
};

// Get all registrations for a specific event
exports.getRegistrationsByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const registrations = await Registration.find({ eventId }).populate("eventId");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registrations", details: error.message });
  }
};
