const express = require('express');
const mongoose = require('mongoose');
const allRoutes = require('./routes');

const url = 'mongodb://localhost/indiumDB';

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on('open', () => {
  console.log('connected to db');
});

app.use(express.json());

app.use(allRoutes);

app.listen(4000, () => { console.log('lisning to port 4000'); });
