const axios = require('axios');
const CryptoData = require('../models/CryptoData');

const fetchAndStoreCryptoData = async () => {
  try {
    const apiUrl = 'https://api.livecoinwatch.com/coins/list';

    const config = {
      headers: {
        'content-type': 'application/json',
        'x-api-key': 'your_api_key' // Replace with your API key
      },
      data: {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 5,
        meta: false
      }
    };

    // Fetch data from API
    const response = await axios.post(apiUrl, config.data, { headers: config.headers });
    const responseData = response.data;

    // Store data in MongoDB
    for (const coin of responseData) {
      const newCryptoData = new CryptoData({
        code: coin.code,
        rate: coin.rate,
        volume: coin.volume,
        cap: coin.cap,
        delta: coin.delta
      });
      await newCryptoData.save();
    }

    console.log('Crypto data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
  }
};

module.exports = { fetchAndStoreCryptoData };