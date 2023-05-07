const express = require('express');
// const db = require('./routes/db-config');
const app = express();
const cookie = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// app.use('/js', express.static(__dirname + "/public/js"));
// app.use('/css', express.static(__dirname + "/public/css"));
app.use(cookie());
app.use(express.json());
// db.connect((err) => {
//     if(err)throw err;
//     console.log("Connected to database");
// });
// app.use('/', require('./routes/pages'));
app.use('/api', require('./controllers/auth'));
// sets up CORS for the api
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // change this to the frontend url
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Set-Cookie');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
// app.use('/api', require('./routes/api'));
app.listen(PORT);
console.log(`Listening on port ${PORT}`);

