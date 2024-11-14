// index.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        // Dapatkan query parameter dari permintaan
        const queryParams = req.query;

        // Buat URL tujuan
        const targetUrl = `http://firebasepush.infinityfreeapp.com/fire.php`;
        
        // Kirim permintaan GET ke URL tujuan dengan query parameter yang sama
        const response = await axios.get(targetUrl, { params: queryParams });
        
        // Kembalikan respons dari server tujuan
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
