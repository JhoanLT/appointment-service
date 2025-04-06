const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    reason: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);