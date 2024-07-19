# Express Stock/Crypto Price Tracker

This project is an Express.js application that polls real-time data for 5 stocks or cryptocurrencies every few seconds from the LiveCoinWatch API and stores the data in a MongoDB database. The stored data can be fetched via a REST API.

## Features

- Polls real-time data every few seconds for 5 stocks or cryptocurrencies.
- Uses LiveCoinWatch API for data.
- Stores the data in a MongoDB database.
- Provides API endpoints to fetch the latest data.

## Prerequisites

- Node.js
- MongoDB
- LiveCoinWatch API Key

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/HarshaKottur/ExpressstockPriceTracker.git
    cd ExpressstockPriceTracker
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up MongoDB:
    Ensure MongoDB is running and accessible. The default configuration connects to `mongodb://0.0.0.0:27017/cryptodata`.

4. Create an API Key from Crypto Data:
    Sign up for free and create an API key from [LiveCoinWatch API](https://www.livecoinwatch.com/tools/api).
    Add this API key in `utils/cryptoUtils.js` in the `x-api-key` header:
    ```js
    'x-api-key': 'your_api_key'
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running on `http://localhost:3000`.

3. The application will automatically poll data every few seconds and store it in the MongoDB database.


## Project Structure

- `server.js`: The main server file that sets up the Express server and schedules the data polling.
- `routes/cryptoRoutes.js`: Contains the route for fetching crypto data.
- `utils/cryptoUtils.js`: Utility functions for fetching and storing crypto data.
- `models/CryptoData.js`: Mongoose model for storing crypto data.

## Example Code

### `server.js`
```js
// Please set the time accordingly
// Schedule a cron job to fetch data every 30 seconds
cron.schedule('*/30 * * * * *', () => {
  fetchAndStoreCryptoData();
});

