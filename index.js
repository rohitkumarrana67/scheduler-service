const express = require('express');
const app = express();
const router = require('./routes/scheduler_routes');

app.use(express.json());
app.use(router);

app.listen(8001, () =>{
  console.log('server is running');
})