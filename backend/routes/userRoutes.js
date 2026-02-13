const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Good practice for security

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 1. Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        // 2. Hash password (correct way to handle sensitive data)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Save User
        user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ msg: "User registered successfully!" });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
