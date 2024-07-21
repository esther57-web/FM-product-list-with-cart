const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/article');
const path = require('path');
require('dotenv').config(); 

const app = express();

mongoose.connect(`mongodb+srv://esther57-web:${process.env.MONGO_PASSWORD}@fmproductlistwithcart.wpd9p0j.mongodb.net/?retryWrites=true&w=majority&appName=FMproductlistwithcart`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/articles', articleRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;