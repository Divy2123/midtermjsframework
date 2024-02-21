
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', (req, res) => {
    res.render('contact');
});

router.post('/', async (req, res) => {
    try {
        const { studentNumber, firstName, lastName, email } = req.body;
        const contact = new Contact({ studentNumber, firstName, lastName, email });
        await contact.save();
        res.send('Contact form submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
