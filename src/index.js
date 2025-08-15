const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans l application Gestion des Revues de Code!');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
