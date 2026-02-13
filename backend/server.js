const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();

// --- 1. MIDDLEWARE ---
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// --- 2. DATABASE CONNECTION ---
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// --- 3. ROUTES ---

// Root route to prevent "Cannot GET /"
app.get('/', (req, res) => {
    res.send('TaskFlow API is running. Use /api/health to check status.');
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Task Manager API is running' });
});

// Feature routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// --- 4. START SERVER ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
