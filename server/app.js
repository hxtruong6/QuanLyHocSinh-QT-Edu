require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { connectDb, models } = require('./models');
const { Student } = require('./models');

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

async function startServer() {
  await connectDb();

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server started on port ${port}`));

  var kittySchema = new mongoose.Schema({
    name: String,
  });
  var Kitten = mongoose.model('Kitten', kittySchema);

  var silence2 = new Kitten({ name: 'Silence545' });
  await silence2.save();

  Kitten.find(function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });
}

startServer();

// var kittySchema = new mongoose.Schema({
//   name: String,
// });
// var Kitten = mongoose.model('Kitten', kittySchema);
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
// silence.save(function(err, silence) {
//   if (err) return console.error(err);
// });

// var silence2 = new Kitten({ name: 'Silence2' });
// console.log(silence2); // 'Silence'
// silence2.save(function(err, silence2) {
//   if (err) return console.error(err);
//   console.log('xxx ', silence2);
// });

// Kitten.find(function(err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });
// var student = new Student({ name: 'Jack' });
// console.log(student.name);

// app.post('/person', async (request, response) => {
//   try {
//     var person = new PersonModel(request.body);
//     var result = await person.save();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/people', async (request, response) => {
//   try {
//     var result = await PersonModel.find().exec();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/person/:id', async (request, response) => {
//   try {
//     var person = await PersonModel.findById(request.params.id).exec();
//     response.send(person);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.put('/person/:id', async (request, response) => {
//   try {
//     var person = await PersonModel.findById(request.params.id).exec();
//     person.set(request.body);
//     var result = await person.save();
//     console.log(request);
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.delete('/person/:id', async (request, response) => {
//   try {
//     var result = await PersonModel.deleteOne({ _id: request.params.id }).exec();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
