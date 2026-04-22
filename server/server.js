const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoute = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
