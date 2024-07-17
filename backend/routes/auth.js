const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const hashedPassword = process.env.ADMIN_PASSWORD;

router.post('/admin-login', async (req, res) => {
    const { password } = req.body;
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (isMatch) {
            res.status(200).json({ authenticated: true });
        } else {
            res.status(401).json({ authenticated: false, message: 'Wrong password' });
        }
    } catch (error) {
        console.error('Error comparing passwords:', error);
        res.status(500).json({ message: 'An error occurred during authentication' });
    }
});

module.exports = router;
