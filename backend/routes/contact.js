const express = require('express');
const supabase = require('../supabaseClient');

const router = express.Router();

// POST /api/contact - "Get in touch" / "Start Your Project" form submissions
router.post('/', async (req, res) => {
  const { name, email, phone, company, message, source } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const { error } = await supabase.from('contact_messages').insert({
    name,
    email,
    phone: phone || null,
    company: company || null,
    message,
    source: source || 'website',
  });

  if (error) {
    console.error('[POST /api/contact]', error.message);
    return res.status(500).json({ error: 'Could not submit your message. Please try again.' });
  }

  res.status(201).json({ success: true });
});

module.exports = router;
