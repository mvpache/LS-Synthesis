'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let nextItemId = 0;
function getNextId() {
  return (nextItemId++).toString();
}

const items = [];

app.get('/items', (req, res) => {
  res.send(items.map(item => {
    return { id: item.id, name: item.name, price: item.price };
  }));
});

app.get('/items/:id', (req, res) => {
  const item = items.find(item => item.id === req.params.id) || null;
  res.send(item);
});

app.post('/items', (req, res) => {
  const newItem = Object.assign({}, req.body, {
    id: getNextId()
  });

  items.push(newItem);
  res.send(newItem);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
