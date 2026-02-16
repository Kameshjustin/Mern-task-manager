const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// 1. LOAD ENVIRONMENT VARIABLES FIRST
// This must happen before you import routes or use process.env
dotenv.config();

const app = express();

// 2. IMPORT ROUTES 
// Importing after dotenv.config() ensures routes have access to JWT_SECRET
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// --- 3. MIDDLEWARE ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- 4. DATABASE CONNECTION ---
// Using MONGODB_URL to match exactly what is in your .env file
const dbURI = process.env.MONGODB_URL;

if (!dbURI) {
    console.error('❌ Error: MONGODB_URL is not defined in the .env file');
    process.exit(1); // Stop the server if DB URL is missing
}

mongoose.connect(dbURI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:');
    console.error(err);
  });

// --- 5. ROUTES ---
// Root route
app.get('/', (req, res) => {
  res.send('TaskFlow API is running. Use /api/health to check status.');
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Task Manager API is running',
    dbStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Feature routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// --- 6. START SERVER ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
