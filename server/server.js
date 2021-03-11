const express = require('express');
const path = require('path');
const app = express();
const api = require('./routes/index');

//app.use(express.static(path.join(__dirname, '../build')));
app.use('/api', api);

const port = 3002;
app.listen(port, ()=>console.log(`Listening on port ${port}`));
