const app = require('express')();
const router = require('./routes/scheduler_routes');

app.use(router);

app.listen(8001, () =>{
  console.log('server is running');
})