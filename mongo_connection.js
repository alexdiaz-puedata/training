const mongoose = require('mongoose');

// Reemplaza con tu URL de conexión local
const MONGODB_URI = 'mongodb://localhost:27017/dropshipping';

// Opciones de conexión
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log('MongoDB conectado correctamente');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = { connectDB };
