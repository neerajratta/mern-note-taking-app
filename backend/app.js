const express = require('express');
const cors = require('cors');
const noteRoutes = require('./src/routes/noteRoutes');
const connectToDB = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
console.log(__dirname);
app.use('/api', noteRoutes);

// Call the connection function
const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    try {
        await connectToDB();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

startServer();
