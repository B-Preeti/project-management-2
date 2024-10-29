const express = require('express');
const db = require('../db');
const router = express.Router();
const validateProject = (req, res, next) => {
    const { name, description, date } = req.body;
    if (!name || !description || !date) {
        return res.status(400).json({ error: 'Name, description, and date are required.' });
    }
    next();
};

router.post('/projects', validateProject, async (req, res) => {
    const { name, description, date } = req.body;

    const query = 'INSERT INTO projects (name, description, date) VALUES (?, ?, ?)';
    try {
        const results = await db.query(query, [name, description, date]);
        res.status(201).json({ id: results.insertId, name, description, date });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the project.' });
    }
});

module.exports = router;
