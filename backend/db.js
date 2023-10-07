const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dinesh:dyyayavar7491@gmail.com@cluster0.snfr0jn.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
        console.log('connected');
    });
}

module.exports = mongoDB;