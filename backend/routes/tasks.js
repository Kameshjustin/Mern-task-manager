const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

// All routes below this line require a valid JWT token
router.use(auth);

// @route   GET /api/tasks
// @desc    Get all tasks for logged-in user
router.get('/', async (req, res) => {
    try {
        const { status, priority, sortBy = 'createdAt', order = 'desc' } = req.query;

        // Ensure we only find tasks belonging to the logged-in user
        const query = { user: req.userId };
        if (status) query.status = status;
        if (priority) query.priority = priority;

        const sortOrder = order === 'asc' ? 1 : -1;
        const tasks = await Task.find(query).sort({ [sortBy]: sortOrder });

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Server error fetching tasks' });
    }
});

// @route   POST /api/tasks
// @desc    Create a new task
router.post('/', async (req, res) => {
    console.log("📥 Incoming Data:", req.body);
    console.log("👤 User ID from Token:", req.userId);

    try {
        // We spread req.body and manually add the user ID from the auth middleware
        const newTask = new Task({
            ...req.body,
            user: req.userId
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        console.error("❌ Save Error:", err.message);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
