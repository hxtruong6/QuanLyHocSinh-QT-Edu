require('dotenv').config();
const mongoose = require('mongoose');

const Student = require('./student');

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

async function connectDb() {
  return new Promise(function(resolve, reject) {
    const db = mongoose.connection;
    db.on('error', function() {
      reject(console.error.bind(console, 'connection error:'));
    });
    db.once('open', function() {
      // we're connected!
      resolve(console.log('Db connected'));
    });
  });
}

const models = {
  Student,
};

module.exports = { models, connectDb };
