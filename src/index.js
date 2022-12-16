const express = require('express');
const routes = require('./routes')

const app = express();

// Middleware: Body parser
app.use(express.json())

app.use('/api', routes)

app.listen(8080, ()=>{
  console.log('Server Berjalan di Port : 8080');
});