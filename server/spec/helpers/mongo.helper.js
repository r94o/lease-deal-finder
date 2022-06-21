const mongoose = require("mongoose");

beforeAll((done) => {
  mongoose.connect(process.env.MONGODB_TEST_URI);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('open', done);
});

afterAll((done) => {
  mongoose.connection.close(true, done);
});