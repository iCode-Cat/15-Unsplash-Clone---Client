const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');
const image = require('./routes/api/image');
const app = express();

// Connect to database
connectDB();

// Settings
const PORT = process.env.PORT || 3001;
app.use(cors(), express.json());

// Routes
app.use('/api/image', image);

// Server Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
