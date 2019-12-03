const mongoose = require('mongoose');
require('dotenv').config();

const { DB, DB_USER, DB_PASSWORD, DB_CONN_STRING } = process.env;

const connectionString = DB_CONN_STRING.replace('<USER>', DB_USER)
  .replace('<PASSWORD>', DB_PASSWORD)
  .replace('<DB>', DB);

const connectToDB = () => {
  console.log(connectionString);
  return new Promise((resolve, reject) => {
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      })
      .then(connection => resolve(connection))
      .catch(error => reject(error));
  });
};

module.exports = connectToDB;
