require('dotenv').config();
const app = require('./app');
const connectToDB = require('./database/index');

app.set('HOST', process.env.HOST || '127.0.0.1');
app.set('PORT', process.env.PORT || 3000);

connectToDB()
  .then(connection => {
    console.log('successfully connected to database');
    app.listen(app.get('PORT'), app.get('HOST'), () => {
      console.log(`Server is running on port ${app.get('PORT')}`);
    });
  })
  .catch(error => console.log(error));
