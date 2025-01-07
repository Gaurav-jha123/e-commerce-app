const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Book } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is up and running!");
});

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            success: true,
            message: "Fetched all the books successfully",
            data: books
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error fetching books",
            error: err.message
        });
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
