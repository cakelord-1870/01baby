// install express with `npm install express` 
const express = require('express');
const app = express();

app.use(express.static('public'));

// export 'app'
module.exports = app;
