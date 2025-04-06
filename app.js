const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./src/routes/appointment.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => console.error(err));
