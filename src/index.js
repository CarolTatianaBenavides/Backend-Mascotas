// const express = require('express');   // CommonJS
import express from 'express';           // ESModule

import usersRoute from './routes/users.routes.js';

const app = express();

app.get('/health' , (req, res) => {
    res.send('Servidor de SenaStore Funcionando!')
});

app.use( '/api/users' , usersRoute );

//Obtener todos los usuarios


// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});