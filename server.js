// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const cryptoRoutes = require('./routes/cryptoRoutes');
const { fetchAndStoreCryptoData } = require('./utils/cryptoUtils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/cryptodata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api', cryptoRoutes);

// Schedule cron job to fetch data every 30 seconds
cron.schedule('*/30 * * * * *', () => {
  fetchAndStoreCryptoData();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});