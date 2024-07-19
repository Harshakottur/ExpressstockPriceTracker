const express = require('express');
const router = express.Router();
const CryptoData = require('../models/CryptoData');

router.get('/crypto/:code', async (req, res) => {
  try {
    const { code } = req.params;
    const cryptoData = await CryptoData.find({ code })
      .sort({ timestamp: -1 })
      .limit(20);
    res.json(cryptoData);
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/crypto', async (req, res) => {
    try {
    //   const { code } = req.params;
      const cryptoData = await CryptoData.find()
        .sort({ timestamp: -1 })
        .limit(20);
      res.json(cryptoData);
    } catch (error) {
      console.error('Error fetching crypto data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;