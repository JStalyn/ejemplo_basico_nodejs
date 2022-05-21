const express = require('express');


const abc = express.Router();



abc.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

abc.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = abc;