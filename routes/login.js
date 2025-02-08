const express = require('express');
const router = express.Router();
const db = require('../db/connections.js'); // Asegúrate de que este archivo existe y configura tu base de datos
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Actualizar una cita (toda la información por el body)
router.post('/login', (req, res) => {
  const { contrasena, mail } = req.body;

  // Verificar que los campos requeridos estén presentes
  if (!contrasena || !mail) {
    return res.status(400).json({ message: 'la contraseña es obligatoria' });
      }
    // Generar Token JWT
    const token = jwt.sign(
        { id: 1, mail: "fab.quintanilla@gmail.com", nombre: "fabian quintanilla" },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
  
      // Responder con el token
      res.json({ message: 'Usuario autenticado', token })
    });
// 📌 Middleware para verificar token JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(403).json({ message: 'Token requerido' });
    }
  
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido' });
      }
      req.user = decoded;
      next();
    });
  };
  
  // Ruta protegida con JWT: `/profile`
  router.get('/profile', verifyToken, (req, res) => {
    res.json({ message: 'Acceso permitido', user: req.user });
  });
  
module.exports = router; 

