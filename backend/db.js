const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dinesh:dyyayavar7491@gmail.com@cluster0.snfr0jn.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, res) => {
        if (err) console.log('---', err);
        else {
            console.log('connected');

            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else console.log(data);
            })
        }


    });
}

module.exports = mongoDB;