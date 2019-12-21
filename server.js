'use strict';
const express = require ('express');
const server = express ();
const PORT = process.env.PORT || 5500;
server.use(express.static('public'));
server.get('/test' , (request , response) => {
  response.send ('work');
});
server.listen (PORT,() => console.log ('hello'));
