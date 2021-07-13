// install express with `npm install express` 
const express = require('express');
const app = express();
const port = 3000; 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('public'));

// export 'app'

module.exports = app;
