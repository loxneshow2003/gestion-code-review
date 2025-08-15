const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/gestion-code-review', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/reviews', reviewRoutes);

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
