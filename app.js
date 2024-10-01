require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

const holderRoutes = require('./routes/holder');
const laptopRoutes = require('./routes/laptop');
const entryRoutes = require('./routes/entry');


app.use(holderRoutes);
app.use(laptopRoutes);
app.use(entryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});