const mongoose = require('mongoose');

const connectToDB = async () => {
    const mongoURI = 'mongodb://localhost:27017/notesdb';
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectToDB;