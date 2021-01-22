
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

// app.listen(8080);

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();

// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.json());

// app.use(function(req, res, next){
//  res.setHeader("Access-Control-Allow-Origin", "*");
//  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//  res.setHeader("Access-Control-Allow-Headers", "content-type");
//  res.setHeader("Content-Type", "application/json");
//  res.setHeader("Access-Control-Allow-Credentials", true);
//  next();
// });

app.listen(8080, function(){ console.log('Servidor Web rodando na porta 9090') });