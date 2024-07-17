require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const bulletinRoutes = require('./routes/bulletin');
const authRoutes = require('./routes/auth');  

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// static files dari uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/bulletins', bulletinRoutes);
app.use('/api', authRoutes);  // routes buat auth

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
